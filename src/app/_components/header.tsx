import React from 'react';
import Link from "next/link";
import { FaTwitch, FaReddit, FaInstagram, FaTiktok, FaTwitter, FaLink } from "react-icons/fa";
import { ThemeSwitcher } from '@/app/_components/theme-switcher';  // Adjust the import path as needed

const Header = () => {
  const socialLinks = [
    { name: "Twitch", url: "https://twitch.tv/themehrankhan", icon: FaTwitch, color: "hover:text-purple-400" },
    { name: "Sub-Reddit", url: "https://reddit.com/r/themehrankhan", icon: FaReddit, color: "hover:text-orange-500" },
    { name: "Instagram", url: "https://instagram.com/cybermehran", icon: FaInstagram, color: "hover:text-pink-500" },
    { name: "TikTok", url: "https://tiktok.com/themehrankhan", icon: FaTiktok, color: "hover:text-teal-300" },
    { name: "Twitter", url: "https://x.com/coderwizardanon", icon: FaTwitter, color: "hover:text-blue-400" },
    { name: "Linktree", url: "https://linktr.ee/themehrankhan", icon: FaLink, color: "hover:text-green-400" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-800 via-blue-900 to-black dark:from-blue-700 dark:via-blue-800 dark:to-black text-white p-6 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 dark:from-gray-100 dark:to-gray-300">
            Mehran's Personal Website
            <span className="block text-2xl md:text-3xl mt-2 font-semibold">Official Links <span className="inline-block transform rotate-12 animate-pulse">👉🏻</span></span>
          </h2>
          <div className="ml-4">
            {/* Theme Switcher */}
            <ThemeSwitcher />
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.url} 
              className={`flex items-center justify-center px-4 py-3 text-sm md:text-base font-medium bg-opacity-20 bg-white dark:bg-opacity-10 dark:bg-gray-700 backdrop-filter backdrop-blur-lg ${link.color} transition-all duration-300 transform hover:scale-105 rounded-xl`}
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
