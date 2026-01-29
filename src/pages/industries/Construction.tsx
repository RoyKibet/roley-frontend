import { HardHat } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const Construction = () => {
  return (
    <IndustryPageTemplate
      title="Construction"
      description="Digital solutions that modernize construction operations, from project management to field coordination. We help construction companies increase efficiency, reduce costs, and deliver projects on time."
      icon={<HardHat className="w-16 h-16" />}
      challenges={[
        "Managing complex multi-phase projects",
        "Coordinating field crews and subcontractors",
        "Tracking equipment and material logistics",
        "Maintaining safety compliance documentation",
        "Real-time project visibility and reporting",
        "Managing change orders and budget overruns",
      ]}
      solutions={[
        {
          title: "Project Management Software",
          description: "End-to-end project tracking from bid to completion.",
        },
        {
          title: "Field Management Apps",
          description: "Mobile solutions for crews to log progress, issues, and time.",
        },
        {
          title: "Equipment Tracking",
          description: "IoT-enabled asset tracking and maintenance scheduling.",
        },
        {
          title: "Safety & Compliance",
          description: "Digital checklists, incident reporting, and compliance management.",
        },
        {
          title: "BIM Integration",
          description: "Connect Building Information Modeling to project workflows.",
        },
        {
          title: "Financial Management",
          description: "Budget tracking, invoicing, and financial reporting tools.",
        },
      ]}
      caseStudy={{
        title: "Commercial Construction Firm",
        description: "A leading commercial builder reduced project delays by implementing our integrated project management platform across 50+ active projects.",
        results: [
          "25% reduction in project delays",
          "35% improvement in crew productivity",
          "20% cost savings on equipment",
        ],
      }}
    />
  );
};

export default Construction;
