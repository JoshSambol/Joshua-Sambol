import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Title, Center } from '@mantine/core';

const Header = ({ itemVariants }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - e.currentTarget.offsetWidth / 2);
    mouseY.set(clientY - top - e.currentTarget.offsetHeight / 2);
  };

  return (
    <Center>
      <motion.div 
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{
            rotateX: useTransform(mouseY, [-300, 300], [10, -10]),
            rotateY: useTransform(mouseX, [-300, 300], [-10, 10]),
          }}
        >
          <Title 
            order={1} 
            size="4rem"
            style={{ 
              textShadow: '0 0 30px rgba(0,145,255,0.5)',
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #fff, #0091FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Joshua Sambol
          </Title>
        </motion.div>
      </motion.div>
    </Center>
  );
};

export default Header; 