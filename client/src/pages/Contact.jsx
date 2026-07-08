import { TextInput, Textarea } from '@mantine/core';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import Sparkle from '../components/Sparkle';
import Seo from '../components/Seo';
import { socialLinks, identity } from '../data/site';

const Contact = () => (
  <Section pad="clamp(48px, 8vw, 90px)" style={{ paddingTop: 'clamp(32px, 6vw, 60px)' }}>
    <Seo
      title="Contact | Hire a Web Developer in New Jersey, Joshua Sambol"
      description="Get in touch to start a web design, web development, or iOS app project with Joshua Sambol, a freelance developer based in Princeton, NJ."
      path="/contact"
    />
    <div style={{ textAlign: 'center', position: 'relative', marginBottom: 48 }}>
      <Sparkle size={26} color="#fff" twinkle style={{ position: 'absolute', top: -6, left: '26%' }} />
      <div
        style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 600,
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          marginBottom: 12,
        }}
      >
        Say hello
      </div>
      <h1 className="h-display" style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)' }}>
        Start a <span className="accent-word">project</span>.
      </h1>
      <p className="text-soft" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 560, margin: '20px auto 0' }}>
        Tell me a little about what you have in mind and I&apos;ll get back to you soon. No idea too big or too small.
      </p>
    </div>

    <div className="contact-grid">
      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--card)',
          borderRadius: 'var(--r-lg)',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <form name="website-inquiry" method="POST" data-netlify="true" action="/success.html">
          <input type="hidden" name="form-name" value="website-inquiry" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <TextInput required label="Your name" name="name" placeholder="Jane Doe" size="md" />
            <TextInput required type="email" label="Email" name="email" placeholder="jane@email.com" size="md" />
            <TextInput
              required
              label="What do you need?"
              name="purpose"
              placeholder="e.g. a website for my bakery"
              size="md"
            />
            <Textarea
              required
              label="Tell me more"
              name="description"
              placeholder="What are you hoping to build? Features you'd love, who it's for, timeline, budget, anything helps."
              minRows={5}
              autosize
              size="md"
            />
            <Button type="submit" style={{ width: '100%', marginTop: 4 }}>
              Send it my way 
            </Button>
          </div>
        </form>
      </motion.div>

      {/* SIDE: direct contact + socials */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <div
          style={{
            background: 'linear-gradient(140deg, var(--mint) 0%, var(--sky) 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '28px 26px',
          }}
        >
          <h2 className="h-section" style={{ fontSize: '1.4rem', marginBottom: 8 }}>
            Prefer email?
          </h2>
          <p style={{ color: 'var(--ink)', opacity: 0.8, margin: '0 0 16px', lineHeight: 1.55 }}>
            Reach me directly and I&apos;ll reply as soon as I can.
          </p>
          <Button href={`mailto:${identity.email}`} variant="outline" style={{ background: '#fff' }}>
            {identity.email}
          </Button>
        </div>

        <div
          style={{
            background: 'var(--card)',
            borderRadius: 'var(--r-lg)',
            padding: '26px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h2 className="h-section" style={{ fontSize: '1.2rem', marginBottom: 16 }}>
            Find me around
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 12px',
                    borderRadius: 'var(--r-sm)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      background: 'var(--bg-mid)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {s.label}
                    </span>
                    <span className="text-soft" style={{ fontSize: '0.82rem' }}>
                      {s.username}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
);

export default Contact;
