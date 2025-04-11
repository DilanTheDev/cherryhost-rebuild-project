
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Youtube, Instagram } from "lucide-react";

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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
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
            
            {/* Status Badge */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/70 text-sm mb-2">Server Status:</p>
              <iframe 
                src="https://status.cherryhost.top/badge?theme=dark" 
                width="250" 
                height="30" 
                frameBorder="0" 
                scrolling="no" 
                style={{ colorScheme: "normal" }} 
                title="CherryHost Server Status"
              />
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
              <li><a href="https://panel.cherryhost.top" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cherry-400">Game Panel</a></li>
              <li><a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cherry-400">Billing Area</a></li>
              <li><a href="https://status.cherryhost.top" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cherry-400">Server Status</a></li>
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
