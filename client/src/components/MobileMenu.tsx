import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full bg-white border-b border-black py-4 px-8`}
    >
      <ul className="space-y-4">
        <li>
          <Link href="#about">
            <a className="uppercase text-sm tracking-wider block py-2">ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a className="uppercase text-sm tracking-wider block py-2">SERVICES</a>
          </Link>
        </li>
        <li>
          <Link href="#cases">
            <a className="uppercase text-sm tracking-wider block py-2">CASES</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="uppercase text-sm tracking-wider block py-2">CONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
