import {
  FaBuilding,
  FaFlask,
  FaLaptop,
  FaBook,
  FaDumbbell,
  FaBed,
  FaUtensils,
  FaBus,
  FaWifi,
  FaMedkit,
  FaGraduationCap,
  FaUsers,
  FaChevronRight,
  FaPlay,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Facilities = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          setShowVideo(true);
        } else {
          setIsVideoVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const facilityCategories = {
    academic: {
      title: "Academic Facilities",
      icon: FaGraduationCap,
      facilities: [
        {
          id: 1,
          title: "Smart Classrooms",
          description:
            "Technology-enhanced learning spaces with interactive whiteboards and multimedia systems",
          icon: FaLaptop,
          images: [
            "https://th-i.thgim.com/public/incoming/9u5ghl/article69034079.ece/alternates/FREE_1200/9868_29_7_2024_16_6_46_2_SMARTCLASS_GREENPARK_2.JPG?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq_rGG8FbdjpKRMtbTByuDOD0bqzZMSvL4Q&s?w=400&h=300&fit=crop",
            "https://th-i.thgim.com/public/incoming/9u5ghl/article69034079.ece/alternates/FREE_1200/9868_29_7_2024_16_6_46_2_SMARTCLASS_GREENPARK_2.JPG?w=400&h=300&fit=crop",
            "https://www.researchgate.net/publication/353126219/figure/fig3/AS:1080286569869473@1634571797775/The-actual-layout-of-the-smart-classroom-picture-from-http-alturlcom-dxjfb.jpg?w=400&h=300&fit=crop",
          ],
          features: [
            "Interactive Displays",
            "Audio-Visual Systems",
            "Climate Controlled",
            "High-Speed Internet",
          ],
        },
        {
          id: 2,
          title: "Research Laboratories",
          description:
            "State-of-the-art research facilities equipped with modern instruments and equipment",
          icon: FaFlask,
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlqzpFuQe1EstSUq_2MdKuwmAJ2ZE7nw7dA&s",
            "https://leprosymissioninternational.contentfiles.net/media/images/RS8549_DSC_3852.2e16d0ba.fill-600x600-c100.jpg",
            "https://leprosymissioninternational.contentfiles.net/media/images/RS8552_DSC_3868_2.f9286840.fill-600x400-c100.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3HWYECBhZHpAZmzxWeMh6HTt23LmOGAkcKpHS76iF6xKS_J1GETRGCwml1Q5RTChknc&usqp=CAU",
          ],
          features: [
            "Advanced Equipment",
            "Safety Systems",
            "Research Support",
            "24/7 Access",
          ],
        },
        {
          id: 3,
          title: "Central Library",
          description:
            "Comprehensive collection of books, journals, and digital resources",
          icon: FaBook,
          images: [
            "https://davcollegemansa.com/assets/uploads/library-655572918.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwyDYXLTY18bXYlOHakj9_iOLVRWokH--x3hYTtw6gUMdQgNUGHajorhsQdISwROe7K8&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGAcEgEFN7xofUzVEGdk8F2Z6xShhnm2tEA&s",
            "https://davcollegemansa.com/assets/uploads/library-655572918.jpg",
          ],
          features: [
            "Digital Library",
            "Study Spaces",
            "Research Assistance",
            "Extended Hours",
          ],
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      icon: FaBuilding,
      facilities: [
        {
          id: 4,
          title: "Campus Buildings",
          description:
            "Modern architectural design with sustainable and eco-friendly features",
          icon: FaBuilding,
          images: [
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1555854877-bab0e829849f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          ],
          features: [
            "Green Building",
            "Central AC",
            "Elevators",
            "Security Systems",
          ],
        },
        {
          id: 5,
          title: "IT Infrastructure",
          description:
            "High-speed campus-wide network with modern computing facilities",
          icon: FaWifi,
          images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
          ],
          features: [
            "Fiber Optic Network",
            "Computer Labs",
            "WiFi Coverage",
            "Tech Support",
          ],
        },
      ],
    },
    residential: {
      title: "Residential Life",
      icon: FaBed,
      facilities: [
        {
          id: 6,
          title: "Student Hostels",
          description:
            "Comfortable accommodation with modern amenities and 24/7 security",
          icon: FaBed,
          images: [
            "https://images.unsplash.com/photo-1555854877-bab0e829849f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1631889993959-41b4ac12d77f?w=400&h=300&fit=crop",
          ],
          features: [
            "AC Rooms",
            "Common Areas",
            "Laundry Service",
            "24/7 Security",
          ],
        },
        {
          id: 7,
          title: "Dining Facilities",
          description:
            "Nutritious meals with diverse menu options in hygienic environment",
          icon: FaUtensils,
          images: [
            "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop",
          ],
          features: [
            "Multi-Cuisine",
            "Healthy Options",
            "Cafeteria",
            "Food Court",
          ],
        },
      ],
    },
    wellness: {
      title: "Sports & Wellness",
      icon: FaDumbbell,
      facilities: [
        {
          id: 8,
          title: "Fitness Center",
          description:
            "Modern gymnasium with professional equipment and fitness programs",
          icon: FaDumbbell,
          images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop",
          ],
          features: [
            "Modern Equipment",
            "Personal Training",
            "Group Classes",
            "Locker Rooms",
          ],
        },
        {
          id: 9,
          title: "Medical Center",
          description:
            "On-campus healthcare facility with qualified medical professionals",
          icon: FaMedkit,
          images: [
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
          ],
          features: [
            "Emergency Care",
            "Regular Checkups",
            "Pharmacy",
            "Health Insurance",
          ],
        },
      ],
    },
  };

  const campusStats = [
    { number: "150+", label: "Acres Campus", icon: FaMapMarkerAlt },
    { number: "50+", label: "Modern Labs", icon: FaFlask },
    { number: "24/7", label: "Security", icon: FaBuilding },
    { number: "1000+", label: "Bed Capacity", icon: FaBed },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border mb-6">
            <FaBuilding style={{ color: "var(--color-brand-blue)" }} />
            <span className="font-medium text-gray-700 text-sm tracking-wide">
              WORLD-CLASS INFRASTRUCTURE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Campus Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience excellence with our state-of-the-art facilities designed
            to foster learning, research, and personal growth
          </p>
        </div>

        {/* Campus Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {campusStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border hover:shadow-md transition-shadow"
            >
              <stat.icon
                className="text-3xl mx-auto mb-3"
                style={{ color: "var(--color-brand-blue)" }}
              />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(facilityCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-gray-900 border shadow-sm"
                }`}
                style={
                  activeTab === key
                    ? {
                        background:
                          "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-dark) 100%)",
                      }
                    : {}
                }
              >
                <IconComponent />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilityCategories[activeTab].facilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0"
              >
                {/* Photo Collage Header */}
                <div className="relative h-56 overflow-hidden">
                  {/* Main Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

                  {/* Photo Grid Collage */}
                  <div className="relative h-full grid grid-cols-3 gap-1 p-2">
                    {/* Large Photo - Left Side */}
                    <div className="col-span-2 relative overflow-hidden rounded-2xl">
                      <img
                        src={facility.images[0]}
                        alt={`${facility.title} main`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Small Photos - Right Side */}
                    <div className="flex flex-col gap-1">
                      <div className="flex-1 relative overflow-hidden rounded-xl">
                        <img
                          src={facility.images[1]}
                          alt={`${facility.title} detail 1`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex-1 relative overflow-hidden rounded-xl">
                        <img
                          src={facility.images[2]}
                          alt={`${facility.title} detail 2`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        style={{ color: "var(--color-brand-blue)" }}
                        className="text-xl"
                      />
                    </div>
                  </div>

                  {/* Bottom Preview */}
                  <div className="absolute bottom-2 right-2">
                    <div className="w-12 h-8 relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={facility.images[3]}
                        alt={`${facility.title} preview`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                        <span className="text-xs text-white font-semibold">
                          +
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {facility.title}
                    </h3>
                    <div className="flex -space-x-1">
                      {facility.images.slice(0, 3).map((img, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shadow-sm"
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Enhanced Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--color-brand-blue)" }}
                        />
                        <span className="text-xs text-gray-700 font-medium truncate">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Bottom Bar */}
                <div className="px-6 pb-4">
                  <div
                    className="h-1 rounded-full group-hover:h-2 transition-all duration-300 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-brand-blue) 0%, var(--color-brand-orange) 100%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Virtual Campus Tour with Video */}
        <div
          ref={videoRef}
          className="bg-white rounded-3xl overflow-hidden shadow-lg border"
        >
          <div className="flex flex-col lg:flex-row items-center gap-0">
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-2 rounded-full mb-6">
                <FaPlay style={{ color: "var(--color-brand-blue)" }} />
                <span className="text-sm font-medium text-gray-700">
                  CAMPUS TOUR
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Experience Our Campus
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Take an immersive virtual tour of our world-class facilities and
                discover what makes PIE Tech a premier destination for education
                and innovation.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--color-brand-blue)" }}
                  />
                  <span className="text-sm text-gray-600">
                    360° Campus View
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--color-brand-orange)" }}
                  />
                  <span className="text-sm text-gray-600">
                    Modern Facilities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--color-brand-blue)" }}
                  />
                  <span className="text-sm text-gray-600">Student Life</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--color-brand-orange)" }}
                  />
                  <span className="text-sm text-gray-600">Campus Culture</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="inline-flex items-center gap-3 px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-dark) 100%)",
                  }}
                >
                  <FaPlay />
                  <span>{showVideo ? "Hide Tour" : "Watch Tour"}</span>
                </button>
                <button
                  className="inline-flex items-center gap-3 px-6 py-3 border-2 rounded-xl font-semibold hover:shadow-md transition-all duration-300"
                  style={{
                    borderColor: "var(--color-brand-orange)",
                    color: "var(--color-brand-orange)",
                  }}
                >
                  <FaUsers />
                  <span>Schedule Visit</span>
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Video Side */}
            <div className="lg:w-1/2 relative">
              {showVideo && isVideoVisible ? (
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/VIr_WEgXtFQ?si=gqal66fq-Ci_GYa1&autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                    title="PIE Tech Campus Tour"
                    className="w-full h-full rounded-none lg:rounded-r-3xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-none lg:rounded-r-3xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-brand-blue) 2px, transparent 2px),
                                       radial-gradient(circle at 75% 75%, var(--color-brand-orange) 2px, transparent 2px)`,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>

                  {/* Play Button */}
                  <div className="relative z-10 text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-dark) 100%)",
                      }}
                      onClick={() => setShowVideo(true)}
                    >
                      <FaPlay className="text-2xl text-white ml-1" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Click to Start Campus Tour
                    </p>
                  </div>

                  {/* Corner Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
                    }}
                  >
                    LIVE
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
