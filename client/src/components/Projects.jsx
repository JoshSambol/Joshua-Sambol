import { motion } from 'framer-motion';
import { Box, Title, Grid, Card, Group, Text, Badge, Container, Stack } from '@mantine/core';
import { IconExternalLink, IconCode, IconAward } from '@tabler/icons-react';
import FloatingElement from './FloatingElement';

const Projects = ({ itemVariants }) => {
  const featuredProject = {
    title: "PantryLink",
    description: "A full-stack iOS application designed to help food banks distribute food efficiently and reduce waste, while providing essential resources to those facing food insecurity. Developed as part of the Coder School Pro Team initiative and being submitted for the Congressional App Challenge.",
    technologies: ["Swift", "iOS", "Full Stack", "Backend", "Frontend"],
    link: "https://github.com/posaune14/yellow_team",
    featured: true,
    status: "In Development",
    challenge: "Congressional App Challenge 2024"
  };

  const projects = [
    {
      title: "The Coder Fair",
      description: "A full-stack React-based web application created to help organize and manage events for theCoderSchool(Montgomery, NJ)",
      technologies: ["React", "JavaScript", "Node.js", "Python"],
      link: "https://coderfair.com"
    },
    {
      title: "Sunny Dayz", 
      description: "A web application that utilizes an API to fetch weather data for a specific location and display it to the user",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://sunnydayz.joshuasambol.com"
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
      link: "https://jeopardy.joshuasambol.com/"
    },
    {
      title: "OpenBoard",
      description: "A full stack React+Node.js application that lets you chat on a message board.",
      technologies: ["React", "Node.js", "JavaScript", "Express", "MongoDB"],
      link: "https://openboard.joshuasambol.com/"
    }
  ];

  const ProjectCard = ({ project, isFeatured }) => (
    <FloatingElement delay={isFeatured ? 0 : 0.1}>
      <motion.div
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <Card
          shadow="sm"
          padding="lg"
          style={{
            background: isFeatured 
              ? 'linear-gradient(135deg, rgba(0,145,255,0.08), rgba(0,145,255,0.03))'
              : 'rgba(0,145,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: isFeatured 
              ? '1px solid rgba(0,145,255,0.2)'
              : '1px solid rgba(0,145,255,0.1)',
            height: '100%',
            ...(isFeatured && {
              maxWidth: '900px',
              margin: '0 auto 2rem auto',
              padding: '2.5rem',
              boxShadow: '0 0 30px rgba(0,145,255,0.1)',
            })
          }}
        >
          <Stack gap="md">
            <Group justify="space-between" align="flex-start">
              <div>
                <Group gap="xs" mb={5}>
                  <Text 
                    size={isFeatured ? "xl" : "lg"}
                    fw={isFeatured ? 600 : 500}
                    style={{
                      background: 'linear-gradient(135deg, #fff, #0091FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {project.title}
                  </Text>
                  {isFeatured && project.status && (
                    <Badge
                      leftSection={<IconCode size={14} />}
                      variant="light"
                      size="md"
                      style={{
                        background: 'rgba(255, 193, 7, 0.1)',
                        color: '#FFC107',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                      }}
                    >
                      {project.status}
                    </Badge>
                  )}
                </Group>
                {isFeatured && project.challenge && (
                  <Badge
                    leftSection={<IconAward size={14} />}
                    variant="light"
                    size="md"
                    style={{
                      background: 'rgba(0,145,255,0.1)',
                      color: '#0091FF',
                      border: '1px solid rgba(0,145,255,0.2)',
                    }}
                  >
                    {project.challenge}
                  </Badge>
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <IconExternalLink style={{ color: '#0091FF' }}/>
                </a>
              </motion.div>
            </Group>

            <Text 
              size={isFeatured ? "md" : "sm"} 
              mb="md" 
              c="dimmed"
              style={isFeatured ? { 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              } : {}}
            >
              {project.description}
            </Text>

            <Group gap={5}>
              {project.technologies.map(tech => (
                <Badge 
                  key={tech}
                  variant="light"
                  size={isFeatured ? "md" : "sm"}
                  style={{
                    background: 'rgba(0,145,255,0.1)',
                    color: '#0091FF',
                    ...(isFeatured && {
                      padding: '8px 12px',
                      fontSize: '0.9rem',
                    })
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Card>
      </motion.div>
    </FloatingElement>
  );

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

        {/* Featured Project */}
        <Container size="lg" mb={40}>
          <ProjectCard project={featuredProject} isFeatured={true} />
        </Container>

        {/* Other Projects */}
        <Grid>
          {projects.map((project, index) => (
            <Grid.Col key={project.title} span={{ base: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} isFeatured={false} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects; 