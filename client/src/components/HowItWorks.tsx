import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  // Define keys for the steps to map to translations
  const stepKeys = ['consultation', 'scope', 'start'];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          {t('howItWorks.title')}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
          {t('howItWorks.subtitle')}
        </p>

        <div className="space-y-12 md:space-y-16">
          {stepKeys.map((key, index) => (
            <div
              key={key}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Number Circle */}
              <div className="md:col-span-1 flex justify-center md:justify-end">
                <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              {/* Title and Description */}
              <div className="md:col-span-11">
                <h3 className="text-xl font-bold mb-2">
                  {t(`howItWorks.${key}.title`)}
                </h3>
                <p className="text-base text-gray-700">
                  {t(`howItWorks.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
