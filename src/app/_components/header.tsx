import React from 'react';
import Link from "next/link";
import { FaTwitch, FaReddit, FaInstagram, FaTiktok, FaTwitter, FaLink } from "react-icons/fa";
import { ThemeSwitcher } from '@/app/_components/theme-switcher';  // Adjust the import path as needed

const Header = () => {
  const socialLinks = [
    { name: "Twitch", url: "https://twitch.tv/themehrankhan", icon: FaTwitch, color: "text-purple-500" },
    { name: "Sub-Reddit", url: "https://reddit.com/r/themehrankhan", icon: FaReddit, color: "text-orange-500" },
    { name: "Instagram", url: "https://instagram.com/cybermehran", icon: FaInstagram, color: "text-pink-500" },
    { name: "TikTok", url: "https://tiktok.com/@themehrankhan", icon: FaTiktok, color: "text-blue-500" },
    { name: "Twitter", url: "https://x.com/coderwizardanon", icon: FaTwitter, color: "text-indigo-500" },
    { name: "Linktree", url: "https://linktr.ee/themehrankhan", icon: FaLink, color: "text-green-500" }
  ];

  return (
    <header className="mb-20 mt-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <a href="/">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 dark:from-gray-100 dark:to-gray-300">
              Mehran's Personal Website
              <span className="block text-2xl md:text-3xl mt-2 font-semibold">Official Links <span className="inline-block transform rotate-12 animate-pulse">👉🏻</span></span>
            </h2>
          </a>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
