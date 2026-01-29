import { GraduationCap } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const EduTech = () => {
  return (
    <IndustryPageTemplate
      title="EduTech"
      description="Transform education with technology that engages learners and empowers educators. We build learning platforms, assessment tools, and administrative systems that make education more accessible and effective."
      icon={<GraduationCap className="w-16 h-16" />}
      challenges={[
        "Creating engaging digital learning experiences",
        "Supporting diverse learning styles and accessibility",
        "Tracking student progress and outcomes",
        "Integrating with existing school systems",
        "Scaling to handle peak usage periods",
        "Ensuring data privacy for minors",
      ]}
      solutions={[
        {
          title: "Learning Management Systems",
          description: "Comprehensive platforms for course delivery and management.",
        },
        {
          title: "Virtual Classrooms",
          description: "Interactive live learning with video, chat, and collaboration tools.",
        },
        {
          title: "Assessment Platforms",
          description: "Online testing with proctoring, grading, and analytics.",
        },
        {
          title: "Student Information Systems",
          description: "Enrollment, grades, attendance, and parent communication.",
        },
        {
          title: "Adaptive Learning",
          description: "AI-powered personalized learning paths for each student.",
        },
        {
          title: "Content Creation Tools",
          description: "Authoring tools for creating interactive educational content.",
        },
      ]}
      caseStudy={{
        title: "Online Learning Platform",
        description: "We built a scalable LMS for a growing e-learning company, supporting 100,000+ concurrent learners with personalized learning paths.",
        results: [
          "85% course completion rate",
          "99.9% uptime during peak hours",
          "40% improvement in learning outcomes",
        ],
      }}
    />
  );
};

export default EduTech;
