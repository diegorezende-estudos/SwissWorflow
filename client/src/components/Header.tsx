import { useState } from "react";
import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full py-6 px-8 md:px-16 flex justify-between items-center border-b border-black">
        <div className="logo">
          <h1 className="text-2xl font-bold tracking-tight">SWISS WORKFLOW</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#about">
                <a className="uppercase text-sm tracking-wider hover:underline">ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a className="uppercase text-sm tracking-wider hover:underline">SERVICES</a>
              </Link>
            </li>
            <li>
              <Link href="#cases">
                <a className="uppercase text-sm tracking-wider hover:underline">CASES</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className="uppercase text-sm tracking-wider hover:underline">CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          <button className="text-black" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

export default Header;
