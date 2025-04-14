import { Button } from "@/components/ui/button";
import { StarIcon, Zap } from "lucide-react";
const Hero = () => {
  return <div className="relative bg-gradient-to-b from-midnight to-black py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-white/80 text-xs sm:text-sm">638 reviews on Trustpilot</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Minecraft Server<br />
              Hosting Made Easy!
            </h1>

            <p className="text-white/70 text-base sm:text-lg">
              Premium Minecraft servers with instant setup, powerful control panel, 
              and 24/7 support. Start playing with your friends in minutes!
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://billing.lightninghost.top" target="_blank" rel="noopener noreferrer">
                <Button className="bg-lightning-500 hover:bg-lightning-600 text-black px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  Order Now
                </Button>
              </a>
              <span className="text-yellow-400 text-xs sm:text-sm my-auto">Get 10% OFF on your first order with code: LIGHTNING</span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-lightning-400 rounded-full"></div>
                <span>Java & Bedrock Edition Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-lightning-400 rounded-full"></div>
                <span>More than 7500 Modpacks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-lightning-400 rounded-full"></div>
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
              <div className="relative rounded-xl bg-gradient-to-br from-midnight to-black border border-white/10 p-4 sm:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="bg-lightning-500 px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-black font-semibold text-sm">BEST VALUE</span>
                  </div>
                  <div className="bg-lightning-400 px-2 py-1 rounded text-xs font-bold text-black">MOST POPULAR</div>
                </div>
                
                <div className="my-3 sm:my-4 flex flex-col">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white">5GB</span>
                    <span className="text-white/70">RAM</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2 mb-4 sm:mb-6">
                    The best package for vanilla or slightly modded gameplay.
                  </p>
                </div>

                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/70 text-sm">Starting at</span>
                    <span className="text-white text-xl font-bold">$5</span>
                    <span className="text-white/70 text-sm">/mo</span>
                  </div>
                  
                  <a href="https://billing.lightninghost.top" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-lightning-500 hover:bg-lightning-600 text-black font-medium py-0 px-[29px] mx-0 my-[16px]">
                      Order Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;