import { useState } from "react";
import {
  FaTrophy,
  FaMedal,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";

// Import achievement images from college folder
import img1 from "/src/assets/college/Annual-Day-768x432.webp";
import img2 from "/src/assets/college/Gameathon-768x432.webp";
import img3 from "/src/assets/college/Ideathon-2025-1-768x432.webp";
import img4 from "/src/assets/college/Quest-Ingenium-March-2025-1-768x432.webp";
import img5 from "/src/assets/college/Workshop-on-Business-Model-Canvas-768x432.webp";
import img6 from "/src/assets/college/Github-and-Linkedin-for-Career-Advancement-768x432.webp";
import img7 from "/src/assets/college/Digital-Marketing-768x432.jpg.jpeg";
import img8 from "/src/assets/college/Women-Entrepreneurship-Development-Programme-768x432.jpg.jpeg";
import img9 from "/src/assets/college/Event-in-celebration-of-Mathematics-and-Statistics-Awareness-Month-768x432.webp";
import img10 from "/src/assets/college/Workshop-on-Bug-Bounty-Pen-Testing-Uncovering-Vulnerabilities-like-a-Pro-768x432.webp";
import img11 from "/src/assets/college/lifestyle-awareness-program-768x432.webp";
import img12 from "/src/assets/college/Walk-Share-Motivate-768x432.webp";
import img13 from "/src/assets/college/Nextgen-C-Innovation-throgh-STL-Concurrency-Beyond-768x432.webp";
import img14 from "/src/assets/college/Codelee-768x432.webp";
import img15 from "/src/assets/college/POSTER-17-copy-768x432.jpg.jpeg";
import img16 from "/src/assets/college/POSTER-20-TV-ACHIEVEMENT-copy-768x432.jpg.jpeg";
import img17 from "/src/assets/college/POSTER-37-TV-SIH-copy-768x432.jpg.jpeg";
import img18 from "/src/assets/college/POSTER-43-B-ANIMATE-copy-768x432.jpg.jpeg";
import img19 from "/src/assets/college/World-Earth-Day-1024x1024.webp";
import img20 from "/src/assets/college/The-International-Day-of-Forests-1024x1024.webp";

const achievementImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const achievementCategories = [
    { id: "all", name: "All Achievements", icon: FaTrophy },
    { id: "academic", name: "Academic Excellence", icon: FaGraduationCap },
    { id: "innovation", name: "Innovation & Research", icon: FaLightbulb },
    { id: "competitions", name: "Competitions", icon: FaMedal },
    { id: "community", name: "Community Impact", icon: FaUsers },
  ];

  const achievementData = [
    {
      id: 1,
      category: "academic",
      title: "Annual Academic Excellence Awards",
      description:
        "Recognizing outstanding academic performance across all departments",
      image: img1,
      stats: { participants: "500+", awards: "50" },
    },
    {
      id: 2,
      category: "innovation",
      title: "Ideathon 2025 - Innovation Challenge",
      description:
        "Students showcase groundbreaking ideas and innovative solutions",
      image: img3,
      stats: { participants: "200+", projects: "75" },
    },
    {
      id: 3,
      category: "competitions",
      title: "Gameathon - Gaming & Development",
      description: "Premier gaming and game development competition",
      image: img2,
      stats: { participants: "150+", teams: "30" },
    },
    {
      id: 4,
      category: "innovation",
      title: "Quest Ingenium Research Symposium",
      description: "Cutting-edge research presentations and innovations",
      image: img4,
      stats: { researchers: "100+", papers: "40" },
    },
    {
      id: 5,
      category: "community",
      title: "Women Entrepreneurship Development",
      description: "Empowering women through entrepreneurship programs",
      image: img8,
      stats: { participants: "80+", startups: "12" },
    },
    {
      id: 6,
      category: "academic",
      title: "Career Advancement Workshop",
      description: "GitHub and LinkedIn mastery for professional growth",
      image: img6,
      stats: { attendees: "300+", placements: "45" },
    },
  ];

  const filteredAchievements =
    selectedCategory === "all"
      ? achievementData
      : achievementData.filter((item) => item.category === selectedCategory);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header Section */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-16 pb-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full border border-amber-200/50 shadow-sm mb-8">
            <FaTrophy className="text-amber-600 text-lg" />
            <span className="text-amber-800 font-semibold text-sm tracking-wide uppercase">
              Excellence & Recognition
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 ml-4">
              Achievements
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Celebrating excellence, innovation, and outstanding accomplishments
            that define our institution's commitment to academic and
            professional success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {achievementCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-amber-300"
                }`}
              >
                <IconComponent
                  className={`text-lg transition-colors ${
                    selectedCategory === category.id
                      ? "text-white"
                      : "text-amber-600"
                  }`}
                />
                <span className="text-sm">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Button */}
                <button
                  onClick={() => openImageModal(achievement.image)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-slate-800 font-semibold text-sm shadow-lg">
                    View Details
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <FaTrophy className="text-white text-sm sm:text-lg lg:text-xl" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-xs font-medium text-amber-600 uppercase tracking-wide mb-1">
                      {
                        achievementCategories.find(
                          (cat) => cat.id === achievement.category
                        )?.name
                      }
                    </div>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {achievement.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {Object.entries(achievement.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center"
                    >
                      <div className="text-sm sm:text-lg font-bold text-slate-900">
                        {value}
                      </div>
                      <div className="text-xs font-medium text-slate-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Gallery Collage */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Gallery of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 ml-3">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A visual journey through our most memorable moments of success and
              achievement
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-4 space-y-2 sm:space-y-4">
            {achievementImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image}
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-sm font-semibold text-slate-800">
                      Achievement Gallery #{index + 1}
                    </div>
                    <div className="text-xs text-slate-600">
                      Click to view details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-white transition-colors shadow-lg"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Achievement Detail"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
        <div className="relative bg-white border border-slate-200/50 rounded-3xl p-12 text-start shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Minimal accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>

          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 relative">
            Join Our Legacy of Excellence
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of our journey towards greater achievements and academic
            excellence. Your success story starts here.
          </p>
          <button className="group text-nowrap right-6 relative bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Opportunities</span>
            <FaChevronRight className="relative z-10 inline ml-2 group-hover:translate-x-1 transition-transform" />
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
