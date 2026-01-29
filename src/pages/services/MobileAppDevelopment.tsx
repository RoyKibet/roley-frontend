import { Smartphone } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const MobileAppDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Mobile App Development"
      description="Create powerful mobile experiences for iOS and Android. We build native and cross-platform apps that users love, from concept to App Store launch and beyond."
      icon={<Smartphone className="w-16 h-16" />}
      features={[
        "Native iOS development (Swift)",
        "Native Android development (Kotlin)",
        "Cross-platform development (React Native, Flutter)",
        "Mobile UI/UX design",
        "App Store optimization",
        "Push notification systems",
        "Offline-first architecture",
        "Mobile backend development",
      ]}
      benefits={[
        {
          title: "Native Performance",
          description: "Smooth, responsive apps that feel natural on every device.",
        },
        {
          title: "Cross-Platform Efficiency",
          description: "Reach iOS and Android users with a single codebase when appropriate.",
        },
        {
          title: "Offline Capability",
          description: "Apps that work seamlessly even without internet connectivity.",
        },
        {
          title: "Store Success",
          description: "Optimized for App Store and Google Play ranking and visibility.",
        },
        {
          title: "Secure Data Handling",
          description: "Enterprise-grade security for sensitive user data.",
        },
        {
          title: "Continuous Updates",
          description: "Ongoing support and feature updates to keep users engaged.",
        },
      ]}
      technologies={[
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS Amplify",
        "GraphQL",
        "REST APIs",
      ]}
    />
  );
};

export default MobileAppDevelopment;
