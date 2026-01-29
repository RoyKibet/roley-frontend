import { Globe } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const WebDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Web Development"
      description="We build modern, scalable web applications that deliver exceptional user experiences and drive business results. From complex enterprise platforms to sleek customer-facing applications, we bring your vision to life."
      icon={<Globe className="w-16 h-16" />}
      features={[
        "Custom web application development",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems",
        "API development and integration",
        "Performance optimization",
        "Responsive design implementation",
        "Legacy system modernization",
      ]}
      benefits={[
        {
          title: "Scalable Architecture",
          description: "Built to handle growth with microservices and cloud-native design patterns.",
        },
        {
          title: "Lightning Fast Performance",
          description: "Optimized for speed with modern frameworks and best practices.",
        },
        {
          title: "SEO Optimized",
          description: "Built with search engine optimization in mind from the ground up.",
        },
        {
          title: "Cross-Browser Compatible",
          description: "Works flawlessly across all major browsers and devices.",
        },
        {
          title: "Secure by Design",
          description: "Security best practices implemented at every layer of the stack.",
        },
        {
          title: "Easy to Maintain",
          description: "Clean, documented code that's easy to update and extend.",
        },
      ]}
      technologies={[
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ]}
    />
  );
};

export default WebDevelopment;
