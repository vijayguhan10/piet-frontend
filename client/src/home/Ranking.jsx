import {
  FaChevronRight,
  FaMedal,
  FaShieldAlt,
  FaRocket,
  FaTrophy,
  FaGraduationCap,
  FaCogs,
  FaHospital,
} from "react-icons/fa";

const Ranking = () => {
  const rankings = [
    {
      rank: "11-50",
      category: "Innovation",
      type: "Band",
      icon: FaRocket,
    },
    {
      rank: "22",
      category: "Overall",
      type: "Rank",
      icon: FaTrophy,
    },
    {
      rank: "11",
      category: "University",
      type: "Rank",
      icon: FaGraduationCap,
    },
    {
      rank: "14",
      category: "Engineering",
      type: "Rank",
      icon: FaCogs,
    },
    {
      rank: "18",
      category: "Medical",
      type: "Rank",
      icon: FaHospital,
    },
  ];

  const accreditations = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png",
      title: "NAAC A++ Grade",
      description: "National Assessment and Accreditation Council",
      grade: "A++",
      validity: "Valid until 2028",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/UGC_India_Logo.png",
      title: "UGC Recognition",
      description: "University Grants Commission",
      grade: "Approved",
      validity: "Permanent",
    },
    {
      id: 3,
      logo: "https://media.licdn.com/dms/image/v2/D4E22AQH55CbKVFJGww/feedshare-shrink_800/B4EZR1Z2wgHAAk-/0/1737136500357?e=2147483647&v=beta&t=q0zU5bgqTHHaRKPlGo6Tzl0lEzWdYf6pYptTYwEPmIU",
      title: "IET Membership",
      description: "Institution of Engineering and Technology",
      grade: "Member",
      validity: "Active",
    },
    {
      id: 4,
      logo: "https://www.gvsu.edu/cms4/asset/83FCF959-CAC9-6F16-437BAC0D302BE992/eac-rgb-w-l[1464096725].jpg",
      title: "ABET Accreditation",
      description: "Engineering Accreditation Commission",
      grade: "Accredited",
      validity: "2022-2028",
    },
    {
      id: 5,
      logo: "https://www.abesit.in/wp-content/uploads/2025/05/nba-300x300-1.jpg",
      title: "NBA Accreditation",
      description: "National Board of Accreditation",
      grade: "Accredited",
      validity: "Active",
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_of_the_Indian_Council_of_Agricultural_Research.svg/962px-Logo_of_the_Indian_Council_of_Agricultural_Research.svg.png",
      title: "ICAR Recognition",
      description: "Indian Council of Agricultural Research",
      grade: "Recognized",
      validity: "Active",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm mb-6 border">
            <FaMedal className="text-yellow-500 text-lg" />
            <span className="font-medium text-gray-700 text-sm tracking-wide">
              EXCELLENCE RECOGNIZED
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rankings & Accreditations
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Consistently ranked among India's top institutions for academic
            excellence, innovation, and quality education
          </p>
        </div>

        {/* NIRF Rankings Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 border">
          {/* Header */}
          <div className="px-4 sm:px-8 py-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: "var(--color-brand-blue)" }}
                >
                  <span
                    className="text-lg sm:text-2xl font-bold"
                    style={{ color: "var(--color-brand-blue)" }}
                  >
                    NIRF
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    NIRF Rankings 2024
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Ministry of Education, Government of India
                  </p>
                </div>
              </div>

              {/* Government Logos */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap xl:flex-nowrap">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/4e/UGC_India_Logo.png"
                  alt="UGC India Logo"
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                />
                <img
                  src="https://www.gvsu.edu/cms4/asset/83FCF959-CAC9-6F16-437BAC0D302BE992/eac-rgb-w-l[1464096725].jpg"
                  alt="EAC Logo"
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_of_the_Indian_Council_of_Agricultural_Research.svg/962px-Logo_of_the_Indian_Council_of_Agricultural_Research.svg.png"
                  alt="ICAR Logo"
                  className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                />
              </div>

              <div className="text-center xl:text-right">
                <div className="text-sm text-gray-500 mb-1">
                  Latest Rankings
                </div>
                <div
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-brand-blue)" }}
                >
                  2024 Edition
                </div>
              </div>
            </div>
          </div>

          {/* Rankings Grid */}
          <div className="px-4 sm:px-8 pb-8 lg:px-12 lg:pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {rankings.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:bg-white">
                      <div className="text-center">
                        <IconComponent
                          className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 mx-auto"
                          style={{ color: "var(--color-brand-blue)" }}
                        />
                        <div
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-1 sm:mb-2"
                          style={{ color: "var(--color-brand-blue)" }}
                        >
                          {item.rank}
                        </div>
                        <div className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                          {item.type}
                        </div>
                        <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    {index < rankings.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Accreditations & Recognitions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Validated by premier national and international accreditation
              bodies
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {accreditations.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden transform hover:scale-[1.02]"
              >
                {/* Logo Section */}
                <div className="aspect-video overflow-hidden bg-white p-4 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-brand-blue)" }}
                      >
                        <span className="text-[8px] text-xs font-bold text-white">
                          {item.grade === "A++"
                            ? "A++"
                            : item.grade === "Approved"
                            ? "✓"
                            : item.grade === "Member"
                            ? "M"
                            : item.grade === "Accredited"
                            ? "✓"
                            : "R"}
                        </span>
                      </div>
                      <span
                        className="text-[10px] sm:text-xs lg:text-sm font-semibold"
                        style={{ color: "var(--color-brand-blue)" }}
                      >
                        {item.grade}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {item.validity}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="h-1"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-brand-orange) 0%, var(--color-brand-blue) 100%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-5 text-white rounded-2xl text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
            }}
          >
            <FaShieldAlt className="text-xl sm:text-2xl" />
            <span>View Detailed Rankings Report</span>
            <FaChevronRight className="text-base sm:text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
