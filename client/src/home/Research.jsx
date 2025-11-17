import { useState, useEffect, useRef } from "react";
import { useInView as useIntersectionObserver } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  FaFlask,
  FaLightbulb,
  FaUsers,
  FaFileAlt,
  FaGlobe,
  FaArrowRight,
  FaPlay,
  FaDownload,
  FaExternalLinkAlt,
  FaStar,
  FaBrain,
  FaAtom,
  FaDna,
  FaRobot,
  FaSolarPanel,
  FaCircle,
} from "react-icons/fa";
import {
  RiAiGenerate,
  RiRobot2Line,
  RiMicroscopeLine,
  //   RiSpaceLine,
  RiBrainLine,
} from "react-icons/ri";
import {
  HiLightningBolt,
  HiChip,
  HiBeaker,
  HiSparkles,
  HiAcademicCap,
} from "react-icons/hi";
import {
  SiTensorflow,
  SiPython,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }) => {
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          enableScrollSpy
          scrollSpyOnce
        />
      )}
    </div>
  );
};

// Static Icon Component
const StaticIcon = ({ icon: Icon, color }) => {
  return (
    <div className="relative">
      <div className="relative bg-white rounded-full p-4 shadow-lg">
        <Icon className="text-2xl" style={{ color }} />
      </div>
    </div>
  );
};

// Innovation Showcase Component
const InnovationShowcase = () => {
  const innovations = [
    {
      id: 1,
      title: "AI-Powered Neural Mesh",
      icon: RiBrainLine,
      color: "var(--color-brand-blue)",
      description: "Advanced brain-computer interface using quantum computing",
      technologies: [SiTensorflow, SiPython, FaBrain],
      metrics: { accuracy: "98.5%", speed: "2ms", efficiency: "99%" },
      status: "Prototype Ready",
      timeline: "2024-2026",
    },
    {
      id: 2,
      title: "Nano-Bioengineering Lab",
      icon: RiMicroscopeLine,
      color: "var(--color-brand-orange)",
      description:
        "Molecular-level drug delivery system with precision targeting",
      technologies: [FaDna, FaAtom, HiBeaker],
      metrics: { precision: "99.9%", size: "10nm", delivery: "100%" },
      status: "Clinical Phase",
      timeline: "2023-2025",
    },
    {
      id: 3,
      title: "Quantum Energy Grid",
      icon: HiLightningBolt,
      color: "var(--color-brand-blue)",
      description:
        "Revolutionary energy distribution using quantum entanglement",
      technologies: [FaSolarPanel, FaAtom],
      metrics: { efficiency: "99.8%", loss: "0.1%", scale: "City-wide" },
      status: "Testing Phase",
      timeline: "2024-2027",
    },
    {
      id: 4,
      title: "Autonomous Ecosystem",
      icon: RiRobot2Line,
      color: "var(--color-brand-orange)",
      description:
        "Self-sustaining robotic ecosystem for environmental restoration",
      technologies: [SiArduino, SiRaspberrypi, FaRobot],
      metrics: { autonomy: "100%", coverage: "1000km²", restoration: "95%" },
      status: "Deployment Ready",
      timeline: "2024-2025",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {innovations.map((innovation, index) => (
        <div
          key={innovation.id}
          className="relative group"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border relative overflow-hidden">
            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <StaticIcon
                  icon={innovation.icon}
                  color={innovation.color}
                />
                <div className="text-right">
                  <div className="text-xs font-semibold text-gray-500 mb-1">
                    Status
                  </div>
                  <span
                    className="px-3 py-1 text-xs rounded-full font-semibold"
                    style={{
                      backgroundColor: innovation.color + "20",
                      color: innovation.color,
                    }}
                  >
                    {innovation.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {innovation.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {innovation.description}
              </p>

              {/* Technology Stack */}
              <div className="flex gap-3 mb-6">
                {innovation.technologies.map((Tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: innovation.color + "15" }}
                  >
                    <Tech
                      className="text-sm"
                      style={{ color: innovation.color }}
                    />
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(innovation.metrics).map(
                  ([key, value]) => (
                    <div key={key} className="text-center">
                      <div
                        className="text-lg font-bold"
                        style={{ color: innovation.color }}
                      >
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Timeline: {innovation.timeline}</span>
                <button
                  className="flex items-center gap-1 font-semibold"
                  style={{ color: innovation.color }}
                >
                  Explore <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Research = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [selectedInnovation, setSelectedInnovation] = useState(null);

  const stats = [
    {
      number: 150,
      label: "Research Projects",
      icon: FaFlask,
      description: "Active research initiatives",
      suffix: "+",
    },
    {
      number: 25,
      label: "Patents Filed",
      icon: FaLightbulb,
      description: "Intellectual property created",
      suffix: "+",
    },
    {
      number: 50,
      label: "Research Funding",
      icon: FaStar,
      description: "Total grants received (Crores)",
      prefix: "₹",
      suffix: "Cr+",
    },
    {
      number: 500,
      label: "Publications",
      icon: FaFileAlt,
      description: "Peer-reviewed articles",
      suffix: "+",
    },
  ];

  const researchAreas = [
    {
      id: 1,
      title: "Artificial Intelligence & Neural Networks",
      icon: RiBrainLine,
      description: "Next-generation AI systems with cognitive capabilities",
      projects: 12,
      funding: "₹8.5Cr",
      keywords: ["Deep Learning", "Neural Mesh", "Quantum AI", "AGI"],
      technologies: [SiTensorflow, SiPython, RiAiGenerate],
      color: "var(--color-brand-blue)",
    },
    {
      id: 2,
      title: "Quantum Computing & Energy",
      icon: FaAtom,
      description: "Revolutionary quantum systems for energy and computation",
      projects: 8,
      funding: "₹12.2Cr",
      keywords: [
        "Quantum Dots",
        "Energy Grids",
        "Entanglement",
        "Superposition",
      ],
      technologies: [HiLightningBolt, FaSolarPanel, HiChip],
      color: "var(--color-brand-orange)",
    },
    {
      id: 3,
      title: "Nano-Biotechnology",
      icon: FaDna,
      description: "Molecular engineering for medical breakthroughs",
      projects: 15,
      funding: "₹15.8Cr",
      keywords: [
        "Gene Editing",
        "Nano-medicine",
        "Biomarkers",
        "Precision Therapy",
      ],
      technologies: [RiMicroscopeLine, HiBeaker, FaAtom],
      color: "var(--color-brand-blue)",
    },
    {
      id: 4,
      title: "Autonomous Robotics",
      icon: FaRobot,
      description: "Self-learning robotic ecosystems and swarm intelligence",
      projects: 10,
      funding: "₹6.7Cr",
      keywords: ["Swarm AI", "Self-Assembly", "Biomimetics", "Adaptation"],
      technologies: [SiArduino, SiRaspberrypi, RiRobot2Line],
      color: "var(--color-brand-orange)",
    },
  ];

  const projects = {
    ongoing: [
      {
        id: 1,
        title: "Neural-Quantum Hybrid Processor",
        lead: "Dr. Rajesh Kumar",
        department: "Quantum Computing Lab",
        duration: "2024-2027",
        funding: "₹5.5Cr",
        status: "75% Complete",
        description:
          "Breakthrough processor combining neural networks with quantum computing",
        tags: ["Quantum AI", "Neural Processing", "Hybrid Systems"],
        impact: "10,000x faster than current systems",
        icon: RiBrainLine,
        color: "var(--color-brand-blue)",
        metrics: { speed: "10,000x", accuracy: "99.9%", efficiency: "95%" },
      },
      {
        id: 2,
        title: "Molecular Assembly Engine",
        lead: "Dr. Priya Sharma",
        department: "Nano-Engineering",
        duration: "2024-2026",
        funding: "₹4.8Cr",
        status: "60% Complete",
        description: "Precision molecular assembly for materials and medicine",
        tags: ["Nano-Assembly", "Molecular Engineering", "Precision Medicine"],
        impact: "Atom-level precision manufacturing",
        icon: FaAtom,
        color: "var(--color-brand-orange)",
        metrics: { precision: "1nm", scale: "10¹²", success: "99%" },
      },
      {
        id: 3,
        title: "Autonomous Ecosystem Network",
        lead: "Dr. Arun Patel",
        department: "Robotics & AI",
        duration: "2023-2025",
        funding: "₹6.2Cr",
        status: "85% Complete",
        description:
          "Self-sustaining robotic network for environmental restoration",
        tags: ["Swarm Robotics", "Environmental AI", "Self-Organization"],
        impact: "Restore 1000+ acres autonomously",
        icon: FaRobot,
        color: "var(--color-brand-blue)",
        metrics: { coverage: "1000km²", autonomy: "100%", efficiency: "95%" },
      },
    ],
    completed: [
      {
        id: 4,
        title: "Quantum Sensor Array",
        lead: "Dr. Meera Singh",
        department: "Quantum Physics",
        duration: "2022-2024",
        funding: "₹3.8Cr",
        status: "Completed",
        description: "Ultra-sensitive quantum sensors for medical diagnostics",
        tags: ["Quantum Sensing", "Medical Tech", "Precision Diagnostics"],
        impact: "100x more sensitive than existing sensors",
        icon: HiChip,
        color: "var(--color-brand-orange)",
        awards: ["Breakthrough Innovation Award 2024"],
        metrics: { sensitivity: "100x", accuracy: "99.99%", size: "1mm³" },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border mb-6 relative z-10">
            <HiSparkles style={{ color: "var(--color-brand-orange)" }} />
            <span className="font-medium text-gray-700 text-sm tracking-wide">
              NEXT-GENERATION RESEARCH
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            Laboratory
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Pushing the boundaries of science with quantum computing,
            nano-biotechnology, and autonomous systems to shape humanity's
            future
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-lg relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-dark) 100%)",
              }}
            >
              <FaPlay />
              <span>Experience VR Lab Tour</span>
            </button>
            <button
              className="inline-flex items-center gap-3 px-8 py-4 border-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: "var(--color-brand-orange)",
                color: "var(--color-brand-orange)",
              }}
            >
              <FaDownload />
              <span>Download Research Portfolio</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 text-center shadow-xl border relative overflow-hidden group"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-blue-light) 100%)",
                }}
              >
                <stat.icon className="text-2xl text-white" />
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-1 relative z-10">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2}
                />
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-2 relative z-10">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600 relative z-10">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Research Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Research Domains
            </h2>
            <p className="text-lg text-gray-600">
              Cutting-edge research at the intersection of multiple scientific
              disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border relative"
              >
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${area.color} 0%, ${area.color}80 100%)`,
                  }}
                />

                {/* Header */}
                <div className="relative p-8 pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <StaticIcon
                      icon={area.icon}
                      color={area.color}
                    />
                    <div className="text-right">
                      <div
                        className="text-sm font-semibold"
                        style={{ color: area.color }}
                      >
                        {area.projects} Active Projects
                      </div>
                      <div className="text-xs text-gray-600">
                        {area.funding} Funding
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{area.description}</p>

                  {/* Technology Icons */}
                  <div className="flex gap-3 mb-4">
                    {area.technologies.map((Tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: area.color + "15" }}
                      >
                        <Tech
                          className="text-lg"
                          style={{ color: area.color }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.keywords.map((keyword, keywordIndex) => (
                      <span
                        key={keywordIndex}
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{
                          borderColor: area.color + "40",
                          color: area.color,
                          backgroundColor: area.color + "10",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <button
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                    style={{ color: area.color }}
                  >
                    <span>Explore Laboratory</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>))}
          </div>
        </div>

        {/* Revolutionary Innovation Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary Innovations
            </h2>
            <p className="text-lg text-gray-600">
              Pioneering technologies that will transform industries and society
            </p>
          </div>

          <InnovationShowcase />
        </div>

        {/* Research Collaboration Hub */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border relative overflow-hidden">
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Innovation Ecosystem
            </h2>
            <p className="text-lg text-gray-600">
              Collaborate with leading researchers and shape the future of
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: FaUsers,
                title: "Industry Partnerships",
                description:
                  "Collaborate on breakthrough research and technology transfer",
                color: "var(--color-brand-blue)",
                features: [
                  "Joint R&D Projects",
                  "Technology Licensing",
                  "Startup Incubation",
                ],
              },
              {
                icon: FaGlobe,
                title: "Global Research Network",
                description:
                  "International collaborations and knowledge exchange",
                color: "var(--color-brand-orange)",
                features: [
                  "Research Exchange",
                  "Joint Publications",
                  "Global Conferences",
                ],
              },
              {
                icon: HiAcademicCap,
                title: "Student Innovation",
                description:
                  "Next-generation researchers and breakthrough projects",
                color: "var(--color-brand-blue)",
                features: [
                  "PhD Programs",
                  "Research Fellowships",
                  "Innovation Challenges",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <StaticIcon
                  icon={item.icon}
                  color={item.color}
                />
                <h3 className="font-bold text-gray-900 mb-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-xs text-gray-500 flex items-center justify-center gap-2"
                    >
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 relative z-10">
            <button
              className="inline-flex items-center gap-3 px-10 py-4 text-white rounded-xl font-semibold shadow-xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)",
              }}
            >
              <FaExternalLinkAlt />
              <span>Join Innovation Network</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
