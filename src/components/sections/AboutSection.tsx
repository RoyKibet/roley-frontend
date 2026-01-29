import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/lib/constants";
import { 
  Globe, 
  Smartphone, 
  Lightbulb, 
  Server, 
  Palette, 
  CheckCircle, 
  CreditCard,
  ArrowRight
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/web-development": <Globe className="w-8 h-8" />,
  "/services/mobile-app-development": <Smartphone className="w-8 h-8" />,
  "/services/it-consulting": <Lightbulb className="w-8 h-8" />,
  "/services/devops": <Server className="w-8 h-8" />,
  "/services/ux-ui-design": <Palette className="w-8 h-8" />,
  "/services/qa-testing": <CheckCircle className="w-8 h-8" />,
  "/services/pos-services": <CreditCard className="w-8 h-8" />,
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            About Us
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Building the Future of{" "}
            <span className="gradient-text">Digital Innovation</span>
          </h2>
          <p className="body-lg">
            Founded by a team of passionate technologists, Roley was born from a simple 
            belief: every business deserves access to world-class software solutions. 
            Since our inception, we've helped hundreds of companies transform their 
            digital presence and streamline their operations.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl border border-border card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in an increasingly digital world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl border border-border card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in custom software development, recognized for our 
              commitment to excellence, innovation, and the success of our clients.
            </p>
          </motion.div>
        </div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="heading-md mb-4">What We Offer</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="block bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all card-hover group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {serviceIcons[service.href]}
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
