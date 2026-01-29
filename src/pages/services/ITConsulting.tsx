import { Lightbulb } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const ITConsulting = () => {
  return (
    <ServicePageTemplate
      title="IT Consulting"
      description="Strategic technology consulting to help you make informed decisions about your IT infrastructure, digital transformation, and technology investments. We bridge the gap between business goals and technical solutions."
      icon={<Lightbulb className="w-16 h-16" />}
      features={[
        "Digital transformation strategy",
        "Technology assessment and audit",
        "Cloud migration planning",
        "IT infrastructure optimization",
        "Vendor selection and management",
        "Technology roadmap development",
        "Security and compliance consulting",
        "Change management support",
      ]}
      benefits={[
        {
          title: "Strategic Alignment",
          description: "Technology decisions aligned with your business objectives.",
        },
        {
          title: "Cost Optimization",
          description: "Identify opportunities to reduce IT costs while improving capability.",
        },
        {
          title: "Risk Mitigation",
          description: "Proactive identification and management of technology risks.",
        },
        {
          title: "Vendor Independence",
          description: "Unbiased advice free from vendor affiliations.",
        },
        {
          title: "Knowledge Transfer",
          description: "Empower your team with the knowledge to succeed.",
        },
        {
          title: "Future-Ready",
          description: "Prepare your organization for emerging technologies.",
        },
      ]}
    />
  );
};

export default ITConsulting;
