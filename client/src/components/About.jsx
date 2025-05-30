import { motion } from 'framer-motion';
import { Text, Center } from '@mantine/core';

const About = ({ itemVariants }) => (
  <Center>
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      style={{
        position: 'relative',
        borderRadius: '15px',
        padding: '2rem',
        background: 'rgba(0,145,255,0.05)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxWidth: '800px',
        overflow: 'hidden'
      }}
    >
      <motion.div
        animate={{
          background: [
            'linear-gradient(0deg, transparent 0%, rgba(0,145,255,0.1) 100%)',
            'linear-gradient(180deg, transparent 0%, rgba(0,145,255,0.1) 100%)',
            'linear-gradient(360deg, transparent 0%, rgba(0,145,255,0.1) 100%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Text size="lg" mb={20} style={{ textAlign: 'center', position: 'relative' }}>
        Passionate about creating beautiful, interactive applications with modern technologies.
        While experienced in both frontend and backend development, I specialize in frontend with a focus on building responsive and user-friendly experiences.
      </Text>
    </motion.div>
  </Center>
);

export default About; 