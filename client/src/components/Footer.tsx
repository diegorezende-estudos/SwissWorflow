import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="py-16 px-8 md:px-16 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-6">SWISS WORKFLOW</h2>
          <p className="text-sm mb-4">
            Precision-driven AI automation<br />
            for forward-thinking businesses.
          </p>
          <p className="text-sm">
            123 Tech Avenue<br />
            Zurich, 8000<br />
            Switzerland
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase mb-6">Sitemap</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/">
                <a className="text-sm hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a className="text-sm hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a className="text-sm hover:underline">Services</a>
              </Link>
            </li>
            <li>
              <Link href="#cases">
                <a className="text-sm hover:underline">Case Studies</a>
              </Link>
            </li>
            <li>
              <Link href="#how-it-works">
                <a className="text-sm hover:underline">How It Works</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className="text-sm hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase mb-6">Connect</h3>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-black hover:opacity-75" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-black hover:opacity-75" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-black hover:opacity-75" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Swiss Workflow<br />
            <a href="#" className="hover:underline">Privacy Policy</a> •&nbsp;
            <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
