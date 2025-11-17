import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

const Onboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Video carousel data with YouTube embed URLs (High Quality)
  const videoSlides = [
   {
      id: 3,
      videoUrl:
        "https://www.youtube.com/embed/1LmBS0eeRv0?autoplay=1&mute=1&loop=1&playlist=1LmBS0eeRv0&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080",
    },
    {
      id: 2,
      videoUrl:
        "https://www.youtube.com/embed/1u37AU9Ycrc?autoplay=1&mute=1&loop=1&playlist=1u37AU9Ycrc&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080",
    },
    {
      id: 3,
      videoUrl:
        "https://www.youtube.com/embed/1LmBS0eeRv0?autoplay=1&mute=1&loop=1&playlist=1LmBS0eeRv0&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 100000); // Change slide every 100 seconds

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
    <div className="relative w-full h-screen overflow-hidden bg-black">
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
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsVideoReady(true)}
          ></iframe>
        </motion.div>
      </AnimatePresence>

      {/* Side Progress Indicators */}
      <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex-col gap-4">
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
        className="absolute top-24 right-8 z-20 hidden xl:block"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
          <div className="text-white text-right">
            <div className="text-sm opacity-80 mb-1">Established</div>
            <div className="text-3xl font-bold">2012</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 z-20 hidden md:block"
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

      {/* Loading State */}
      {!isVideoReady && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
            ></motion.div>
            <p className="text-white text-lg font-medium">
              Loading Experience...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboard;
