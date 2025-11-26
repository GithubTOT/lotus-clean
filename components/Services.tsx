import { Stethoscope, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Traditional Acupuncture",
    description: "Gentle needle techniques to relieve pain, restore energy flow, and promote natural healing through time-tested methods."
  },
  {
    icon: Zap,
    title: "ACC Pain Management Acupuncture",
    description: "ACC-covered treatments for injuries such as back pain, neck pain, sprains, strains, and headaches for effective pain relief."
  },
  {
    icon: Users,
    title: "Meridian & Balance Therapy",
    description: "Improve circulation, reduce inflammation, and restore body balance through meridian-focused acupuncture methods."
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
            Our Acupuncture Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional Chinese medicine techniques combined with modern clinical knowledge for optimal healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl text-foreground mb-3" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}