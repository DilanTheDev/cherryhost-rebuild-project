import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Creating a custom PayPal icon since it's not in lucide-react
const PayPalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 7h10c.7 0 1.4.3 1.9.8.5.6.7 1.3.5 2l-1.3 6c-.2.8-.8 1.2-1.5 1.2h-7.8c-.3 0-.6-.2-.7-.5L5 7.5c-.1-.1 0-.3.1-.4.1-.1.3-.1.4-.1h1z"></path>
    <path d="M10.5 17.5h3"></path>
    <path d="M2 4h3.5l.7 3"></path>
    <path d="M18.5 11h2c.7 0 1.4.3 1.9.8.5.6.7 1.3.5 2l-1 4.8c-.2.8-.8 1.3-1.6 1.4H17"></path>
  </svg>
);

const PaymentMethodsTab = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: ""
  });
  
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [autoRenew, setAutoRenew] = useState(true);

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with PayPal API
    // For now just mock adding the card
    setPaymentMethods([
      ...paymentMethods,
      {
        id: paymentMethods.length + 1,
        type: "card",
        last4: cardDetails.cardNumber.slice(-4),
        expiry: `${cardDetails.expiryMonth}/${cardDetails.expiryYear}`,
        name: cardDetails.cardName
      }
    ]);
    setShowAddCard(false);
    setCardDetails({
      cardNumber: "",
      cardName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 space-y-6">
        <h3 className="text-white text-xl font-bold">Payment Methods</h3>
        <p className="text-gray-400">Manage your payment methods for automatic renewals and purchases</p>
        
        {paymentMethods.length > 0 ? (
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex justify-between items-center p-4 bg-black/20 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-3">
                  <CreditCard className="text-white" />
                  <div>
                    <p className="text-white font-medium">•••• •••• •••• {method.last4}</p>
                    <p className="text-gray-400 text-sm">Expires {method.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-white border-gray-700">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-400 border-gray-700 hover:bg-red-900/20">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 bg-black/20 rounded-lg border border-gray-700">
            <CreditCard size={40} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-300">No payment methods have been added yet</p>
          </div>
        )}
        
        {!showAddCard ? (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button 
              className="bg-cherry-600 hover:bg-cherry-700 w-full sm:w-auto"
              onClick={() => setShowAddCard(true)}
            >
              <CreditCard size={16} className="mr-2" />
              Add Credit Card
            </Button>
            <Button 
              variant="outline"
              className="border-gray-700 text-white hover:bg-blue-900/20 w-full sm:w-auto"
            >
              <div className="mr-2 text-blue-400">
                <PayPalIcon />
              </div>
              Pay with PayPal
            </Button>
          </div>
        ) : (
          <form onSubmit={handleAddCard} className="space-y-4">
            <h4 className="text-white font-bold">Add New Card</h4>
            <div>
              <Label htmlFor="cardNumber" className="text-gray-300">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="bg-black/20 border-gray-700 text-white"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                maxLength={19}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="cardName" className="text-gray-300">Name on Card</Label>
              <Input
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                className="bg-black/20 border-gray-700 text-white"
                value={cardDetails.cardName}
                onChange={handleCardDetailsChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="expiryMonth" className="text-gray-300">Month</Label>
                <Input
                  id="expiryMonth"
                  name="expiryMonth"
                  placeholder="MM"
                  className="bg-black/20 border-gray-700 text-white"
                  value={cardDetails.expiryMonth}
                  onChange={handleCardDetailsChange}
                  maxLength={2}
                  required
                />
              </div>
              <div>
                <Label htmlFor="expiryYear" className="text-gray-300">Year</Label>
                <Input
                  id="expiryYear"
                  name="expiryYear"
                  placeholder="YY"
                  className="bg-black/20 border-gray-700 text-white"
                  value={cardDetails.expiryYear}
                  onChange={handleCardDetailsChange}
                  maxLength={2}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  type="password"
                  placeholder="***"
                  className="bg-black/20 border-gray-700 text-white"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  maxLength={4}
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                className="border-gray-700 text-white"
                onClick={() => setShowAddCard(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-cherry-600 hover:bg-cherry-700">
                Add Card
              </Button>
            </div>
          </form>
        )}
      </div>
      
      <div className="glass-card p-6">
        <h3 className="text-white text-xl font-bold mb-4">Billing Settings</h3>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-white font-medium">Automatic Renewal</h4>
              <p className="text-gray-400 text-sm">Automatically renew your services before they expire</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={autoRenew}
                onChange={() => setAutoRenew(!autoRenew)}
              />
              <div className={`w-11 h-6 rounded-full peer peer-focus:ring-2 peer-focus:ring-bright ${
                autoRenew ? 'bg-bright' : 'bg-gray-700'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <Button className="bg-bright hover:bg-bright/90 text-black font-bold">
              View Billing History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsTab;
