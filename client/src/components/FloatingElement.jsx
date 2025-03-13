import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FloatingElement = ({ children, delay = 0 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      });
    };

    startAnimation();

    return () => controls.stop();
  }, [delay, controls]); // ✅ Added `delay` to dependencies

  return (
    <motion.div animate={controls} whileHover={{ scale: 1 }}>
      {children}
    </motion.div>
  );
};

export default FloatingElement;
