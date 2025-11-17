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
import { useState } from "react";

const Facilities = () => {
  const [activeTab, setActiveTab] = useState("academic");

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
          image:
            "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1555854877-bab0e829849f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent
                        style={{ color: "var(--color-brand-blue)" }}
                        className="text-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-brand-blue)" }}
                        />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="h-1"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-brand-blue) 0%, var(--color-brand-orange) 100%)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Experience Our Campus
              </h3>
              <p className="text-gray-600 mb-6">
                Take a virtual tour of our world-class facilities and see what
                makes PIE Tech special
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-dark) 100%)",
                  }}
                >
                  <FaPlay />
                  <span>Virtual Tour</span>
                </button>
                <button
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 rounded-xl font-semibold hover:shadow-md transition-all duration-300"
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
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <FaPlay
                  className="text-6xl text-white cursor-pointer hover:scale-110 transition-transform"
                  style={{ color: "var(--color-brand-blue)" }}
                />
              </div>
              <div
                className="absolute -top-2 -right-2 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
                }}
              >
                360°
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
