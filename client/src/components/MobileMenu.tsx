import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full bg-white border-b border-black py-4 px-8`}
    >
      <ul className="space-y-4">
        <li>
          <Link href="#about" className="uppercase text-sm tracking-wider block py-2">
            {t('header.about')}
          </Link>
        </li>
        <li>
          <Link href="#services" className="uppercase text-sm tracking-wider block py-2">
            {t('header.services')}
          </Link>
        </li>
        <li>
          <Link href="#cases" className="uppercase text-sm tracking-wider block py-2">
            {t('header.cases')}
          </Link>
        </li>
        <li>
          <Link href="#contact" className="uppercase text-sm tracking-wider block py-2">
            {t('header.contact')}
          </Link>
        </li>
      </ul>
      <div className="mt-6 sm:hidden">
        <p className="text-xs uppercase mb-2 font-bold">Language</p>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default MobileMenu;
