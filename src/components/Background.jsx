import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const moveX = useTransform(springX, [-500, 500], [-15, 15]);
  const moveY = useTransform(springY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-white/90 backdrop-blur-3xl"
        style={{ x: moveX, y: moveY }}
      />

      {/* Animated shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-70 animate-blob"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["50%", "30%", "50%"],
        }}
        style={{ x: moveX, y: moveY }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["30%", "50%", "30%"],
        }}
        style={{ x: moveX, y: moveY }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["40%", "50%", "40%"],
        }}
        style={{ x: moveX, y: moveY }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"
        style={{ x: moveX, y: moveY }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise" />
    </div>
  );
};

export default Background;
