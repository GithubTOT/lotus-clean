import { Button } from "./ui/button";
import { Phone, Calendar } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6" style={{ fontWeight: 600 }}>
            Book Your Acupuncture Appointment Today
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            ACC-covered acupuncture treatments available for pain relief and injury recovery. Start your natural healing journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 px-8 w-full sm:w-auto"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid sm:grid-cols-3 gap-6 text-white/90">
              <div>
                <p className="text-sm text-white/60 mb-1">Phone</p>
                <p className="text-lg" style={{ fontWeight: 500 }}>021 XXX XXX</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Email</p>
                <p className="text-lg" style={{ fontWeight: 500 }}>info@lotushealth.nz</p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Hours</p>
                <p className="text-lg" style={{ fontWeight: 500 }}>Mon-Fri: 8am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}