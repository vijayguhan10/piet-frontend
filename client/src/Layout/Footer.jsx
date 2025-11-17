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
    <footer className="bg-slate-900 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Hospital Info - Enhanced */}
          <div className="lg:col-span-4">
            {/* Centered Logo Only */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-48 h-24 md:w-56 md:h-28 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg">
                <img
                  src={"https://www.pietech.edu.in/images/slider/logo.png"}
                  alt="PIE Tech Logo"
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
              Pollachi Institute of Engineering & Technology - Providing quality
              technical education and developing competent, innovative
              professionals since 2012.
            </p>

            {/* Social Media - Compact */}
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.instagram.com/pietech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://twitter.com/pietech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center transition-colors"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-blue-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "")
                }
              >
                <SiX className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/pietechofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center transition-colors"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-blue)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "")
                }
              >
                <FaFacebook className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@PIETech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Contact Information - Streamlined */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              Contact
            </h4>

            <div className="space-y-3">
              <div>
                <div className="space-y-1">
                  <a
                    href="tel:+918925931193"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    +91 89259 31193
                  </a>
                  <a
                    href="tel:+918925931193"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    Admissions Helpline
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-0 text-teal-300 flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Email
                </h4>
                <a
                  href="mailto:info@pietech.edu.in"
                  className="text-teal-300 hover:text-teal-200 transition-colors text-sm"
                >
                  info@pietech.edu.in
                </a>
              </div>

              <div className="flex items-center gap-2 bg-teal-900/20 rounded-lg p-2">
                <FaClock className="text-teal-400 text-sm" />
                <div>
                  <div className="text-white font-semibold text-sm">
                    Office Hours
                  </div>
                  <div className="text-teal-200 text-xs">
                    Mon - Sat: 9 AM - 5 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions - Prominent */}
          <div className="lg:col-span-3">
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: "var(--color-brand-orange-light)" }}
            >
              Quick Actions
            </h4>

            <div className="space-y-3">
              <a
                href="tel:+918925931193"
                className="block rounded-xl p-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-orange-dark))",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to right, var(--color-brand-orange-dark), var(--color-brand-orange-dark))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-orange-dark))")
                }
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaPhoneAlt className="text-white text-lg" />
                  <span className="font-bold text-white text-sm">
                    Admission Contact
                  </span>
                </div>
                <div className="text-white text-lg font-bold">89259 31193</div>
                <div
                  className="text-xs"
                  style={{
                    color:
                      "color-mix(in srgb, var(--color-brand-orange-light) 80%, white)",
                  }}
                >
                  Get admission details
                </div>
              </a>

              <a
                href="tel:+918925931193"
                className="block rounded-xl p-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-blue), var(--color-brand-blue-dark))",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to right, var(--color-brand-blue-dark), var(--color-brand-blue-dark))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(to right, var(--color-brand-blue), var(--color-brand-blue-dark))")
                }
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaAmbulance className="text-white text-lg" />
                  <span className="font-bold text-white text-sm">
                    Counseling
                  </span>
                </div>
                <div className="text-white text-lg font-bold">89259 31193</div>
                <div
                  className="text-xs"
                  style={{
                    color:
                      "color-mix(in srgb, var(--color-brand-blue-light) 80%, white)",
                  }}
                >
                  Career guidance available
                </div>
              </a>
            </div>
          </div>

          {/* Location - Compact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-sm" />
              Location
            </h4>

            <div className="text-gray-300 text-sm leading-relaxed mb-4">
              <div className="font-semibold text-white mb-1">
                Campus Address
              </div>
              <span>Pollachi Institute of Engineering & Technology, </span>
              <span className="whitespace-nowrap">
                Pollachi - Kinathukadavu Road,
              </span>
              <span> Pollachi, Tamil Nadu</span>
            </div>

            <div className="mt-2 flex justify-center lg:justify-start">
              <a
                href="https://www.google.com/maps/place/PIE+Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium"
              >
                <FaMapMarkerAlt className="text-xs" />
                Campus Location
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 Pollachi Institute of Engineering & Technology. All rights
              reserved.
            </div>
            <div className="text-slate-400 text-sm flex flex-col sm:flex-row items-center gap-2">
              <span>Website by</span>
              <a
                href="https://www.automconsultancy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-200 font-semibold ml-1"
                aria-label="Autom Consultancy Services website"
              >
                Autom Consultancy Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
