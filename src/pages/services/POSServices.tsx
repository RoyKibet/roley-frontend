import { CreditCard } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const POSServices = () => {
  return (
    <ServicePageTemplate
      title="POS Services"
      description="Modern point-of-sale solutions for retail, hospitality, and service businesses. We build and integrate POS systems that streamline operations, improve customer experience, and provide valuable business insights."
      icon={<CreditCard className="w-16 h-16" />}
      features={[
        "Custom POS development",
        "Payment gateway integration",
        "Inventory management",
        "Employee management and scheduling",
        "Customer loyalty programs",
        "Multi-location support",
        "Offline mode capabilities",
        "Reporting and analytics",
      ]}
      benefits={[
        {
          title: "Streamlined Operations",
          description: "Faster checkout and reduced operational complexity.",
        },
        {
          title: "Real-Time Insights",
          description: "Live dashboards showing sales, inventory, and performance.",
        },
        {
          title: "Customer Engagement",
          description: "Built-in loyalty programs and marketing tools.",
        },
        {
          title: "Flexible Payments",
          description: "Accept all payment methods your customers prefer.",
        },
        {
          title: "Inventory Control",
          description: "Automatic inventory tracking and reorder alerts.",
        },
        {
          title: "Reliable Offline Mode",
          description: "Continue processing sales even when internet is down.",
        },
      ]}
      technologies={[
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Square",
        "Redis",
        "WebSockets",
        "AWS",
      ]}
    />
  );
};

export default POSServices;
