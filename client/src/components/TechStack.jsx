import { motion } from 'framer-motion';
import { Tooltip, Box, Center, Group, ThemeIcon } from '@mantine/core';
import { IconBrandReact, IconBrandPython, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandSwift } from '@tabler/icons-react';
import FloatingElement from './FloatingElement';

const TechStack = ({ itemVariants }) => {
  const technologies = [
    { icon: IconBrandHtml5, label: 'HTML5', delay: 0 },
    { icon: IconBrandCss3, label: 'CSS3', delay: 0.1 },
    { icon: IconBrandJavascript, label: 'JavaScript', delay: 0.2 },
    { icon: IconBrandReact, label: 'React', delay: 0.3 },
    { icon: IconBrandPython, label: 'Python', delay: 0.4 },
    { icon: IconBrandSwift, label: 'Swift', delay: 0.5 },
  ];

  return (
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: '100%',
        margin: '2rem 0',
      }}
    >
      <Center style={{ width: '100%' }}>
        <Box 
          style={{
            position: 'relative',
            padding: '2rem',
            borderRadius: '15px',
            background: 'rgba(0,145,255,0.05)',
            backdropFilter: 'blur(10px)',
            width: '100%',
            maxWidth: '800px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Group 
            gap={{ base: 30, sm: 40, md: 50 }}
            position="center" 
            style={{ 
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '1rem'
            }}
          >
            {technologies.map((tech) => (
              <Tooltip key={tech.label} label={tech.label}>
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0], 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'inline-block' }} // Prevents layout shifting
                >
                  <FloatingElement delay={tech.delay}>
                    <ThemeIcon
                      size="5rem"
                      variant="light"
                      sx={(theme) => ({
                        width: theme.fn.size({ base: 100, sm: 60, md: 70 }),
                        height: theme.fn.size({ base: 'auto' }),
                        boxShadow: '0 0 20px rgba(0,145,255,0.3)',
                        background: 'rgba(72, 82, 90, 0.1)',
                        backdropFilter: 'blur(5px)',
                      })}
                    >
                      <tech.icon
                        size="4rem"
                        style={{ color: '#0091FF' }}
                      />
                    </ThemeIcon>
                  </FloatingElement>
                </motion.div>
              </Tooltip>
            ))}
          </Group>
        </Box>
      </Center>
    </motion.div>
  );
};

export default TechStack;
