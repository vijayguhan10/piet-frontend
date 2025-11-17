import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaAmbulance,
  FaCalendarPlus,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [infraDropdownOpen, setInfraDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Quick links for top bar
  const quickLinks = [
    { label: "Students", href: "#students" },
    { label: "Faculty & Staff", href: "#faculty" },
    { label: "Parents", href: "#parents" },
    { label: "Visitors", href: "#visitors" },
    { label: "Alumni", href: "#alumni" },
    { label: "Examinations", href: "#examinations" },
    { label: "Campuses", href: "#campuses" },
    { label: "Admissions 2025", href: "#admissions", highlight: true },
  ];

  // Main navigation items
  const mainNavItems = [
    { label: "Academics", href: "#academics" },
    { label: "Research", href: "#research" },
    { label: "Campus life", href: "#campus-life" },
    { label: "International", href: "#international" },
    { label: "About", href: "#about" },
  ];

  // Secondary navigation items
  const secondaryNavItems = [
    { label: "Library", href: "#library" },
    { label: "Career Centre", href: "#career" },
    { label: "News", href: "#news" },
    { label: "Events", href: "#events" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact us", href: "#contact" },
  ];

  const navStyle = (scrolled) => ({
    background: scrolled
      ? "linear-gradient(to right, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 40%, rgba(255, 255, 255, 0.45) 100%)"
      : "linear-gradient(to right, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 40%, rgba(255, 255, 255, 0.30) 100%)",
    backdropFilter: "blur(40px) saturate(220%)",
    WebkitBackdropFilter: "blur(40px) saturate(220%)",
    borderBottom: scrolled
      ? "1px solid rgba(226, 232, 240, 0.8)"
      : "1px solid rgba(226, 232, 240, 0.5)",
    boxShadow: scrolled
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  });

  const overlayStyle = {
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(59,130,246,0.12) 50%, rgba(0,0,0,0.18) 100%)",
    backdropFilter: "blur(16px) saturate(160%)",
    WebkitBackdropFilter: "blur(16px) saturate(160%)",
  };

  const mobileMenuStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderTop: "1px solid rgba(226, 232, 240, 0.8)",
    boxShadow:
      "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmergencyClick = () => {
    window.location.href = "tel:+91 8925931193";
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
            style={overlayStyle}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { duration: 0.25, ease: "easeOut" } }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "shadow-2xl" : "shadow-lg"
        }`}
        style={navStyle(isScrolled)}
      >
        {/* Quick Links Bar - Desktop Only */}
        <div className="hidden xl:block border-b border-slate-200/50">
          <div className="max-w-[1920px] mx-auto px-6 2xl:px-8">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4 flex-wrap">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`text-xs font-medium transition-colors duration-200 ${
                      link.highlight
                        ? "text-red-600 hover:text-red-700 font-semibold"
                        : "text-gray-700"
                    }
                    style={{
                      '--hover-color': 'var(--color-brand-blue)'
                    }}
                    onMouseEnter={(e) => !quickLinks.find(l => l.highlight) && (e.currentTarget.style.color = 'var(--color-brand-blue)')}
                    onMouseLeave={(e) => !quickLinks.find(l => l.highlight) && (e.currentTarget.style.color = '')}
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-[1920px] mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 2xl:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 xl:h-[4.5rem]">
            <motion.div
              className="flex items-center cursor-pointer relative group shrink-0"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <img
                src={"https://www.pietech.edu.in/images/slider/logo.png"}
                alt="PIE Tech"
                className="relative h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain select-none"
                loading="eager"
              />
            </motion.div>

            {/* Desktop Main Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              {mainNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-brand-blue)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Secondary Navigation + Buttons */}
            <div className="hidden xl:flex items-center gap-4">
              {secondaryNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-xs font-medium text-gray-700 transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-brand-blue)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item.label}
                </a>
              ))}

              <motion.button
                onClick={() => (window.location.href = "tel:+918925931193")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-3 py-1.5 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap ml-2"
                style={{ backgroundColor: "var(--color-brand-orange)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-orange-dark)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-orange)")
                }
                style={{
                  textShadow:
                    "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                }}
                aria-label="Admission Contact"
              >
                <FaCalendarPlus className="text-base shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold">Admission Contact</span>
                  <span className="text-[11px] opacity-95 font-medium">
                    +91 8925931193
                  </span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => (window.location.href = "tel:+918925931193")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-3 py-1.5 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: "var(--color-brand-blue)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-blue-dark)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-blue)")
                }
                style={{
                  textShadow:
                    "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                }}
                aria-label="Counseling"
              >
                <FaAmbulance className="text-base shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold">Counseling</span>
                  <span className="text-[11px] opacity-95 font-medium">
                    +91 8925931193
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="xl:hidden p-2.5 rounded-lg bg-white/80 hover:bg-white text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden fixed left-0 right-0 z-50 border-t max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto"
              style={mobileMenuStyle}
            >
              <div className="max-w-[1920px] mx-auto px-4 py-6">
                {/* Quick Links - Mobile */}
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                          link.highlight
                            ? "bg-red-50 text-red-600 hover:bg-red-100"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Main Navigation - Mobile */}
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">
                    Main Menu
                  </h3>
                  <div className="space-y-2">
                    {mainNavItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-base font-semibold text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "var(--color-brand-blue)")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Secondary Navigation - Mobile */}
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">
                    Resources
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {secondaryNavItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "var(--color-brand-blue)")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Mobile */}
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = "tel:+918925931193";
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-3 px-6 py-4 text-white rounded-xl transition-all duration-300 shadow-lg w-full"
                    style={{ backgroundColor: "var(--color-brand-orange)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-brand-orange-dark)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-brand-orange)")
                    }
                  >
                    <FaCalendarPlus className="text-xl" />
                    <div className="flex flex-col text-center">
                      <span className="text-base font-semibold leading-tight">
                        Admission Contact
                      </span>
                      <span className="text-sm opacity-90 leading-tight">
                        +91 8925931193
                      </span>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = "tel:+918925931193";
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-3 px-6 py-4 text-white rounded-xl transition-all duration-300 shadow-lg w-full"
                    style={{ backgroundColor: "var(--color-brand-blue)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-brand-blue-dark)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-brand-blue)")
                    }
                  >
                    <FaAmbulance className="text-xl" />
                    <div className="flex flex-col text-center">
                      <span className="text-base font-semibold leading-tight">
                        Counseling
                      </span>
                      <span className="text-sm opacity-90 leading-tight">
                        +91 8925931193
                      </span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;
