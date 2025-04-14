
import { useEffect } from "react";
import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  title: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Trustpilot Reviewer",
    date: "6th of October 2024",
    rating: 5,
    title: "The customer service has been amazing",
    text: "The customer service has been amazing. They make it super fast. I've had my questions answered, and someone always responds, and someone always resolves the situation quickly and..."
  },
  {
    name: "Trustpilot Reviewer",
    date: "5th of September 2024",
    rating: 5,
    title: "Best customer support I've ever had",
    text: "Support is was easy to use, person was kind to me and quickly dealt with the issue. Also once contacted they immediately fixed the situation quickly and..."
  },
  {
    name: "Trustpilot Reviewer",
    date: "11th of October 2024",
    rating: 5,
    title: "Amazing",
    text: "This is by far the best server hosting company I have ever used. They have AMAZING support and good prices. I've been using Cherry hosting for a couple of..."
  },
  {
    name: "Trustpilot Reviewer",
    date: "11th of October 2026",
    rating: 5,
    title: "Amazing",
    text: "This is by far the best server hosting company I have ever used. They have AMAZING support and good prices. I've been using Cherry hosting for a couple of..."
  },
  {
    name: "Trustpilot Reviewer",
    date: "11th of October 2025",
    rating: 5,
    title: "Amazing",
    text: "This is by far the best server hosting company I have ever used. They have AMAZING support and good prices. I've been using Cherry hosting for a couple of..."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full min-h-[250px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">T</span>
        </div>
        <div>
          <p className="text-white/90 text-sm">{testimonial.name}</p>
          <p className="text-white/50 text-xs">{testimonial.date}</p>
        </div>
      </div>
      
      <div className="flex my-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-green-400 text-green-400" : "fill-gray-400 text-gray-400"}`} 
          />
        ))}
      </div>
      
      <h3 className="text-white font-bold mb-2">{testimonial.title}</h3>
      <p className="text-white/70 text-sm">{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const autoAdvance = setInterval(() => {
      const nextButton = document.querySelector('[data-carousel-next]');
      if (nextButton) {
        (nextButton as HTMLButtonElement).click();
      }
    }, 5000);

    return () => clearInterval(autoAdvance);
  }, []);

  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-xl font-medium text-white mb-2">We're rated</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Excellent</h3>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 fill-green-400 text-green-400" />
              ))}
            </div>
            <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg" alt="Trustpilot" className="h-6" />
          </div>
          
          <div className="w-full md:w-3/4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/5 lg:basis-1/5">
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
