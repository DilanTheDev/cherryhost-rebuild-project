
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DiscordLogo, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/lovable-uploads/b6227ae5-fade-458d-b4e9-27a0bed3ca08.png" alt="CherryHost Logo" className="h-12" />
            </Link>
            <p className="text-white/70 text-sm">
              Premium Minecraft server hosting with 24/7 support and an easy-to-use control panel.
            </p>
            <div className="flex space-x-4">
              <p className="text-white/70">Follow Us on</p>
              <Link to="#" className="text-white hover:text-cherry-400">
                <DiscordLogo className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-white hover:text-cherry-400">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-white hover:text-cherry-400">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-white hover:text-cherry-400">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Minecraft Server Hosting</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Modpacks for Minecraft Server</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Minecraft Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Clients</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Help & Guides</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Game Panel</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Billing Area</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">CherryHost</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Blog</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Careers</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Partnerships</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Privacy Policy</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-cherry-400">Terms Of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-sm">© 2025 CherryHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
