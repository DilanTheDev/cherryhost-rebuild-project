
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-midnight to-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm">638 reviews on Trustpilot</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Minecraft Server<br />
              Hosting Made Easy!
            </h1>

            <p className="text-white/70 text-lg">
              Premium Minecraft servers with instant setup, powerful control panel, 
              and 24/7 support. Start playing with your friends in minutes!
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer">
                <Button className="bg-cherry-600 hover:bg-cherry-700 text-white px-8 py-6 text-lg">
                  Order Now
                </Button>
              </a>
              <span className="text-green-400 text-sm my-auto">Get 10% OFF on your first order with code: CHERRY</span>
            </div>

            <div className="flex flex-wrap gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>Java & Bedrock Edition Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>More than 7500 Modpacks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-auto md:w-80">
              <div className="relative rounded-xl bg-gradient-to-br from-midnight to-black border border-white/10 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-600 px-3 py-1 rounded-full">
                    <span className="text-white font-semibold">Slime</span>
                  </div>
                  <div className="bg-cyan-400 px-2 py-1 rounded text-xs font-bold text-black">BEST CHOICE</div>
                </div>
                
                <div className="my-4 flex flex-col">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-white">5GB</span>
                    <span className="text-white/70">RAM</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2 mb-6">
                    The best package for vanilla or slightly modded gameplay.
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/70 text-sm">Starting at</span>
                    <span className="text-white text-xl font-bold">$15.99</span>
                    <span className="text-white/70 text-sm">/mo</span>
                  </div>
                  
                  <a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium">
                      Order Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
