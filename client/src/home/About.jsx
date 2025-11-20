import { motion } from "framer-motion";
import {
  FaUniversity,
  FaTree,
  FaGraduationCap,
  FaBook,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendar,
} from "react-icons/fa";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BasicsInstitution = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const lifeAtPietImages = [
    {
      id: 1,
      title: "Smart Classrooms",
      category: "Academic Excellence",
      image:
        "https://th-i.thgim.com/public/incoming/9u5ghl/article69034079.ece/alternates/FREE_1200/9868_29_7_2024_16_6_46_2_SMARTCLASS_GREENPARK_2.JPG",
      description: "State-of-the-art technology-enhanced learning spaces",
      location: "Academic Block A",
    },
    {
      id: 2,
      title: "Advanced Research Labs",
      category: "Research & Innovation",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlqzpFuQe1EstSUq_2MdKuwmAJ2ZE7nw7dA&s",
      description:
        "Cutting-edge research facilities for breakthrough discoveries",
      location: "Research Center",
    },
    {
      id: 3,
      title: "Modern Library",
      category: "Knowledge Hub",
      image: "https://davcollegemansa.com/assets/uploads/library-655572918.jpg",
      description: "Comprehensive digital and physical resource center",
      location: "Central Library",
    },
    {
      id: 4,
      title: "Interactive Learning",
      category: "Digital Education",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq_rGG8FbdjpKRMtbTByuDOD0bqzZMSvL4Q&s",
      description: "Immersive educational technology and smart boards",
      location: "Smart Campus",
    },
    {
      id: 5,
      title: "Laboratory Excellence",
      category: "Scientific Research",
      image:
        "https://leprosymissioninternational.contentfiles.net/media/images/RS8549_DSC_3852.2e16d0ba.fill-600x600-c100.jpg",
      description: "World-class laboratory equipment and facilities",
      location: "Science Complex",
    },
    {
      id: 6,
      title: "Study Spaces",
      category: "Learning Environment",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwyDYXLTY18bXYlOHakj9_iOLVRWokH--x3hYTtw6gUMdQgNUGHajorhsQdISwROe7K8&usqp=CAU",
      description: "Inspiring spaces designed for collaborative learning",
      location: "Learning Commons",
    },
  ];
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
                      src="https://www.pietech.edu.in/images/slider/slide-1.png"
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

      {/* Life at PIET Carousel */}
      <div className="relative bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100"></div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide text-slate-700">
                CAMPUS LIFE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 sm:mb-4">
              Life at
              <span
                className="text-transparent bg-clip-text ml-2 sm:ml-3"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-orange-light))",
                }}
              >
                PIET
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              Discover the vibrant ecosystem where innovation meets tradition,
              and dreams transform into reality
            </p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-6xl mx-auto"
          >
            <style jsx>{`
              .carousel-root {
                outline: none;
              }
              .carousel .slide {
                background: transparent;
              }
              .carousel .control-dots {
                bottom: -30px;
              }
              @media (max-width: 640px) {
                .carousel .control-dots {
                  bottom: -25px;
                }
              }
              .carousel .dot {
                background-color: #cbd5e1 !important;
                border-radius: 50% !important;
                width: 12px !important;
                height: 12px !important;
                margin: 0 6px !important;
                transition: all 0.3s ease !important;
              }
              .carousel .dot.selected {
                background-color: var(--color-brand-orange) !important;
                transform: scale(1.2) !important;
              }
              .carousel .control-arrow {
                background-color: white !important;
                border-radius: 50% !important;
                width: 48px !important;
                height: 48px !important;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
                transition: all 0.3s ease !important;
                z-index: 10 !important;
              }
              .carousel .control-arrow:hover {
                background-color: var(--color-brand-orange) !important;
                transform: scale(1.1) !important;
              }
              .carousel .control-arrow::before {
                border-color: #64748b !important;
              }
              .carousel .control-arrow:hover::before {
                border-color: white !important;
              }
              /* Disable scroll-based slide changes */
              .carousel .slider {
                touch-action: pan-y !important;
              }
              .carousel .carousel {
                pointer-events: auto !important;
              }
              .carousel-root .carousel {
                overflow: visible !important;
              }
            `}</style>

            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
              showArrows={true}
              selectedItem={selectedSlide}
              onChange={(index) => setSelectedSlide(index)}
              className="carousel-root"
              swipeable={false}
              emulateTouch={false}
              useKeyboardArrows={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
            >
              {lifeAtPietImages.map((item, index) => (
                <div key={item.id} className="px-2 sm:px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative group order-2 lg:order-1">
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <div className="aspect-[4/3]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6">
                          <div className="bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg">
                            <span className="text-xs sm:text-sm font-semibold text-slate-700">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Location Badge */}
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6">
                          <div
                            className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg"
                            style={{
                              backgroundColor: "rgba(251, 146, 60, 0.9)",
                            }}
                          >
                            <FaMapMarkerAlt className="text-xs sm:text-sm text-white" />
                            <span className="text-xs sm:text-sm font-medium text-white">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-xl border border-slate-200/50">
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                              <span className="text-white text-sm sm:text-lg font-bold">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-medium text-slate-500 mb-1">
                                {item.category}
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">
                              Modern Equipment
                            </span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">
                              Expert Faculty
                            </span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">
                              24/7 Access
                            </span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">
                              Safe Environment
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button className="group flex items-center justify-center gap-2 sm:gap-3 bg-slate-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                          <span>Explore Facility</span>
                          <FaChevronRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BasicsInstitution;
