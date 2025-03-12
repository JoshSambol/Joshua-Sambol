import { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const FloatingElement = ({ children, delay = 0 }) => {
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  useEffect(() => {
    const yAnimation = animate(y, [0, -10, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    });

    const rotateAnimation = animate(rotate, [-1, 1, -1], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    });

    return () => {
      yAnimation.stop();
      rotateAnimation.stop();
    };
  }, []);

    return (
        <motion.div style={{ y, rotate }}>
            {children}
        </motion.div>
    );
};

export default FloatingElement; 