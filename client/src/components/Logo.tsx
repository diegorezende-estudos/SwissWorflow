const Logo = () => {
  return (
    <div className="logo-container relative">
      <svg 
        width="80" 
        height="40" 
        viewBox="0 0 80 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <g>
          {/* Top row >>>>> */}
          <path d="M10 10 L25 10" stroke="black" strokeWidth="2" />
          <path d="M25 10 L30 5" stroke="black" strokeWidth="2" />
          <path d="M35 10 L40 5" stroke="black" strokeWidth="2" />
          <path d="M35 10 L50 10" stroke="black" strokeWidth="2" />
          <path d="M55 10 L60 5" stroke="black" strokeWidth="2" />
          <path d="M55 10 L70 10" stroke="black" strokeWidth="2" />
          
          {/* Bottom row <<<<< */}
          <path d="M10 20 L25 20" stroke="black" strokeWidth="2" />
          <path d="M25 20 L30 25" stroke="black" strokeWidth="2" />
          <path d="M35 20 L40 25" stroke="black" strokeWidth="2" />
          <path d="M35 20 L50 20" stroke="black" strokeWidth="2" />
          <path d="M55 20 L60 25" stroke="black" strokeWidth="2" />
          <path d="M55 20 L70 20" stroke="black" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;