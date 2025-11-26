import { Award, Lock, FlaskConical, MapPin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ACC-Registered Acupuncturists",
    description: "Experienced practitioners specializing in injury-related pain relief and natural healing methods"
  },
  {
    icon: FlaskConical,
    title: "Holistic & Natural Healing",
    description: "Address root causes, not just symptoms, through traditional Chinese medicine principles"
  },
  {
    icon: Lock,
    title: "Private Treatment Rooms",
    description: "Comfortable environment with gentle, personalized care in confidential treatment spaces"
  },
  {
    icon: MapPin,
    title: "Evidence-Based Acupuncture",
    description: "Combining traditional methods with modern clinical knowledge for effective treatment outcomes"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health and recovery are our top priorities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-5">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg text-foreground mb-3" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}