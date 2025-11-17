import { motion } from "framer-motion";
import { FaUniversity, FaTree, FaGraduationCap, FaBook } from "react-icons/fa";

const BasicsInstitution = () => {
  const newsItems = [
    "Admissions 2025-2026 Open",
    "B.E/B.Tech Applications Invited",
    "M.E/M.Tech Admissions Now Open",
    "MBA Programs - Apply Now",
    "Engineering Excellence Awaits",
    "Join India's Premier Technical Institute",
  ];

  // use react-icons (FontAwesome) via require so it can be placed inside the component

  const stats = [
    {
      value: "2012",
      label: "Established",
      icon: (
        <FaUniversity
          className="text-2xl"
          style={{ color: "var(--color-brand-blue)" }}
        />
      ),
    },
    {
      value: "250+",
      label: "Acre Campus",
      icon: (
        <FaTree
          className="text-2xl"
          style={{ color: "var(--color-brand-blue)" }}
        />
      ),
    },
    {
      value: "5000+",
      label: "Students",
      icon: (
        <FaGraduationCap
          className="text-2xl"
          style={{ color: "var(--color-brand-blue)" }}
        />
      ),
    },
    {
      value: "50+",
      label: "Programs",
      icon: (
        <FaBook
          className="text-2xl"
          style={{ color: "var(--color-brand-blue)" }}
        />
      ),
    },
  ];

  return (
    <section className="relative bg-white">
      {/* News Ticker */}
      <div
        className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-2.5 overflow-hidden border-b"
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-brand-orange) 20%, transparent)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, color-mix(in srgb, var(--color-brand-orange) 5%, transparent), transparent, color-mix(in srgb, var(--color-brand-orange) 5%, transparent))",
          }}
        ></div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...newsItems, ...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-6 text-white/90 font-medium text-sm"
              >
                <span
                  className="mr-3"
                  style={{ color: "var(--color-brand-orange-light)" }}
                >
                  •
                </span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.03),transparent_50%)]"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-brand-orange) 10%, white)",
                    borderWidth: "1px",
                    borderColor:
                      "color-mix(in srgb, var(--color-brand-orange) 30%, white)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "var(--color-brand-orange)" }}
                  ></span>
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "var(--color-brand-orange-dark)" }}
                  >
                    EXCELLENCE IN EDUCATION
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-4 sm:mb-6">
                  Pollachi Institute of <br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-orange-light))",
                    }}
                  >
                    Engineering & Technology
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium mb-6">
                  One of Tamil Nadu's Premier Engineering Institutions
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Providing world-class technical education since 2012.
                  Empowering students with cutting-edge skills, innovation
                  mindset, and industry-ready expertise.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 group"
                    style={{
                      "--hover-border": "var(--color-brand-orange-light)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-brand-orange-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "")
                    }
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div
                      className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 transition-colors"
                      style={{ "--hover-color": "var(--color-brand-orange)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-brand-orange)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4"
              >
                <button
                  className="group inline-flex items-center gap-3 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-brand-orange)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                >
                  <span>Explore PIE Tech</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"
                  style={{
                    background:
                      "linear-gradient(to right, color-mix(in srgb, var(--color-brand-orange) 20%, transparent), color-mix(in srgb, var(--color-brand-orange-dark) 20%, transparent))",
                  }}
                ></div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <div className="aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=900&fit=crop"
                      alt="PIE Tech Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs sm:text-sm text-slate-600 font-medium mb-1">
                            Established in
                          </div>
                          <div
                            className="text-2xl sm:text-3xl font-bold"
                            style={{ color: "var(--color-brand-orange)" }}
                          >
                            2012
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs sm:text-sm text-slate-600 font-medium mb-1">
                            AICTE Approved
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicsInstitution;
