import { CheckCircle } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const QATesting = () => {
  return (
    <ServicePageTemplate
      title="QA & Testing"
      description="Ensure your software meets the highest quality standards with our comprehensive testing services. From automated testing to manual QA, we catch bugs before your users do."
      icon={<CheckCircle className="w-16 h-16" />}
      features={[
        "Automated testing (unit, integration, E2E)",
        "Manual testing and exploratory testing",
        "Performance and load testing",
        "Security testing and penetration testing",
        "Mobile app testing",
        "API testing",
        "Regression testing",
        "Test strategy and planning",
      ]}
      benefits={[
        {
          title: "Faster Releases",
          description: "Automated testing enables rapid, confident deployments.",
        },
        {
          title: "Cost Savings",
          description: "Catch bugs early when they're cheaper to fix.",
        },
        {
          title: "Better User Experience",
          description: "Ship polished software that works as expected.",
        },
        {
          title: "Security Assurance",
          description: "Identify vulnerabilities before they're exploited.",
        },
        {
          title: "Performance Confidence",
          description: "Know your app can handle real-world load.",
        },
        {
          title: "Comprehensive Coverage",
          description: "Test across browsers, devices, and scenarios.",
        },
      ]}
      technologies={[
        "Cypress",
        "Playwright",
        "Jest",
        "Selenium",
        "JMeter",
        "Postman",
        "OWASP ZAP",
        "BrowserStack",
      ]}
    />
  );
};

export default QATesting;
