import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t } = useTranslation();

  const studies = [
    { key: 'retail', img: "/placeholder-cases.svg" }, // Placeholder
    { key: 'financial', img: "/placeholder-cases.svg" }, // Placeholder
    { key: 'healthcare', img: "/placeholder-cases.svg" } // Placeholder
  ];

  return (
    <section id="cases" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          {t('caseStudies.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div key={study.key} className="border border-black overflow-hidden">
              <img src={study.img} alt={t(`caseStudies.${study.key}.company`)} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold mb-2">{t(`caseStudies.${study.key}.company`)}</h3>
                <p className="text-sm mb-4">{t(`caseStudies.${study.key}.description`)}</p>
                <Link href="#" className="text-sm font-bold uppercase hover:underline">
                  {t('caseStudies.learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
