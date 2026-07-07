import { motion } from 'framer-motion';
import { IconQuote } from '@tabler/icons-react';
import { swatch } from '../lib/palette';

const TestimonialCard = ({ item }) => {
  const s = swatch(item.color || 'lavender');
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      style={{
        margin: 0,
        maxWidth: 780,
        marginInline: 'auto',
        padding: 'clamp(28px, 5vw, 48px)',
        borderRadius: 'var(--r-lg)',
        background: s.tint,
        border: `2px solid ${s.soft}`,
        position: 'relative',
      }}
    >
      <IconQuote size={44} style={{ color: s.deep, opacity: 0.5, marginBottom: 8 }} />
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(1.25rem, 3vw, 1.7rem)',
          lineHeight: 1.4,
          color: 'var(--ink)',
        }}
      >
        “{item.quote}”
      </blockquote>
      <figcaption style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: '50%',
            background: s.deep,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1.1rem',
          }}
        >
          {item.name.charAt(0)}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--ink)' }}>{item.name}</div>
          <div className="text-soft" style={{ fontSize: '0.9rem' }}>
            {item.role}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export default TestimonialCard;
