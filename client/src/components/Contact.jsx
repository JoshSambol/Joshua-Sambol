import { motion } from 'framer-motion';
import { Text, Center, Box, Group, Title, Anchor, TextInput, Textarea, Button, Stack } from '@mantine/core';
import { IconBrandGithub, IconBrandInstagram, IconBrandSnapchat, IconMail } from '@tabler/icons-react';

const Contact = ({ itemVariants }) => {
  const socialLinks = [
    { icon: IconBrandGithub, label: 'GitHub', link: 'https://github.com/joshsambol', username: '@joshsambol' },
    { icon: IconBrandInstagram, label: 'Instagram', link: 'https://instagram.com/josh.sambol', username: '@josh.sambol' },
    { icon: IconBrandSnapchat, label: 'Snapchat', link: 'https://snapchat.com/add/joshsambol', username: '@joshsambol' },
    { icon: IconMail, label: 'Email', link: 'mailto:Joshuasambol@pennington.org', username: 'Joshuasambol@pennington.org' },
  ];

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
            Contact Me
          </Title>

          {/* Social Links */}
          <Group justify="center" mb={40} gap="xl">
            {socialLinks.map((social) => (
              <Anchor 
                key={social.label} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Stack align="center" gap={5}>
                    <social.icon 
                      size={32} 
                      style={{ color: '#0091FF' }} 
                    />
                    <Text 
                      size="sm" 
                      c="dimmed"
                      display={{ base: 'none', sm: 'block' }}
                    >
                      {social.username}
                    </Text>
                  </Stack>
                </motion.div>
              </Anchor>
            ))}
          </Group>

          {/* Contact Form */}
          <form 
            name="website-inquiry" 
            method="POST" 
            data-netlify="true"
            action="/success"
            style={{ maxWidth: '600px', margin: '0 auto' }}
            netlify
          >
            <input type="hidden" name="form-name" value="website-inquiry" />
            
            <Stack gap="md">
              <TextInput
                required
                label="Name"
                name="name"
                placeholder="Your name"
                styles={{
                  input: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0,145,255,0.2)',
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  label: {
                    color: 'white',
                  },
                }}
              />
              
              <TextInput
                required
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
                styles={{
                  input: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0,145,255,0.2)',
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  label: {
                    color: 'white',
                  },
                }}
              />

              <TextInput
                required
                label="Website Purpose"
                name="purpose"
                placeholder="What is the main purpose of your website?"
                styles={{
                  input: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0,145,255,0.2)',
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  label: {
                    color: 'white',
                  },
                }}
              />

              <Textarea
                required
                label="Website Description"
                name="description"
                placeholder="Please describe your website in detail. Include features you'd like, target audience, and any specific requirements."
                minRows={4}
                styles={{
                  input: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0,145,255,0.2)',
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  label: {
                    color: 'white',
                  },
                }}
              />

              <Button 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #0091FF, #0073CC)',
                  marginTop: '1rem',
                }}
              >
                Send Inquiry
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </motion.div>
  );
};

export default Contact; 