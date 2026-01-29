import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { services, industries, companyInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#0B132B] text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </Link>

            <p className="text-white/70 leading-relaxed">
              Building innovative software solutions that drive business growth and digital transformation.
            </p>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => {
                const links = [
                  companyInfo.social.twitter,
                  companyInfo.social.linkedin,
                  companyInfo.social.github,
                ];

                return (
                  <a
                    key={i}
                    href={links[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.href}>
                  <Link
                    to={industry.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-white/70">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-white/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
