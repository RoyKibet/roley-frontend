import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/FloatingChat";

interface IndustryPageProps {
  title: string;
  description: string;
  icon: ReactNode;
  challenges: string[];
  solutions: { title: string; description: string }[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

const IndustryPageTemplate = ({
  title,
  description,
  icon,
  challenges,
  solutions,
  caseStudy,
}: IndustryPageProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="text-primary mb-6">{icon}</div>
              <h1 className="heading-xl mb-6">
                Software Solutions for <span className="gradient-text">{title}</span>
              </h1>
              <p className="body-lg max-w-3xl">{description}</p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a href="/#contact">Discuss Your Project</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-md mb-4">Industry Challenges We Address</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the unique challenges of the {title.toLowerCase()} industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-md mb-4">Our Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored software solutions for {title.toLowerCase()} businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border card-hover"
                >
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        {caseStudy && (
          <section className="py-20">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl border border-border p-8 md:p-12"
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Case Study
                </span>
                <h2 className="heading-md mt-4 mb-4">{caseStudy.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
                  {caseStudy.description}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-secondary/50 p-6 rounded-xl text-center"
                    >
                      <p className="text-lg font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="heading-md text-primary-foreground mb-4">
                Transform Your {title} Business
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's discuss how we can help you leverage technology to achieve your goals.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <a href="/#contact">Schedule a Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default IndustryPageTemplate;
