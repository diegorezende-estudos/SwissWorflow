const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description:
      "Talk to a real systems engineer (typically +$500/hour) and discuss your project requirements and goals. We'll listen carefully to understand your vision and goals.",
  },
  {
    number: "2",
    title: "Scope and Proposal",
    description:
      "Based on your consultation, we'll provide a detailed scope, including detailed steps, timeline, budget, and any potential modifications or extensions to your system.",
  },
  {
    number: "3",
    title: "Project Start",
    description:
      "Once you've agreed on a proposal, we'll schedule a kickoff meeting to introduce our team and get started.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <p className="text-base mb-12 max-w-2xl">
        Automation is complicated - but implementing it doesn't have to be.
        We'll simplify the process for you in 3 steps.
      </p>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-3">
              <h3 className="text-lg font-bold">
                {step.number}. {step.title}
              </h3>
            </div>
            <div className="md:col-span-9">
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
