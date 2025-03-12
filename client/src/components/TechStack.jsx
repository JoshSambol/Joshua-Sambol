import { motion } from 'framer-motion';
import { Box, Center, Group, ThemeIcon } from '@mantine/core';
import { IconBrandReact, IconBrandPython, IconBrandHtml5, IconBrandCss3, IconBrandJavascript } from '@tabler/icons-react';
import FloatingElement from './FloatingElement';

const TechStack = ({ itemVariants }) => {
  // Array of technology icons with their labels and animation delays
  const technologies = [
    { icon: IconBrandHtml5, label: 'HTML5', delay: 0 },
    { icon: IconBrandCss3, label: 'CSS3', delay: 0.1 },
    { icon: IconBrandJavascript, label: 'JavaScript', delay: 0.2 },
    { icon: IconBrandReact, label: 'React', delay: 0.3 },
    { icon: IconBrandPython, label: 'Python', delay: 0.4 },
  ];

  return (
    // Main container with fade-in animation
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: '100%',
        margin: '2rem 0'  // Spacing above and below the tech stack
      }}
    >
      {/* Center wrapper for the entire section */}
      <Center style={{ width: '100%' }}>
        {/* Glass-effect container box */}
        <Box 
          style={{
            position: 'relative',
            padding: '2rem',  // Internal spacing
            borderRadius: '15px',
            background: 'rgba(0,145,255,0.05)',  // Light blue transparent background
            backdropFilter: 'blur(10px)',  // Glass effect
            width: '100%',
            maxWidth: '800px',  // Maximum width on large screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Group container for the tech icons */}
          <Group 
            // Spacing between icons at different breakpoints
            gap={{ base: 30, sm: 40, md: 50 }}
            position="center" 
            style={{ 
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',  // Allows icons to wrap on smaller screens
              padding: '1rem'
            }}
          >
            {/* Map through each technology to create icons */}
            {technologies.map((tech) => (
              // Hover animation wrapper
              <motion.div
                key={tech.label}
                whileHover={{ 
                  scale: 1.2,  // Grow on hover
                  rotate: [0, -10, 10, 0],  // Wiggle effect
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Floating animation wrapper */}
                <FloatingElement delay={tech.delay}>
                  {/* Icon container with glass effect */}
                  <ThemeIcon 
                    // Icon sizes at different breakpoints:
                    // xl (extra large screens): 250px
                    // lg (large screens): 200px
                    // md (medium screens): 150px
                    // sm (small screens): 200px
                    size={{ xl: 250, lg: 200, sm: 200, md: 150}}
                    variant="light"
                    style={{ 
                      boxShadow: '0 0 30px rgba(0,145,255,0.3)',  // Glowing effect
                      background: 'rgba(0,145,255,0.1)',  // Light blue background
                      backdropFilter: 'blur(5px)'  // Glass effect
                    }}
                  >
                    {/* The actual tech icon:
                        base (mobile): 40px
                        sm (small screens): 100px
                        md (medium screens): 60px */}
                    <tech.icon size={{ base: 40, sm: 20, md: 60 }} style={{ color: '#0091FF' }} />
                  </ThemeIcon>
                </FloatingElement>
              </motion.div>
            ))}
          </Group>
        </Box>
      </Center>
    </motion.div>
  );
};

export default TechStack; 