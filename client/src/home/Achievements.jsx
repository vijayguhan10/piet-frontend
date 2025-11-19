import { useState } from "react";
import {
  FaTrophy,
  FaMedal,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";

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
      category: "academics",
      title: "Scholastic Excellence Awards",
      description: "Celebrating top-performing students across all programs",
      image:
        "https://i.pinimg.com/originals/7d/60/29/7d6029cfc040929fc84eb9bf90a92133.jpg",
      stats: { participants: "500+", awards: "60" },
    },
    {
      id: 2,
      category: "innovation",
      title: "Campus Innovation Expo",
      description: "Showcasing creative projects and groundbreaking solutions",
      image:
        "https://i.pinimg.com/originals/84/73/80/847380a8e4afb3ca81825deb72493983.jpg",
      stats: { participants: "250+", projects: "90" },
    },
    {
      id: 3,
      category: "competitions",
      title: "Hackathon Championship",
      description:
        "24-hour coding challenge featuring advanced problem solving",
      image:
        "https://i.pinimg.com/originals/ec/78/6b/ec786b8da8084128d5cd7d14599a3513.jpg",
      stats: { participants: "180+", teams: "40" },
    },
    {
      id: 4,
      category: "research",
      title: "Annual Research Symposium",
      description: "Presentations of modern research and technical papers",
      image:
        "https://i.pinimg.com/originals/bd/2a/7b/bd2a7b46e7d89abad67ac58b6adb9042.jpg",
      stats: { researchers: "120+", papers: "50" },
    },
    {
      id: 5,
      category: "community",
      title: "Women Entrepreneurship Drive",
      description: "Programs empowering young women entrepreneurs",
      image:
        "https://i.pinimg.com/originals/a5/f8/37/a5f837f6159f4580bc1d6cfe9e21af84.jpg",
      stats: { participants: "90+", startups: "15" },
    },
    {
      id: 6,
      category: "careers",
      title: "Career Development Workshop",
      description: "Training on resume building, LinkedIn, and GitHub",
      image:
        "https://i.pinimg.com/originals/04/58/35/045835bfb845894158f0d270e8368226.jpg",
      stats: { attendees: "350+", offers: "50" },
    },
    {
      id: 7,
      category: "sports",
      title: "Annual Sports Meet",
      description: "A celebration of athletic skills and team spirit",
      image:
        "https://i.pinimg.com/originals/e6/91/b0/e691b04cf3c1bc205bcd50428e2aca4a.png",
      stats: { participants: "600+", events: "25" },
    },
    {
      id: 8,
      category: "technology",
      title: "Tech Expo Showcase",
      description:
        "Exhibitions of electronics, robotics, and software projects",
      image:
        "https://i.pinimg.com/originals/38/4d/be/384dbe43493317fed5b95a4d0486a388.jpg",
      stats: { projects: "80+", teams: "30" },
    },
    {
      id: 9,
      category: "culture",
      title: "Cultural Fest - Arts & Talent Night",
      description: "A vibrant display of cultural performances and arts",
      image:
        "https://i.pinimg.com/originals/cc/c5/cd/ccc5cd8b3a877d152aac2535cf60e948.jpg",
      stats: { participants: "700+", performances: "50+" },
    },
    {
      id: 10,
      category: "studentlife",
      title: "Campus Life Gallery",
      description: "Moments capturing vibrant student experiences",
      image:
        "https://i.pinimg.com/originals/78/b1/7a/78b17ac34ffc8485b457a4a55bbffb88.jpg",
      stats: { photos: "300+", memories: "infinite" },
    },
    
    {
      id: 17,
      category: "competitions",
      title: "International Robotics Challenge",
      description: "Advanced robotics competitions and demonstrations",
      image:
        "https://i.pinimg.com/originals/57/30/4d/57304d21cdf050b23058dc1bd494d918.jpg",
      stats: { teams: "50+", countries: "12" },
    },
    {
      id: 18,
      category: "academic",
      title: "Graduate Research Conference",
      description: "Postgraduate research presentations and networking",
      image:
        "https://i.pinimg.com/originals/90/a3/05/90a30557ad4f0f03cef9fe86695a22ab.png",
      stats: { researchers: "120+", papers: "60" },
    },
    {
      id: 19,
      category: "community",
      title: "Digital Literacy Campaign",
      description: "Technology education for underserved communities",
      image:
        "https://i.pinimg.com/originals/13/61/84/1361848376ca18f82f90c37378769ca2.png",
      stats: { beneficiaries: "1000+", centers: "15" },
    },
    {
      id: 20,
      category: "innovation",
      title: "AI & Machine Learning Summit",
      description: "Artificial intelligence research and applications",
      image:
        "https://i.pinimg.com/originals/f7/5c/da/f75cda048abdffa82a38d9a3c4b5a7da.jpg",
      stats: { attendees: "400+", demos: "30" },
    },
    {
      id: 21,
      category: "competitions",
      title: "Design Thinking Challenge",
      description: "Creative problem-solving and design competitions",
      image:
        "https://i.pinimg.com/originals/80/35/73/803573cc224fdcd3c61762b3728bb4d2.jpg",
      stats: { participants: "180+", solutions: "45" },
    },
    {
      id: 22,
      category: "academic",
      title: "International Exchange Program",
      description: "Global academic partnerships and student mobility",
      image:
        "https://i.pinimg.com/originals/38/2f/b4/382fb4ba36cda57575b801b4eb5f3f21.png",
      stats: { students: "75+", universities: "20" },
    },
    {
      id: 23,
      category: "innovation",
      title: "Green Technology Initiative",
      description: "Sustainable technology development and implementation",
      image:
        "https://i.pinimg.com/originals/97/f0/ac/97f0ac1795c3d73c284afef582c284ff.jpg",
      stats: { projects: "35+", savings: "40%" },
    },
    {
      id: 24,
      category: "community",
      title: "Youth Leadership Program",
      description: "Developing next-generation leaders and changemakers",
      image:
        "https://i.pinimg.com/originals/e0/a6/7b/e0a67b6a70abaefcf2b6f4de7b715023.jpg",
      stats: { leaders: "200+", initiatives: "50" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {achievementData.map((achievement, index) => (
              <div
                key={achievement.id}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => openImageModal(achievement.image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-slate-600 capitalize">
                      {achievement.category}
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
