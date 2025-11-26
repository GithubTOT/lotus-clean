import { Activity, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg text-white" style={{ fontWeight: 600 }}>
                Lotus Health Center
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional acupuncture and ACC treatment services in New Zealand. Your natural healing journey starts here.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Traditional Acupuncture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  ACC Pain Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Meridian Therapy
                </a>
              </li>
              <li>
                <a href="#acc" className="hover:text-primary transition-colors">
                  ACC Coverage Info
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#acc" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>021 XXX XXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@lotushealth.nz</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Health Street<br />Auckland, New Zealand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 lg:mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lotus Health Center. All rights reserved. | ACC Registered Provider
          </p>
        </div>
      </div>
    </footer>
  );
}