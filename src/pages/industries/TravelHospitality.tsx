import { Plane } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const TravelHospitality = () => {
  return (
    <IndustryPageTemplate
      title="Travel & Hospitality"
      description="Create memorable guest experiences with technology that streamlines operations and personalizes every touchpoint. From booking platforms to property management, we help you exceed guest expectations."
      icon={<Plane className="w-16 h-16" />}
      challenges={[
        "Managing complex booking and reservation systems",
        "Providing personalized guest experiences",
        "Integrating with OTAs and distribution channels",
        "Handling seasonal demand fluctuations",
        "Streamlining check-in/check-out processes",
        "Managing multiple properties and locations",
      ]}
      solutions={[
        {
          title: "Booking Engines",
          description: "Seamless reservation systems with dynamic pricing and availability.",
        },
        {
          title: "Property Management Systems",
          description: "Comprehensive hotel/property operations management.",
        },
        {
          title: "Guest Experience Apps",
          description: "Mobile apps for bookings, concierge, and loyalty programs.",
        },
        {
          title: "Channel Management",
          description: "Unified management of OTA listings and direct bookings.",
        },
        {
          title: "Revenue Management",
          description: "AI-powered pricing optimization and demand forecasting.",
        },
        {
          title: "Contactless Solutions",
          description: "Digital check-in, mobile keys, and touchless payments.",
        },
      ]}
      caseStudy={{
        title: "Boutique Hotel Chain",
        description: "We developed a custom booking engine and guest app for a boutique hotel chain, increasing direct bookings and guest satisfaction scores.",
        results: [
          "45% increase in direct bookings",
          "30% reduction in OTA commission fees",
          "4.8 star average guest app rating",
        ],
      }}
    />
  );
};

export default TravelHospitality;
