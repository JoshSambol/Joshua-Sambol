import { motion } from 'framer-motion';
import { Text, Center, Box, Title, Stack, Badge } from '@mantine/core';
import usCongressLogo from '../assets/US Congress.svg';
import appleLogo from '../assets/Apple.png';
import acslLogo from '../assets/ACSL.png';
import coderSchoolLogo from '../assets/theCoderSchool.png';

const Achievements = ({ itemVariants }) => {
  const achievements = [
    {
      icon: appleLogo,
      title: "Swift Student Challenge Winner",
      year: "2026",
      description: "WingFlow was selected by Apple Inc. as a winner of the prestigious Swift Student Challenge. Invited to attend Apple's 2026 WWDC in Cupertino.",
      link: "https://developer.apple.com/swift-student-challenge/"
    },
    {
      icon: acslLogo,
      title: "American Computer Science League International Co-Champion",
      year: "2026",
      description: "Member of The Pennington School's ACSL team, which won international first place for the 4th year in a row.",
      link: "https://www.acsl.org/"
    },
    {
      icon: usCongressLogo,
      title: "Congressional App Challenge Winner",
      year: "2025",
      description: "PantryLink was selected by Rep. Bonnie Watson Coleman as the winning app for NJ-12. Attended House of Code in Washington, D.C. to present the app.",
      link: "https://www.congressionalappchallenge.us/"
    },
    {
      icon: coderSchoolLogo,
      title: "Coder School Montgomery's Coder Pro Team",
      year: "2025",
      description: "Selected as a member of the elite Coder Pro Team",
      link: "https://www.thecoderschool.com/"
    },
    {
      icon: coderSchoolLogo,
      title: "Coder School Montgomery's Coder Pro Team",
      year: "2024",
      description: "Selected as a member of the elite Coder Pro Team",
      link: "https://www.thecoderschool.com/"
    },
    {
      icon: coderSchoolLogo,
      title: "Coder School National App of the Month",
      year: "2023",
      description: "Recognized for outstanding application development",
      link: "https://www.thecoderschool.com/"
    },
    {
      icon: coderSchoolLogo,
      title: "Coder School Montgomery's App of the Season",
      year: "2023",
      description: "Awarded for exceptional seasonal project",
      link: "https://www.thecoderschool.com/"
    }
  ];
  // Image gallery removed

  return (
    <motion.div 
      variants={itemVariants}
      style={{
        width: '100%',
        margin: '4rem 0',
      }}
    >
      <Center>
        <Box 
          style={{
            position: 'relative',
            padding: '2rem',
            borderRadius: '15px',
            background: 'rgba(0,145,255,0.05)',
            backdropFilter: 'blur(10px)',
            width: '100%',
            maxWidth: '800px',
          }}
        >
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
            Achievements
          </Title>

          <Stack gap="xl">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Box
                  component="a"
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0,145,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={achievement.icon}
                    alt={achievement.title}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: 'contain',
                      borderRadius: '6px',
                      filter: 'drop-shadow(0 0 10px rgba(0,145,255,0.3))'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Text 
                      size="lg" 
                      fw={500}
                      style={{
                        background: 'linear-gradient(135deg, #fff, #0091FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {achievement.title}
                      {achievement.year && (
                        <Badge 
                          ml={10}
                          variant="light"
                          style={{
                            background: 'rgba(0,145,255,0.1)',
                            color: '#0091FF'
                          }}
                        >
                          {achievement.year}
                        </Badge>
                      )}
                    </Text>
                    <Text size="sm" c="dimmed" mt={5}>
                      {achievement.description}
                    </Text>
                  </div>
                </Box>
              </motion.div>
            ))}
          </Stack>
          {/* Image gallery removed */}
        </Box>
      </Center>
    </motion.div>
  );
};

export default Achievements; 