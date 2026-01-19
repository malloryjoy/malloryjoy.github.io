import React, { useState } from "react";
import "/src/index.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#welcome", label: "Home" },
    { href: "#aboutme", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/ux-portfolio.html", label: "UX Portfolio" },
  ];
  

  

  return (<>
    
    <nav className="relative pt-2 h-[10em] bg-header-purple dark:bg-dark-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex justify-center">
        {/* Desktop Nav */}
        <ul className="pt-10 hidden md:flex justify-center space-x-8 overflow-x-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navItem font-extrabold uppercase text-xl flex justify-between text-medium-purple dark:text-bio-purple hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center space-y-1.5 w-14 h-12 focus:outline-none"
        >
          <span
            className={`h-1 w-10 rounded transition-transform duration-300 origin-center bg-medium-purple dark:bg-bio-purple ${
              isOpen ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-10 rounded transition-opacity duration-300 bg-medium-purple dark:bg-bio-purple ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-10 rounded transition-transform duration-300 origin-center  bg-medium-purple dark:bg-bio-purple ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-header-purple dark:bg-dark-header px-4 pb-6 text-center">
          {/* Main Links */}
          <ul className="space-y-2 mb-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navItem whitespace-nowrap text-medium-purple dark:text-skills-pink font-extrabold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons Row */}
          

           
        </div>
      )}
    </nav>
    </>);
}

