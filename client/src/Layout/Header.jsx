import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaAmbulance, FaCalendarPlus } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [infraDropdownOpen, setInfraDropdownOpen] = useState(false);
  // --- Style helpers to avoid repeating large inline objects ---
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

  const emergencyStyle = {
    background:
      "linear-gradient(135deg, rgba(220,38,38,0.92) 0%, rgba(239,68,68,0.95) 50%, rgba(220,38,38,0.92) 100%)",
    backdropFilter: "blur(20px) saturate(160%)",
    WebkitBackdropFilter: "blur(20px) saturate(160%)",
    border: "1px solid rgba(255,255,255,0.4)",
    boxShadow:
      "0 8px 32px rgba(220,38,38,0.35), 0 4px 16px rgba(220,38,38,0.25), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)",
  };

  const toggleStyle = {
    background:
      "linear-gradient(135deg, rgba(107,114,128,0.15) 0%, rgba(156,163,175,0.12) 50%, rgba(107,114,128,0.1) 100%)",
    backdropFilter: "blur(16px) saturate(140%)",
    WebkitBackdropFilter: "blur(16px) saturate(140%)",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow:
      "0 4px 16px rgba(107,114,128,0.12), 0 2px 8px rgba(107,114,128,0.08), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.05)",
  };

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

  const navLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(147,197,253,0.16) 50%, rgba(59,130,246,0.14) 100%)"
      : "transparent",
    backdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    WebkitBackdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    border: isActive
      ? "1.5px solid rgba(59,130,246,0.35)"
      : "1.5px solid transparent",
    boxShadow: isActive
      ? "0 6px 20px rgba(59,130,246,0.18), 0 3px 10px rgba(59,130,246,0.12), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(59,130,246,0.15), inset 0 0 40px rgba(255,255,255,0.1)"
      : "none",
  });

  const mobileNavLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(147,197,253,0.2) 50%, rgba(59,130,246,0.18) 100%)"
      : "transparent",
    backdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    WebkitBackdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    border: isActive
      ? "1.5px solid rgba(59,130,246,0.4)"
      : "1.5px solid transparent",
    boxShadow: isActive
      ? "0 6px 20px rgba(59,130,246,0.2), 0 3px 10px rgba(59,130,246,0.14), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(59,130,246,0.18), inset 0 0 40px rgba(255,255,255,0.12)"
      : "none",
  });

  // Reusable overlay backgrounds and contact styles
  const overlayBg =
    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)";
  const overlayBgSoft =
    "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)";
  const overlayBgStronger =
    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)";

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
                alt="SSS Super Speciality Hospital"
                className="relative h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain select-none"
                loading="eager"
              />

              <span className="sr-only">SSS Super Speciality Hospital</span>
            </motion.div>

            <div className="hidden xl:flex items-center gap-1.5 ml-2">
              <motion.button
                onClick={() => setIsCallModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                style={{
                  textShadow:
                    "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                }}
                aria-label="Book appointment"
              >
                <FaCalendarPlus className="text-base shrink-0" />
                <span>Book Appointment</span>
              </motion.button>

              <motion.button
                onClick={handleEmergencyClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                style={{
                  textShadow:
                    "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                }}
                aria-label="Emergency contact"
              >
                <FaAmbulance className="text-base shrink-0 animate-pulse" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold">Emergency</span>
                  <span className="text-[11px] opacity-95 font-medium">
                    +91 8925931193
                  </span>
                </div>
              </motion.button>
            </div>

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
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCallModalOpen(true);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-cta transition-all duration-300 shadow-lg w-full"
                  >
                    <FaCalendarPlus className="text-xl" />
                    <span className="text-base font-semibold">
                      Book Appointment
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleEmergencyClick();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-cta transition-all duration-300 shadow-lg w-full"
                  >
                    <FaAmbulance className="text-xl animate-pulse" />
                    <div className="flex flex-col text-center">
                      <span className="text-base font-semibold leading-tight">
                        Emergency
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
