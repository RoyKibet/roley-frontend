import { motion } from "framer-motion";
import { 
  Users, 
  Shield, 
  Zap, 
  Heart, 
  Wrench 
} from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Experienced Engineering Team",
    description: "Our team of 100+ skilled developers brings decades of combined experience across diverse technologies and industries.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Scalable & Secure Solutions",
    description: "We build with security-first principles and architecture that scales seamlessly with your growing business needs.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile Development Process",
    description: "Our iterative approach ensures rapid delivery, flexibility to change, and continuous improvement throughout the project.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We work as an extension of your team, understanding your goals and delivering beyond expectations.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Long-Term Support & Maintenance",
    description: "Our partnership doesn't end at launch. We provide ongoing support, updates, and optimization to keep your software running perfectly.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            What Makes <span className="gradient-text">Roley</span> Different
          </h2>
          <p className="body-lg">
            We combine technical excellence with a genuine commitment to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border border-border bg-card card-hover ${
                index === reasons.length - 1 && reasons.length % 3 === 2
                  ? "lg:col-span-1 lg:col-start-2"
                  : index === reasons.length - 1 && reasons.length % 2 === 1
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
              
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "100+", label: "Expert Engineers" },
            { number: "50+", label: "Countries Served" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
