import { Server } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const DevOps = () => {
  return (
    <ServicePageTemplate
      title="DevOps Services"
      description="Accelerate your software delivery with our DevOps expertise. We help you build robust CI/CD pipelines, implement infrastructure as code, and create a culture of continuous improvement."
      icon={<Server className="w-16 h-16" />}
      features={[
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Cloud infrastructure management",
        "Monitoring and observability",
        "Automated testing integration",
        "Security automation (DevSecOps)",
        "Performance optimization",
      ]}
      benefits={[
        {
          title: "Faster Deployments",
          description: "Ship features faster with automated, reliable deployment pipelines.",
        },
        {
          title: "Reduced Downtime",
          description: "Achieve high availability with robust infrastructure and monitoring.",
        },
        {
          title: "Scalability",
          description: "Auto-scale resources based on demand to optimize costs.",
        },
        {
          title: "Security Built-In",
          description: "Security scanning and compliance checks integrated into the pipeline.",
        },
        {
          title: "Cost Efficiency",
          description: "Optimize cloud spending with right-sizing and resource management.",
        },
        {
          title: "Team Empowerment",
          description: "Enable developers to deploy with confidence and autonomy.",
        },
      ]}
      technologies={[
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "Azure",
        "GCP",
        "Jenkins",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
      ]}
    />
  );
};

export default DevOps;
