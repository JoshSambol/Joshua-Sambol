import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import { swatch } from '../lib/palette';

const AchievementRow = ({ item, color = 'lavender', index = 0 }) => {
  const s = swatch(color);
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ y: -4, scale: 1.01 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        padding: '18px 20px',
        borderRadius: 'var(--r-md)',
        background: 'var(--card)',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        border: '1px solid rgba(255,255,255,0.85)',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 58,
          height: 58,
          borderRadius: 16,
          background: s.tint,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={item.icon} alt="" style={{ width: 34, height: 34, objectFit: 'contain' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '1.08rem', color: 'var(--ink)' }}>
            {item.title}
          </span>
          <span
            style={{
              padding: '2px 10px',
              borderRadius: 999,
              fontSize: '0.74rem',
              fontFamily: 'var(--font-head)',
              fontWeight: 600,
              background: s.soft,
              color: 'var(--ink)',
            }}
          >
            {item.year}
          </span>
        </div>
        <p className="text-soft" style={{ margin: '4px 0 0', fontSize: '0.92rem', lineHeight: 1.5 }}>
          {item.description}
        </p>
      </div>
      <IconArrowUpRight size={20} style={{ color: s.deep, flexShrink: 0 }} />
    </motion.a>
  );
};

export default AchievementRow;
