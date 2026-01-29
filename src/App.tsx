import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

// Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ITConsulting from "./pages/services/ITConsulting";
import DevOps from "./pages/services/DevOps";
import UXUIDesign from "./pages/services/UXUIDesign";
import QATesting from "./pages/services/QATesting";
import POSServices from "./pages/services/POSServices";

// Industry Pages
import Healthcare from "./pages/industries/Healthcare";
import Construction from "./pages/industries/Construction";
import TravelHospitality from "./pages/industries/TravelHospitality";
import EduTech from "./pages/industries/EduTech";
import Automobile from "./pages/industries/Automobile";

const queryClient = new QueryClient();

// Scroll to top on route change, and handle hash navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />

          {/* Service Pages */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/ux-ui-design" element={<UXUIDesign />} />
          <Route path="/services/qa-testing" element={<QATesting />} />
          <Route path="/services/pos-services" element={<POSServices />} />

          {/* Industry Pages */}
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
          <Route path="/industries/edutech" element={<EduTech />} />
          <Route path="/industries/automobile" element={<Automobile />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
