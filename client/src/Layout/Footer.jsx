import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

// Small Counter component: counts 0 -> end over `duration` ms when visible
function Counter({
  end = 0,
  suffix = "",
  duration = 2000,
  className = "text-heading-md text-slate-800",
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const elRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        } else if (!entry.isIntersecting && started) {
          // Reset when element goes out of view
          setStarted(false);
          setValue(0);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, end, duration]);

  return (
    <div ref={elRef}>
      <div className={className}>
        {value}
        {suffix}
      </div>
    </div>
  );
}

Counter.propTypes = {
  end: PropTypes.number,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default function Footer() {
  return (
    <footer className="text-slate-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Student Life Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Enjoy your Student Life & Excel at PIE Tech
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience world-class education, innovative research, and vibrant
            campus life at Pollachi Institute of Engineering & Technology
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Institution Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-48 h-24 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg border">
                <img
                  src={"https://www.pietech.edu.in/images/slider/logo.png"}
                  alt="PIE Tech Logo"
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Pollachi Institute of Engineering & Technology - Providing quality
              technical education and developing competent, innovative
              professionals since 2012.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <FaPhoneAlt
                    className="text-sm"
                    style={{ color: "var(--color-brand-orange)" }}
                  />
                  Contact Information
                </h4>
                <div className="space-y-1 text-sm">
                  <a
                    href="tel:+918925931193"
                    className="block hover:text-blue-600 transition-colors"
                  >
                    📞 +91 89259 31193 (Admissions)
                  </a>
                  <a
                    href="mailto:info@pietech.edu.in"
                    className="block hover:text-blue-600 transition-colors"
                  >
                    ✉️ info@pietech.edu.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pietech.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://twitter.com/pietech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <SiX className="text-sm" />
                </a>
                <a
                  href="https://www.facebook.com/pietechofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href="https://www.youtube.com/@PIETech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <FaYoutube className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Visitors */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Visitors
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Campus Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  How to Reach
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Virtual Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-orange)" }}
            >
              Admissions & Aid
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Admission India
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Admission International
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Application Process
                </a>
              </li>
            </ul>
          </div>

          {/* Colleges */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Colleges @ PIE Tech
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Engineering & Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Medical & Health Sciences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Science & Humanities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Hotel Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Agricultural Sciences
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-orange)" }}
            >
              A to Z - Quicklinks
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Faculty Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Weather @ PIE Tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  MoU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Anti-Ragging Committee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Value Education Cell
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Insights */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Insights
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Innovation & Incubation Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Student Clubs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Researgence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Prospectus 2025
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Spectrum
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditation */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-orange)" }}
            >
              Accreditation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  IQAC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  NIRF
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  NAAC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  IIQA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  AICTE
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Public Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Cyber Hygiene Handbook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  RTI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Mandatory Disclosures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  UGC Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-brand-orange)" }}
            >
              Media & Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Grievances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className=" rounded-xl p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-xl" />
              <h3 className="font-bold text-lg">Admission Helpline</h3>
            </div>
            <p className="text-2xl font-bold mb-2">89259 31193</p>
            <p className="text-black">Get instant admission guidance</p>
          </div>

          <div className=" rounded-xl p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-xl" />
              <h3 className="font-bold text-lg">Visit Campus</h3>
            </div>
            <p className="text-sm mb-3">Pollachi - Kinathukadavu Road</p>
            <a
              href="https://www.google.com/maps/place/PIE+Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Directions
            </a>
          </div>

          <div className=" rounded-xl p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-xl" />
              <h3 className="font-bold text-lg">Connect With Us</h3>
            </div>
            <p className="text-sm mb-3">info@pietech.edu.in</p>
            <a
              href="mailto:info@pietech.edu.in"
              className="inline-block  text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <div className="text-slate-800 font-semibold mb-2">
                © 2025 Pollachi Institute of Engineering & Technology
              </div>
              <div className="text-gray-600 text-sm">
                All rights reserved. Committed to excellence in education and
                innovation.
              </div>
            </div>

            {/* <div className="text-center lg:text-right">
              <div className="text-gray-600 text-sm mb-2">
                Website designed & developed by
              </div>
              <a
                href="https://www.automconsultancy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                aria-label="Autom Consultancy Services website"
              >
                <span>Autom Consultancy Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Institution Recognition */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Approved by AICTE</span> |
              <span className="font-medium">
                {" "}
                Affiliated to Anna University
              </span>{" "}
              |<span className="font-medium"> ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
