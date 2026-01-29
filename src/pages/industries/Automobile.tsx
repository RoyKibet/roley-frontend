import { Car } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const Automobile = () => {
  return (
    <IndustryPageTemplate
      title="Automobile"
      description="Drive digital innovation in the automotive industry with solutions for connected vehicles, dealership management, and customer experience. We help automotive businesses adapt to the digital age."
      icon={<Car className="w-16 h-16" />}
      challenges={[
        "Managing complex dealer networks",
        "Connecting vehicles to digital services",
        "Improving customer purchase journey",
        "Streamlining service and maintenance operations",
        "Handling vehicle configuration and pricing",
        "Integrating with manufacturer systems",
      ]}
      solutions={[
        {
          title: "Dealer Management Systems",
          description: "Comprehensive solutions for sales, inventory, and service.",
        },
        {
          title: "Connected Vehicle Platforms",
          description: "IoT solutions for vehicle telematics and connected services.",
        },
        {
          title: "Digital Showrooms",
          description: "Virtual vehicle configuration and online buying experiences.",
        },
        {
          title: "Service Management",
          description: "Appointment scheduling, work orders, and parts management.",
        },
        {
          title: "Customer Portals",
          description: "Owner apps for service history, recalls, and vehicle info.",
        },
        {
          title: "Inventory Management",
          description: "Real-time vehicle tracking across dealer networks.",
        },
      ]}
      caseStudy={{
        title: "Regional Dealer Group",
        description: "We implemented an integrated DMS and digital retail platform for a 20-location dealer group, modernizing their entire customer experience.",
        results: [
          "60% increase in online leads",
          "35% reduction in time-to-sale",
          "25% improvement in service revenue",
        ],
      }}
    />
  );
};

export default Automobile;
