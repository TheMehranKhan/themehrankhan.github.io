import Link from "next/link";
import { FaTwitch, FaReddit, FaInstagram, FaTiktok, FaTwitter, FaLink } from "react-icons/fa";

const Header = () => {
  const socialLinks = [
    { name: "Twitch", url: "https://twitch.tv/themehrankhan", icon: FaTwitch },
    { name: "Sub-Reddit", url: "https://reddit.com/r/themehrankhan", icon: FaReddit },
    { name: "Instagram", url: "https://instagram.com/cybermehran", icon: FaInstagram },
    { name: "TikTok", url: "https://tiktok.com/@themehrankhan", icon: FaTiktok },
    { name: "Twitter", url: "https://x.com/coderwizardanon", icon: FaTwitter },
    { name: "Linktree", url: "https://linktr.ee/themehrankhan", icon: FaLink }
  ];

  return (
    <header className="mb-20 mt-8 bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 md:mb-0">
          Mehran's Personal Website - Official Links <span className="inline-block transform rotate-12">👉🏻</span>
        </h2>
        <nav className="flex flex-wrap justify-center">
          {socialLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.url} 
              className="flex items-center px-4 py-2 text-lg font-medium hover:bg-purple-600 transition-transform duration-300 transform hover:scale-105 rounded-lg mx-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <link.icon className="mr-2" />
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
