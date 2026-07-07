import { motion } from 'framer-motion';
import Button from './Button';
import Sparkle from './Sparkle';

// Big friendly "let's work together" banner. Reused across pages.
const CTA = ({
  title = "Have an idea? Let's build it.",
  subtitle = 'Whether it’s a fresh website, a web app, or an iOS app, I’d love to hear about your project.',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      background: 'linear-gradient(130deg, var(--lavender) 0%, var(--coral) 100%)',
      padding: 'clamp(36px, 6vw, 64px)',
      textAlign: 'center',
    }}
  >
    <Sparkle size={28} color="#fff" twinkle style={{ position: 'absolute', top: 24, left: '12%' }} />
    <Sparkle size={20} color="#fff" twinkle delay={1} style={{ position: 'absolute', bottom: 30, right: '14%' }} />
    <Sparkle size={16} color="#fff" twinkle delay={0.5} style={{ position: 'absolute', top: '40%', right: '8%' }} />

    <h2 className="h-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--ink)', marginBottom: 14 }}>
      {title}
    </h2>
    <p
      style={{
        color: 'var(--ink)',
        opacity: 0.85,
        fontSize: '1.12rem',
        lineHeight: 1.6,
        maxWidth: 560,
        margin: '0 auto 28px',
      }}
    >
      {subtitle}
    </p>
    <Button to="/contact" variant="solid" style={{ fontSize: '1.1rem', padding: '15px 32px' }}>
      Start a project →
    </Button>
  </motion.div>
);

export default CTA;
