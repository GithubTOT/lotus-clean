import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-white to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground" style={{ fontWeight: 600, lineHeight: 1.2 }}>
              Acupuncture & ACC-Covered Treatments
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Holistic pain relief, balance restoration, and natural healing through professional acupuncture and traditional techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                Book ACC Acupuncture
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 021 XXX XXX
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">ACC Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">Experienced Acupuncturists</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">Private Treatment Rooms</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1529088512498-64b87b354b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3VwdW5jdHVyZSUyMHRyZWF0bWVudCUyMGNsaW5pY3xlbnwxfHx8fDE3NjQwMjU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Acupuncture treatment session"
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}