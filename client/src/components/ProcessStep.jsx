import { motion } from 'framer-motion';
import { swatch } from '../lib/palette';

const ProcessStep = ({ item, index = 0 }) => {
  const s = swatch(item.color);
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.1, 0.5) }}
      style={{
        position: 'relative',
        padding: '26px 22px',
        borderRadius: 'var(--r-lg)',
        background: s.tint,
        height: '100%',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '2.6rem',
          color: s.deep,
          opacity: 0.35,
          lineHeight: 1,
        }}
      >
        {item.step}
      </span>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '14px 0 14px',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <Icon size={26} style={{ color: s.deep }} stroke={2} />
      </div>
      <h3 className="h-section" style={{ fontSize: '1.25rem', marginBottom: 8 }}>
        {item.title}
      </h3>
      <p className="text-soft" style={{ margin: 0, lineHeight: 1.55, fontSize: '0.95rem' }}>
        {item.description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;
