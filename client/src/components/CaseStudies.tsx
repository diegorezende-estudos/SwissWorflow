const caseStudies = [
  {
    company: "Retail Chain",
    description: "Automated inventory management across 24 locations, reducing costs by 30%.",
  },
  {
    company: "Financial Services",
    description: "Streamlined client onboarding process, cutting processing time from days to minutes.",
  },
  {
    company: "Healthcare Provider",
    description: "Automated appointment scheduling and follow-ups, improving patient satisfaction by 45%.",
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-20 px-8 md:px-16 bg-white border-t border-b border-black max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-12">Case Studies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="border-t-2 border-black pt-4">
            <h3 className="text-lg font-bold mb-3">{caseStudy.company}</h3>
            <p className="text-sm mb-4">{caseStudy.description}</p>
            <a href="#" className="text-sm font-bold underline">
              LEARN MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
