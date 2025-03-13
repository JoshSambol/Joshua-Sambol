import { useState } from 'react'
import './App.css'
import { Container, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import components
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';

const theme = createTheme({
  colors: {
    brand: [
      '#E5F4FF',
      '#CCE9FF',
      '#99D3FF',
      '#66BDFF',
      '#33A7FF',
      '#0091FF', // Primary
      '#0073CC',
      '#005699',
      '#003A66',
      '#001D33',
    ],
  },
  primaryColor: 'brand',
});

function App() {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.3,
        when: "beforeChildren" 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <MantineProvider theme={theme}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ 
          background: 'linear-gradient(135deg, #000510, #001D33)',
          minHeight: '100vh',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            scale: scaleProgress
          }}
        >
          <Container size="lg" py={100} style={{ position: 'relative', zIndex: 1 }}>
            <Header itemVariants={itemVariants} />
            <SubHeader itemVariants={itemVariants} />
            <TechStack itemVariants={itemVariants} />
            <Box mt={50}>
              <About itemVariants={itemVariants} />
            </Box>
            <Projects itemVariants={itemVariants} />
          </Container>
        </motion.div>
        </motion.div>
    </MantineProvider>
  );
}

export default App;