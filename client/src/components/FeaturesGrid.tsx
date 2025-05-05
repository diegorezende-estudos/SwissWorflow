const features = [
  {
    title: "Data Collection",
    description: "Automated data gathering from multiple sources with precision and reliability.",
  },
  {
    title: "24h Availability",
    description: "AI agents work around the clock to ensure continuous business operations.",
  },
  {
    title: "Sales Boost",
    description: "Increase conversion rates with intelligent customer engagement systems.",
  },
  {
    title: "Cost Reduction",
    description: "Minimize operational expenses by automating repetitive tasks.",
  },
  {
    title: "Scalability",
    description: "Easily expand your automation capabilities as your business grows.",
  },
  {
    title: "Smart Insights",
    description: "Gain valuable business intelligence through automated data analytics.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="services" className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-12">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="border-t-2 border-black pt-4">
            <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
