import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full py-4 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center border-b border-black">
        <div className="logo flex items-center mb-4 md:mb-0">
          <Logo />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">SWISS WORKFLOW</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="uppercase text-sm tracking-wider hover:underline">
                {t('header.about')}
              </Link>
            </li>
            <li>
              <Link href="#services" className="uppercase text-sm tracking-wider hover:underline">
                {t('header.services')}
              </Link>
            </li>
            <li>
              <Link href="#cases" className="uppercase text-sm tracking-wider hover:underline">
                {t('header.cases')}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="uppercase text-sm tracking-wider hover:underline">
                {t('header.contact')}
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
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
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

export default Header;
