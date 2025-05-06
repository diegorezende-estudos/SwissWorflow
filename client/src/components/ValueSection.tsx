import { useTranslation } from "react-i18next";

const ValueSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-8 md:px-16 bg-gray-100 border-y border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            {t('value.integratedSystems.title')}
          </h3>
          <p className="text-sm sm:text-base">
            {t('value.integratedSystems.description')}
          </p>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            {t('value.provenROI.title')}
          </h3>
          <p className="text-sm sm:text-base">
            {t('value.provenROI.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
