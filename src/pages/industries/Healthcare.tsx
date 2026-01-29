import { HeartPulse } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const Healthcare = () => {
  return (
    <IndustryPageTemplate
      title="Healthcare"
      description="HIPAA-compliant software solutions that improve patient care, streamline clinical workflows, and enable digital health transformation. We understand the unique challenges of healthcare technology."
      icon={<HeartPulse className="w-16 h-16" />}
      challenges={[
        "Ensuring HIPAA and regulatory compliance",
        "Integrating with legacy healthcare systems",
        "Protecting sensitive patient data",
        "Improving patient engagement and communication",
        "Streamlining clinical documentation",
        "Managing complex billing and insurance processes",
      ]}
      solutions={[
        {
          title: "Electronic Health Records",
          description: "Custom EHR systems designed for your specific clinical workflows.",
        },
        {
          title: "Telemedicine Platforms",
          description: "Secure video consultation and remote patient monitoring solutions.",
        },
        {
          title: "Patient Portals",
          description: "Engaging patient-facing apps for appointments, records, and communication.",
        },
        {
          title: "Healthcare Analytics",
          description: "Data-driven insights for clinical and operational decision-making.",
        },
        {
          title: "Medical Device Integration",
          description: "Connect devices and wearables to your healthcare ecosystem.",
        },
        {
          title: "Billing & Revenue Cycle",
          description: "Automated billing solutions that reduce errors and improve cash flow.",
        },
      ]}
      caseStudy={{
        title: "Regional Hospital Network",
        description: "We helped a network of 12 hospitals implement a unified patient portal, improving patient satisfaction and reducing administrative burden.",
        results: [
          "40% increase in patient portal adoption",
          "50% reduction in phone inquiries",
          "30% faster appointment scheduling",
        ],
      }}
    />
  );
};

export default Healthcare;
