import { motion } from 'framer-motion';
import { Text, Center, Box, Title, Stack, Badge, Grid, Card, Image } from '@mantine/core';
import { IconTrophy, IconAward, IconMedal } from '@tabler/icons-react';

const Achievements = ({ itemVariants }) => {
  const achievements = [
    {
      icon: IconTrophy,
      title: "Coder School Montgomery's Coder Pro Team",
      year: "2024",
      description: "Selected as a member of the elite Coder Pro Team",
      color: "#FFD700" // Gold
    },
    {
      icon: IconTrophy,
      title: "Coder School Montgomery's Coder Pro Team",
      year: "2025",
      description: "Selected as a member of the elite Coder Pro Team",
      color: "#FFD700" // Gold
    },
    {
      icon: IconAward,
      title: "Coder School National App of the Month",
      year: "2023",
      description: "Recognized for outstanding application development",
      color: "#C0C0C0" // Silver
    },
    {
      icon: IconMedal,
      title: "Coder School Montgomery's App of the Season",
      year: "2023",
      description: "Awarded for exceptional seasonal project",
      color: "#CD7F32" // Bronze
    }
  ];
  // Import all PNG images from the assets folder eagerly (excludes text.svg)
  // Use import:'default' so values are direct URL strings
  const imageModules = import.meta.glob('../assets/*.png', { eager: true, import: 'default' });
  const images = Object.values(imageModules);

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
                  style={{
                    padding: '1.5rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0,145,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <achievement.icon 
                    size={40} 
                    style={{ 
                      color: achievement.color,
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
          <Box style={{ marginTop: '2rem' }}>
            <Grid gutter="md">
              {images.map((src) => (
                <Grid.Col key={src} span={{ base: 12, sm: 6 }}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card
                      padding="xs"
                      radius="md"
                      shadow="sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(0,145,255,0.15)',
                        overflow: 'hidden'
                      }}
                    >
                      <Image
                        src={src}
                        alt="Achievement"
                        radius="sm"
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
              {images.length === 0 && (
                <Grid.Col span={12}>
                  <Text c="dimmed" ta="center" size="sm">
                    No images found in assets.
                  </Text>
                </Grid.Col>
              )}
            </Grid>
          </Box>
        </Box>
      </Center>
    </motion.div>
  );
};

export default Achievements; 