import { Palette } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const UXUIDesign = () => {
  return (
    <ServicePageTemplate
      title="UX/UI Design"
      description="Create intuitive, beautiful digital experiences that users love. Our design team combines user research, visual design, and usability testing to craft interfaces that drive engagement and conversion."
      icon={<Palette className="w-16 h-16" />}
      features={[
        "User research and personas",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
        "Design system development",
        "Accessibility compliance",
      ]}
      benefits={[
        {
          title: "User-Centered Design",
          description: "Designs based on real user needs and behaviors.",
        },
        {
          title: "Higher Conversion",
          description: "Optimized user flows that guide users toward desired actions.",
        },
        {
          title: "Brand Consistency",
          description: "Cohesive visual language across all touchpoints.",
        },
        {
          title: "Reduced Development Costs",
          description: "Catch usability issues before development begins.",
        },
        {
          title: "Accessibility",
          description: "Inclusive designs that work for users of all abilities.",
        },
        {
          title: "Scalable Design Systems",
          description: "Reusable components for consistent, efficient development.",
        },
      ]}
      technologies={[
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
        "Storybook",
        "Zeplin",
      ]}
    />
  );
};

export default UXUIDesign;
