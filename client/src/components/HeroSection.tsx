import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Automate Your Workflow<br />with AI Agents
          </h2>
          <p className="text-lg mb-12 max-w-2xl">
            Increase productivity and automate processes using precision-driven
            AI agents designed for your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact">
              <a className="btn border-2 border-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
                Talk to an expert
              </a>
            </Link>
            <Link href="#how-it-works">
              <a className="btn border-2 border-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
                Learn more
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:col-span-5">
          {/* Intentionally left blank for whitespace in Swiss design */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
