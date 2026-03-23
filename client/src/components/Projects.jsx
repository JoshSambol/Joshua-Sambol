import { motion } from 'framer-motion';
import { Box, Title, Grid, Card, Group, Text, Badge, Container, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconAward, IconRocket, IconBrandGithub, IconWorld, IconBrandApple } from '@tabler/icons-react';
import FloatingElement from './FloatingElement';

const Projects = ({ itemVariants }) => {
  const featuredProject = {
    title: "PantryLink",
    description: "A full-stack iOS application designed to help food banks distribute food efficiently and reduce waste, while providing essential resources to those facing food insecurity. Developed as part of the Coder School Pro Team initiative. Expected to be available on the App Store before January 1st.",
    technologies: ["SwiftUI", "iOS", "Full Stack", "React", "MongoDB", "Python", "Flask", "BCrypt"],
    link: "https://github.com/posaune14/yellow_team",
    links: [
      { label: "GitHub", url: "https://github.com/posaune14/yellow_team" },
      { label: "Website", url: "https://pantrylink.joshuasambol.com" },
      { label: "App Store", url: "https://apps.apple.com/us/app/pantrylink/id6754800608" }
    ],
    featured: true,
    status: "Production Phase",
    date: "October 2025",
    challenge: "Winner of Congressional App Challenge 2025",
    showOnMobile: true
  };

  const projects = [
    {
      title: "PawsRx",
      status: "Production Phase",
      description: "A feature-rich iOS application designed to help pet owners manage their pets' health and wellness. Expected to be available on the App Store before January 1st.",
      technologies: ["React", "JavaScript", "Node.js", "Python"],
      link: "https://pawsrx.joshuasambol.com",
      date: "Nov 2025",
      showOnMobile: true
    },
    {
      title: "WingFlow",
      status: "Development Phase",
      description: "An interactive iOS playground that helps users understand how air flows over different wing shapes and configurations. The app includes lift and drag gauges, plus an AR mode to help visualize aerodynamics for education.",
      challenge: "Swift Student Challenge 2026",
      technologies: ["Swift", "SwiftUI", "Swift Playgrounds", "Augmented Reality"],
      date: "Dec 2025",
      showOnMobile: true
    },
    {
      title: "Support Jewish Uganda",
      description: "A website created for a non-profit organization to help them raise money for their cause.",
      technologies: ["React", "JavaScript", "Mantine", "Framer Motion"],
      link: "https://sju.joshuasambol.com/",
      date: "Sep 2025",
      showOnMobile: true
    },
    {
      title: "The Coder Fair",
      description: "A full-stack React-based web application created to help organize and manage events for theCoderSchool(Montgomery, NJ)",
      technologies: ["React", "JavaScript", "Node.js", "Python"],
      link: "https://coderfair.com",
      date: "May 2025",
      showOnMobile: true
    },
    {
      title: "OpenBoard",
      description: "A full stack React+Node.js application that lets you chat on a message board.",
      technologies: ["React", "Node.js", "JavaScript", "Express", "MongoDB"],
      link: "https://openboard.joshuasambol.com/",
      date: "Mar 2025",
      showOnMobile: true
    },
    {
      title: "Sunny Dayz", 
      description: "A web application that utilizes an API to fetch weather data for a specific location and display it to the user",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://sunnydayz.joshuasambol.com",
      date: "Apr 2023",
      showOnMobile: false
    },
    {
      title: "Select 100 Lacrosse",
      description: "A website created for a local lacrosse coach to help them manage their clients and events.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://select100lax.netlify.app/",
      date: "Apr 2025",
      showOnMobile: true
    },
    {
      title: "Jeopardy",
      description: "A React-based clone of the popular game show Jeopardy",
      technologies: ["React", "JavaScript"],
      link: "https://jeopardy.joshuasambol.com/",
      date: "Apr 2024",
      showOnMobile: false
    },
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
            position: 'relative',
            paddingBottom: isFeatured ? '4rem' : '2.5rem',
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
                  {project.status && (
                    <Badge
                      leftSection={<IconRocket size={14} />}
                      variant="light"
                      size={isFeatured ? "md" : "sm"}
                      style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        color: '#22C55E',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                      }}
                    >
                      {project.status}
                    </Badge>
                  )}
                </Group>
                {project.challenge && (
                  <Badge
                    leftSection={<IconAward size={14} />}
                    variant="light"
                    size={isFeatured ? "md" : "sm"}
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
              {isFeatured && project.links && project.links.length > 0 ? (
                <Group gap={8} wrap="nowrap" align="center">
                  {project.links.map((l) => {
                    const icon = l.label === 'GitHub'
                      ? <IconBrandGithub size={14} />
                      : l.label === 'Website'
                        ? <IconWorld size={14} />
                        : l.label === 'TestFlight'
                          ? <IconBrandApple size={14} />
                          : <IconExternalLink size={14} />;
                    return (
                      <Badge
                        key={l.url}
                        component="a"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftSection={icon}
                        variant="light"
                        size="md"
                        style={{
                          background: 'rgba(0,145,255,0.1)',
                          color: '#0091FF',
                          border: '1px solid rgba(0,145,255,0.2)'
                        }}
                      >
                        {l.label}
                      </Badge>
                    );
                  })}
                </Group>
              ) : (
                <Group gap={8} wrap="nowrap" align="center">
                  {project.link && (
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
                  )}
                </Group>
              )}
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
          {project.date && (
            <Text
              size={isFeatured ? "sm" : "xs"}
              c="dimmed"
              style={{
                position: 'absolute',
                right: isFeatured ? 16 : 12,
                bottom: isFeatured ? 16 : 12,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                userSelect: 'none',
                opacity: 0.8
              }}
            >
              {project.date}
            </Text>
          )}
        </Card>
      </motion.div>
    </FloatingElement>
  );

  const isMobile = useMediaQuery('(max-width: 48em)');
  const filteredProjects = projects.filter((project) => !isMobile || project.showOnMobile !== false);
  const hiddenOnMobileCount = isMobile 
    ? (projects.length - filteredProjects.length) + (featuredProject.showOnMobile ? 0 : 1)
    : 0;

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
        {(!isMobile || featuredProject.showOnMobile) && (
          <Container size="lg" mb={40}>
            <ProjectCard project={featuredProject} isFeatured={true} />
          </Container>
        )}

        {/* Other Projects */}
        <Grid>
          {filteredProjects.map((project) => (
            <Grid.Col key={project.title} span={{ base: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} isFeatured={false} />
            </Grid.Col>
          ))}
        </Grid>

        {isMobile && hiddenOnMobileCount > 0 && (
          <Text ta="center" c="dimmed" mt="md" size="sm">
            More projects are available on larger screens.
          </Text>
        )}
      </Box>
    </motion.div>
  );
};

export default Projects; 