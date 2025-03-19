import { motion } from 'framer-motion';
import { Text, Center } from '@mantine/core';

const SubHeader = ({ itemVariants }) => (
  <Center>
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Text 
        size="xl" 
        mb={50} 
        style={{ 
          textShadow: '0 0 20px rgba(0,145,255,0.5)',
          textAlign: 'center',
          letterSpacing: '0.1em'
        }}
      >
        Full-Stack Developer
      </Text>
    </motion.div>
  </Center>
);

export default SubHeader; 