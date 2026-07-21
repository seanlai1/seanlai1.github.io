import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { AnimatedText } from "./animated-shiny-text";
import { LiquidMetalButton } from "./liquid-metal-button";

export const Hero = () => {
  const navigate = () => {
    const base = import.meta.env.BASE_URL || "/";
    window.location.assign(`${base}portfolio/index.html`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated mesh gradient background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#111111", "#222222", "#ffffff"]}
        speed={0.8}
        backgroundColor="#000000"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Name — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] } }}
        >
          <AnimatedText
            text="Sean Lai"
            gradientColors="linear-gradient(90deg, #555, #ffffff, #aaaaaa, #ffffff, #555)"
            gradientAnimationDuration={3}
            hoverEffect={true}
            textClassName="text-6xl md:text-8xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
        </motion.div>
      </div>

      {/* Button — pinned to bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="absolute bottom-32 left-0 right-0 z-10 flex justify-center"
      >
        <LiquidMetalButton label="Enter Website" onClick={navigate} />
      </motion.div>
    </div>
  );
};
