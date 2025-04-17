import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Can I upload an existing world to the server?",
    answer: "Yes! You can easily upload your existing Minecraft world through our game panel. Simply compress your world folder into a ZIP file, upload it via our file manager, extract it, and configure your server to use it."
  },
  {
    question: "What if I need to upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your server plan at any time through your client area. The change will take effect immediately, and we'll prorate any price differences to your next billing cycle."
  },
  {
    question: "Can I install mods, plugins, or modpacks to my server?",
    answer: "Absolutely! Our control panel makes it easy to install popular modpacks with just a few clicks. You can also manually upload and manage any mods or plugins you want to use on your server."
  },
  {
    question: "Do you offer refunds if I change my mind?",
    answer: "Yes, we offer a 24-hour money-back guarantee if you're not satisfied with our service. Simply contact our support team within 24 hours of your purchase to request a refund."
  },
  {
    question: "What are the hardware specs of the servers?",
    answer: "We use high-performance AMD Ryzen 9 or Intel i9 processors, NVMe SSDs for storage, and enterprise-grade networking with DDoS protection. Our servers are hosted in multiple locations worldwide to ensure low latency."
  }
];

const FAQ = () => {
  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card border-0">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
