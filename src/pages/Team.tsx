import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/FloatingChat";

const teamMembers = [
  {
    name: "Roy Kibet",
    role: "CEO & Co-Founder",
    bio: "15+ years in tech leadership. Previously VP of Engineering at a Fortune 500 company.",
    image: "/roy.jpeg", // ✅ Correct way for public assets
  },
  {
    name: "Leaky Maina",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect with expertise in cloud-native solutions and distributed systems.",
    image: "/leaky.png", // ✅ Correct way for public assets
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Our Team
              </span>

              <h1 className="heading-xl mt-4 mb-6">
                Meet the <span className="gradient-text">Experts</span> Behind Roley
              </h1>

              <p className="body-lg">
                A diverse team of passionate technologists, designers, and strategists
                dedicated to delivering exceptional software solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="section-container">
            {/* ✅ FIXED GRID — NO EMPTY SPACE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden card-hover group w-full"
                >
                  {/* Image */}
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>

                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>

                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>

                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
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
                Want to Join Our Team?
              </h2>

              <p className="text-primary-foreground/80 text-lg mb-8">
                We're always looking for talented individuals who share our passion
                for innovation and excellence.
              </p>

              <a
                href="mailto:careers@roley.com"
                className="inline-flex items-center px-8 py-4 bg-background text-foreground font-semibold rounded-xl hover:bg-background/90 transition-colors"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Team;
