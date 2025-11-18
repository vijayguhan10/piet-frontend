import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Set video ready after initial load timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 2000); // 2 seconds timeout for initial load

    return () => clearTimeout(timer);
  }, []);

  // Video carousel data with YouTube embed URLs (High Quality)
  const videoSlides = [
    {
      id: 1,
      videoUrl:
        "https://www.youtube.com/embed/AXsJMQ4uaJE?autoplay=1&mute=1&loop=1&playlist=AXsJMQ4uaJE&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&vq=hd1080",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 30000); // Change slide every 30 seconds

    return () => clearInterval(timer);
  }, [isPlaying, videoSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + videoSlides.length) % videoSlides.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black max-w-screen">
      {/* Video Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* YouTube Video Embed */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={videoSlides[currentSlide].videoUrl}
            title="PIE Tech Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>
      </AnimatePresence>

      {/* Side Progress Indicators */}
      <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2 z-20 flex-col gap-4">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to video ${index + 1}`}
          >
            <div
              className={`w-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "h-16 bg-orange-500"
                  : "h-8 bg-white/30 hover:bg-white/50"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Top Corner Branding */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-20 sm:top-24 right-2 sm:right-4 xl:right-8 z-20 hidden sm:block"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-2 sm:px-6 sm:py-4 border border-white/20 shadow-2xl">
          <div className="text-white text-right">
            <div className="text-xs sm:text-sm opacity-80 mb-1">
              Established
            </div>
            <div className="text-xl sm:text-3xl font-bold">2012</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="text-white text-sm font-medium tracking-wider rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL DOWN
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-16 bg-white/50"
          ></motion.div>
        </div>
      </motion.div>

      {/* Mobile Progress Indicators */}
      <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to video ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Loading State */}
      {!isVideoReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
            ></motion.div>
            <p className="text-white text-lg font-medium">
              Preparing Experience...
            </p>
            <p className="text-white/60 text-sm mt-2">
              Loading PIE Tech Innovation
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
