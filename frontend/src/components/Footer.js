import { Mail, Twitter, Linkedin, Github, Smartphone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ theme }) {
  const year = new Date().getFullYear();
  
  return (
    <footer className={`transition-all duration-300 ${
      theme === "dark" ? "bg-gradient-to-b from-[#161616] to-[#004548] text-[#f8d8a2]" : "bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] text-[#4a403b]"
    }`}>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#14846f] to-[#47e5b5] bg-clip-text text-transparent">
                Apeiron
              </span>
            </div>
            <p className={`mb-4 text-sm ${theme === "dark" ? "text-[#f8d8a2]/80" : "text-[#4a403b]/80"}`}>
              Revolutionizing the industry with innovative solutions that bring value to our customers.
            </p>
            <div className="flex space-x-3 mt-4">
              <SocialLink href="https://github.com" Icon={Github} theme={theme} />
              <SocialLink href="https://twitter.com" Icon={Twitter} theme={theme} />
              <SocialLink href="https://linkedin.com" Icon={Linkedin} theme={theme} />
              <SocialLink href="mailto:contact@apeiron.com" Icon={Mail} theme={theme} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/" text="Home" theme={theme} />
              <FooterLink to="/about" text="About Us" theme={theme} />
              <FooterLink to="/services" text="Services" theme={theme} />
              <FooterLink to="/products" text="Products" theme={theme} />
              <FooterLink to="/contact" text="Contact" theme={theme} />
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`}>
              Resources
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/blog" text="Blog" theme={theme} />
              <FooterLink to="/faq" text="FAQ" theme={theme} />
              <FooterLink to="/support" text="Support" theme={theme} />
              <FooterLink to="/privacy" text="Privacy Policy" theme={theme} />
              <FooterLink to="/terms" text="Terms of Service" theme={theme} />
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className={`mr-2 mt-1 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`} />
                <span className="text-sm">123 Innovation Drive, Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Smartphone size={16} className={`mr-2 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className={`mr-2 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`} />
                <span className="text-sm">contact@apeiron.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className={`mr-2 mt-1 ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`} />
                <span className="text-sm">Mon - Fri: 9:00 AM - 5:00 PM<br />Sat - Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className={`mt-10 p-6 rounded-lg ${
          theme === "dark" ? "bg-[#004548]/30" : "bg-[#14846f]/5"
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className={`font-semibold ${theme === "dark" ? "text-[#47e5b5]" : "text-[#14846f]"}`}>
                Subscribe to Our Newsletter
              </h4>
              <p className="text-sm mt-1">Stay updated with our latest news and offers.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className={`px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none ${
                  theme === "dark" 
                    ? "bg-[#1f1f1f] border-[#004548] text-white placeholder:text-gray-400" 
                    : "bg-white border-[#14846f]/20 text-[#4a403b] placeholder:text-gray-500"
                } border`}
              />
              <button
                className={`px-4 py-2 rounded-r-md font-medium text-white transition-colors ${
                  theme === "dark" ? "bg-[#47e5b5] hover:bg-[#29ba8e]" : "bg-[#14846f] hover:bg-[#29ba8e]"
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`mt-10 border-t ${
          theme === "dark" ? "border-[#004548]/50" : "border-[#14846f]/10"
        }`}></div>
        
        {/* Copyright */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm">
            © {year} Apeiron. All Rights Reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4 text-xs md:text-sm">
              <a href="/privacy" className={`hover:underline ${
                theme === "dark" ? "hover:text-[#47e5b5]" : "hover:text-[#14846f]"
              }`}>
                Privacy Policy
              </a>
              <a href="/terms" className={`hover:underline ${
                theme === "dark" ? "hover:text-[#47e5b5]" : "hover:text-[#14846f]"
              }`}>
                Terms of Service
              </a>
              <a href="/cookies" className={`hover:underline ${
                theme === "dark" ? "hover:text-[#47e5b5]" : "hover:text-[#14846f]"
              }`}>
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Media Link Component
function SocialLink({ href, Icon, theme }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`transition-all duration-300 rounded-full p-2 ${
        theme === "dark" 
          ? "bg-[#004548]/50 hover:bg-[#ffa400] text-[#f8d8a2] hover:text-white" 
          : "bg-[#14846f]/10 hover:bg-[#14846f] text-[#14846f] hover:text-white"
      } hover:scale-110`}
    >
      <Icon size={16} />
    </a>
  );
}

// Footer Link Component
function FooterLink({ to, text, theme }) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center text-sm transition-colors duration-200 hover:translate-x-1 ${
          theme === "dark" 
            ? "text-[#f8d8a2]/90 hover:text-[#47e5b5]" 
            : "text-[#4a403b]/90 hover:text-[#14846f]"
        }`}
      >
        <ChevronRight size={14} className="mr-1" />
        {text}
      </Link>
    </li>
  );
}