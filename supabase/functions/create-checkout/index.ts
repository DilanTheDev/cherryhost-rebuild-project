import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  planId: string;
  serverName: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get request body
    const { planId, serverName }: CheckoutRequest = await req.json();

    // Get authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") as string;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get authenticated user
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);

    if (userError || !user) {
      throw new Error('Authentication required');
    }

    // Get plan details
    const { data: plan, error: planError } = await supabase
      .from("plans")
      .select("*")
      .eq("id", planId)
      .single();

    if (planError || !plan) {
      throw new Error('Invalid plan ID');
    }

    // In a real implementation, this would integrate with a payment provider like Stripe
    // For demonstration, we'll create a pending invoice and server
    
    // Create server record with pending status
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 month from now
    
    const { data: server, error: serverError } = await supabase
      .from("servers")
      .insert({
        user_id: user.id,
        plan_id: planId,
        name: serverName,
        status: "pending",
        expires_at: expiryDate.toISOString()
      })
      .select()
      .single();

    if (serverError) {
      throw new Error(`Error creating server: ${serverError.message}`);
    }

    // Create pending invoice
    const { data: invoice, error: invoiceError } = await supabase
      .from("invoices")
      .insert({
        user_id: user.id,
        server_id: server.id,
        amount: plan.price,
        status: "pending"
      })
      .select()
      .single();

    if (invoiceError) {
      throw new Error(`Error creating invoice: ${invoiceError.message}`);
    }

    // Return success with checkout URL
    // In a real implementation, this would be a URL to your payment provider's checkout page
    return new Response(
      JSON.stringify({
        success: true,
        checkoutUrl: `/payment/${invoice.id}`,
        server: server,
        invoice: invoice
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error in create-checkout function:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      }
    );
  }
});
