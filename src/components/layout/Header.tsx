import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, industries } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#about");
    } else {
      document
        .getElementById("about")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textColor = isScrolled ? "text-black" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/roley.svg"
                className="w-10 h-10 object-contain"
              />
            </div>

            <span
              className={`text-xl font-bold transition-colors ${textColor}`}
            >
              Roley
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 transition-colors rounded-lg ${textColor}`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${textColor} ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="font-medium text-black">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 transition-colors rounded-lg ${textColor}`}
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${textColor} ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.href}
                          to={industry.href}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="font-medium text-black">
                            {industry.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {industry.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/#about"
              onClick={handleAboutClick}
              className={`px-4 py-2 transition-colors rounded-lg ${textColor}`}
            >
              About
            </a>

            <Link
              to="/team"
              className={`px-4 py-2 transition-colors rounded-lg ${textColor}`}
            >
              Team
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className={`bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="section-container py-4 space-y-4 text-black">
              <a
                href="/#about"
                onClick={handleAboutClick}
                className="block py-2 font-medium"
              >
                About
              </a>

              <Link to="/team" className="block py-2 font-medium">
                Team
              </Link>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-black"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
