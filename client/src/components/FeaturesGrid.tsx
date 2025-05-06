import { useTranslation } from "react-i18next";

const FeaturesGrid = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'dataCollection', icon: 'DatabaseZap' }, // Map icon name
    { key: 'availability', icon: 'Clock' },
    { key: 'salesBoost', icon: 'TrendingUp' },
    { key: 'costReduction', icon: 'BadgePercent' },
    { key: 'scalability', icon: 'Scaling' },
    { key: 'smartInsights', icon: 'Lightbulb' },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.key} className="border border-black p-6">
              {/* Basic icon placeholder - Replace with actual icons later */}
              {/* <div className="w-10 h-10 bg-gray-200 mb-4">Icon: {feature.icon}</div> */}
              <h3 className="font-bold mb-2">{t(`features.${feature.key}.title`)}</h3>
              <p className="text-sm">{t(`features.${feature.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
