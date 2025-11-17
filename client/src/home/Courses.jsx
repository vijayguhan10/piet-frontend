import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaTooth,
  FaBriefcase,
  FaBalanceScale,
  FaDraftingCompass,
  FaFlask,
  FaSeedling,
  FaPrescriptionBottle,
  FaUserNurse,
  FaShieldAlt,
  FaWalking,
  FaHandsHelping,
  FaLaptop,
  FaBook,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Courses = () => {
  const programs = [
    {
      id: 1,
      title: "Engineering & Technology",
      icon: FaGraduationCap,
      description: "Shape the future with cutting-edge technical education",
      courses: ["B.E/B.Tech", "M.E/M.Tech", "Ph.D"],
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      color: "from-blue-500 to-indigo-600",
      stats: { programs: 15, students: "5000+" },
    },
    {
      id: 2,
      title: "Medicine",
      icon: FaHeartbeat,
      description: "Excellence in medical education and healthcare",
      courses: ["MBBS", "MD", "MS"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      color: "from-red-500 to-pink-600",
      stats: { programs: 8, students: "2000+" },
    },
    {
      id: 3,
      title: "Dentistry",
      icon: FaTooth,
      description: "Advanced dental sciences and oral healthcare",
      courses: ["BDS", "MDS", "Certificate"],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      color: "from-teal-500 to-cyan-600",
      stats: { programs: 6, students: "800+" },
    },
    {
      id: 4,
      title: "Management",
      icon: FaBriefcase,
      description: "Leadership and business excellence programs",
      courses: ["MBA", "PGDM", "Executive MBA"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      color: "from-purple-500 to-violet-600",
      stats: { programs: 10, students: "1500+" },
    },
    {
      id: 5,
      title: "Law",
      icon: FaBalanceScale,
      description: "Justice, legal studies and advocacy",
      courses: ["BA LLB", "LLB", "LLM"],
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      color: "from-amber-500 to-orange-600",
      stats: { programs: 5, students: "600+" },
    },
    {
      id: 6,
      title: "Architecture",
      icon: FaDraftingCompass,
      description: "Design thinking and sustainable architecture",
      courses: ["B.Arch", "M.Arch", "Planning"],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      color: "from-slate-500 to-gray-600",
      stats: { programs: 4, students: "400+" },
    },
    {
      id: 7,
      title: "Science & Humanities",
      icon: FaFlask,
      description: "Fundamental sciences and liberal arts",
      courses: ["B.Sc", "M.Sc", "Integrated"],
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      color: "from-emerald-500 to-green-600",
      stats: { programs: 12, students: "1200+" },
    },
    // {
    //   id: 8,
    //   title: "Agriculture Sciences",
    //   icon: FaSeedling,
    //   description: "Sustainable farming and agri-tech innovation",
    //   courses: ["B.Sc Agri", "M.Sc Agri", "Horticulture"],
    //   image:
    //     "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    //   color: "from-lime-500 to-green-600",
    //   stats: { programs: 7, students: "500+" },
    // },
    // {
    //   id: 9,
    //   title: "Pharmacy",
    //   icon: FaPrescriptionBottle,
    //   description: "Pharmaceutical sciences and drug development",
    //   courses: ["B.Pharm", "M.Pharm", "Pharm.D"],
    //   image:
    //     "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    //   color: "from-indigo-500 to-blue-600",
    //   stats: { programs: 6, students: "700+" },
    // },
    // {
    //   id: 10,
    //   title: "Nursing",
    //   icon: FaUserNurse,
    //   description: "Compassionate care and clinical excellence",
    //   courses: ["B.Sc Nursing", "M.Sc Nursing", "Post Basic"],
    //   image:
    //     "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    //   color: "from-rose-500 to-red-600",
    //   stats: { programs: 5, students: "900+" },
    // },
    // {
    //   id: 11,
    //   title: "Public Health",
    //   icon: FaShieldAlt,
    //   description: "Community health and epidemiology",
    //   courses: ["MPH", "DPH", "Certificate"],
    //   image:
    //     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    //   color: "from-sky-500 to-blue-600",
    //   stats: { programs: 4, students: "300+" },
    // },
    // {
    //   id: 12,
    //   title: "Physiotherapy",
    //   icon: FaWalking,
    //   description: "Rehabilitation and movement sciences",
    //   courses: ["BPT", "MPT", "Diploma"],
    //   image:
    //     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    //   color: "from-orange-500 to-red-600",
    //   stats: { programs: 4, students: "350+" },
    // },
    // {
    //   id: 13,
    //   title: "Occupational Therapy",
    //   icon: FaHandsHelping,
    //   description: "Enabling independence through therapy",
    //   courses: ["BOT", "MOT", "Advanced Cert"],
    //   image:
    //     "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    //   color: "from-fuchsia-500 to-purple-600",
    //   stats: { programs: 3, students: "250+" },
    // },
    // {
    //   id: 14,
    //   title: "Online Education",
    //   icon: FaLaptop,
    //   description: "Flexible learning for working professionals",
    //   courses: ["Online Degrees", "Certifications", "Short Courses"],
    //   image:
    //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    //   color: "from-cyan-500 to-blue-600",
    //   stats: { programs: 20, students: "3000+" },
    // },
    // {
    //   id: 15,
    //   title: "Distance Education",
    //   icon: FaBook,
    //   description: "Learn at your own pace, anywhere",
    //   courses: ["Distance BA", "Distance MBA", "PG Diploma"],
    //   image:
    //     "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    //   color: "from-violet-500 to-purple-600",
    //   stats: { programs: 18, students: "2500+" },
    // },
  ];

  const ProgramCard = ({ program, index }) => {
    const Icon = program.icon;

    return (
      <div className="group relative h-full">
        {/* Gradient Border Wrapper */}
        <div
          className={`relative h-full rounded-2xl bg-gradient-to-r ${program.color} p-[2px] transition-all duration-300`}
        >
          {/* Main Card */}
          <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
                <Icon
                  className="text-2xl"
                  style={{ color: "var(--color-brand-orange)" }}
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-slate-600 font-medium">
                    Programs
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {program.stats.programs}
                  </div>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-slate-600 font-medium">
                    Students
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {program.stats.students}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {program.description}
              </p>

              {/* Courses Pills */}
              <div className="flex flex-wrap gap-2">
                {program.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="w-full flex items-center justify-between px-5 py-3 text-white rounded-xl font-semibold text-sm shadow-md"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-orange-dark))",
                }}
              >
                <span>Explore Program</span>
                <FaArrowRight />
              </button>

              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1 pt-2 border-t border-slate-100">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="ml-2 text-xs text-slate-600 font-medium">
                  4.8/5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
            }}
          >
            <FaGraduationCap className="text-white text-lg" />
            <span className="text-white font-bold text-sm tracking-wide">
              WORLD-CLASS EDUCATION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Explore Diverse Programs{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-brand-orange), var(--color-brand-blue))",
              }}
            >
              for Every Career
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Discover your passion and unlock your potential with our
            comprehensive range of programs designed to shape tomorrow's leaders
            and innovators.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--color-brand-orange)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--color-brand-blue)" }}
            />
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--color-brand-blue)" }}
            />
          </div>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button
              className="px-8 py-4 text-white rounded-full font-bold text-lg shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
              }}
            >
              View All Programs
            </button>
            <button
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-xl border-2"
              style={{
                borderColor: "var(--color-brand-orange)",
              }}
            >
              Download Brochure
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Need guidance?{" "}
            <a
              href="#contact"
              className="font-semibold hover:underline"
              style={{ color: "var(--color-brand-orange)" }}
            >
              Contact our admissions team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
