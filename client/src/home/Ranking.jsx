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
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/NAAC_LOGO.svg/1200px-NAAC_LOGO.svg.png",
      title: "NAAC A++ Grade",
      description: "National Assessment and Accreditation Council",
      grade: "A++",
      validity: "Valid until 2028",
    },
    {
      id: 2,
      logo: "https://www.ugc.ac.in/oldpdf/ugc_logo.jpg",
      title: "UGC Recognition",
      description: "University Grants Commission",
      grade: "Approved",
      validity: "Permanent",
    },
    {
      id: 3,
      logo: "https://www.ietjournals.org/images/IET-logo.png",
      title: "IET Membership",
      description: "Institution of Engineering and Technology",
      grade: "Member",
      validity: "Active",
    },
    {
      id: 4,
      logo: "https://aicte-india.org/sites/default/files/logo_new.png",
      title: "ABET Accreditation",
      description: "Engineering Accreditation Commission",
      grade: "Accredited",
      validity: "2022-2028",
    },
    {
      id: 5,
      logo: "https://www.nbaindia.org/uploaded/images/logo.png",
      title: "NBA Accreditation",
      description: "National Board of Accreditation",
      grade: "Accredited",
      validity: "Active",
    },
    {
      id: 6,
      logo: "https://icar.org.in/sites/default/files/inline-images/logo.png",
      title: "ICAR Recognition",
      description: "Indian Council of Agricultural Research",
      grade: "Recognized",
      validity: "Active",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm mb-6 border">
            <FaMedal className="text-yellow-500 text-lg" />
            <span className="font-medium text-gray-700 text-sm tracking-wide">
              EXCELLENCE RECOGNIZED
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rankings & Accreditations
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Consistently ranked among India's top institutions for academic
            excellence, innovation, and quality education
          </p>
        </div>

        {/* NIRF Rankings Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 border">
          {/* Header */}
          <div className="px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 rounded-2xl border-2 flex items-center justify-center"
                  style={{ borderColor: "var(--color-brand-blue)" }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-brand-blue)" }}
                  >
                    NIRF
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    NIRF Rankings 2024
                  </h2>
                  <p className="text-gray-600">
                    Ministry of Education, Government of India
                  </p>
                </div>
              </div>

              {/* Government Logos */}
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src="https://www.nationalanticorruptioncommission.com/uploads/1653988613_9322e574621420038bfb.png"
                  alt="Government of India Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tDlNLfrJwJRaAw8Norcm_VSuHuZob-yNDQ&s"
                  alt="Ministry of Education Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hj_3Ynl_EE77y1LrSoy-1wtzjqYAdMU7Pw&s"
                  alt="Additional Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              <div className="text-center md:text-right">
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
          <div className="px-8 pb-8 lg:px-12 lg:pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {rankings.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:bg-white">
                      <div className="text-center">
                        <IconComponent
                          className="text-3xl mb-3 mx-auto"
                          style={{ color: "var(--color-brand-blue)" }}
                        />
                        <div
                          className="text-4xl lg:text-5xl font-medium mb-2"
                          style={{ color: "var(--color-brand-blue)" }}
                        >
                          {item.rank}
                        </div>
                        <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">
                          {item.type}
                        </div>
                        <div className="text-sm font-semibold text-gray-900">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accreditations & Recognitions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Validated by premier national and international accreditation
              bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditations.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden transform hover:scale-[1.02]"
              >
                {/* Logo Section */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-b flex items-center justify-center min-h-[180px]">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div class="text-6xl font-black text-gray-400">${item.grade}</div>`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: "var(--color-brand-blue)",
                        color: "white",
                      }}
                    >
                      {item.grade}
                    </span>
                    <span className="text-xs text-gray-500">
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
            className="group inline-flex items-center gap-4 px-12 py-5 text-white rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
            }}
          >
            <FaShieldAlt className="text-2xl" />
            <span>View Detailed Rankings Report</span>
            <FaChevronRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
