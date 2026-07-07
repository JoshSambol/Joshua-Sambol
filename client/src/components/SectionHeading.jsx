import { motion } from 'framer-motion';
import Sparkle from './Sparkle';

// Centered (or left) section heading with optional eyebrow + sparkle.
const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', sparkleColor = 'var(--butter-deep)' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0 }}
  >
    {eyebrow && (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-head)',
          fontWeight: 600,
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          marginBottom: 12,
        }}
      >
        <Sparkle size={16} color={sparkleColor} twinkle />
        {eyebrow}
      </div>
    )}
    <h2 className="h-section" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: subtitle ? 14 : 0 }}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-soft" style={{ fontSize: '1.12rem', lineHeight: 1.6, margin: 0 }}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
