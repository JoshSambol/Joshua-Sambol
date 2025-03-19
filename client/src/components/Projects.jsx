import { motion } from 'framer-motion';
import { Box, Title, Grid, Card, Group, Text, Badge } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import FloatingElement from './FloatingElement';

const Projects = ({ itemVariants }) => {
  const projects = [
    {
      title: "The Coder Fair",
      description: "A full-stack React-based web application created to help organize and manage events for theCoderSchool(Montgomery, NJ)",
      technologies: ["React", "JavaScript", "Node.js", "Python"],
      link: "https://coderfair.com"
    },
    {
      title: "Sunny Dayz", 
      description: "A web aplication that utilizes an API to fetch weather data for a specific location and display it to the user",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://replace-this-with-the-actual-link.com"
    },
    {
      title: "Select 100 Lacrosse",
      description: "A website created for a local lacrosse coach to help them manage their clients and events.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://select100lax.netlify.app/"
    },
    {
      title: "Jeopardy",
      description: "A React-based clone of the popular game show Jeopardy",
      technologies: ["React", "Node.js", "JavaScript"],
      link: "https://jeopardy-game-react.netlify.app/"
    },
    {
      title: "OpenBoard",
      description: "A full stack React+Node.js application that lets you chat on a message board.",
      technologies: ["React", "Node.js", "JavaScript", "Express", "MongoDB"],
      link: "https://openboard.joshuasambol.com/"
    }
  ];

  return (
    <motion.div
      variants={itemVariants}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Box mt={50}>
        <Title 
          order={2} 
          mb={30} 
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #fff, #0091FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Projects
        </Title>
        <Grid>
          {projects.map((project, index) => (
            <Grid.Col key={project.title} span={{ base: 12, sm: 6, md: 4 }}>
              <FloatingElement delay={index * 0.1}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    // rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card
                    shadow="sm"
                    padding="lg"
                    style={{
                      background: 'rgba(0,145,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0,145,255,0.1)',
                      height: '100%'
                    }}
                  >
                    <Group justify="space-between" mb="xs">
                      <Text 
                        size="lg"
                        style={{
                          background: 'linear-gradient(135deg, #fff, #0091FF)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {project.title}
                      </Text>
                      <motion.div
                        whileHover={{ scale:1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a href={project.link}><IconExternalLink style={{ color: '#0091FF' }}/></a>
                        
                      </motion.div>
                    </Group>
                    <Text size="sm" mb="md" c="dimmed">
                      {project.description}
                    </Text>
                    <Group gap={5}>
                      {project.technologies.map(tech => (
                        <Badge 
                          key={tech}
                          variant="light"
                          style={{
                            background: 'rgba(0,145,255,0.1)',
                            color: '#0091FF'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Card>
                </motion.div>
              </FloatingElement>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects; 