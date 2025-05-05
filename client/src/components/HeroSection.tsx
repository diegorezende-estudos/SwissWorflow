import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-lg mb-8 sm:mb-12 max-w-2xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="btn border-2 border-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
              {t('hero.talkToExpert')}
            </Link>
            <Link href="#how-it-works" className="btn border-2 border-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
              {t('hero.learnMore')}
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
