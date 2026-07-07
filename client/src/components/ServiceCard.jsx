import { motion } from 'framer-motion';
import { swatch } from '../lib/palette';

const ServiceCard = ({ item, index = 0 }) => {
  const s = swatch(item.color);
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ y: -6 }}
      style={{
        height: '100%',
        padding: '28px 26px',
        borderRadius: 'var(--r-lg)',
        background: 'var(--card)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid rgba(255,255,255,0.85)',
      }}
    >
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: 18,
          background: s.soft,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18,
        }}
      >
        <Icon size={30} style={{ color: 'var(--ink)' }} stroke={2} />
      </div>
      <h3 className="h-section" style={{ fontSize: '1.35rem', marginBottom: 10 }}>
        {item.title}
      </h3>
      <p className="text-soft" style={{ margin: 0, lineHeight: 1.6, fontSize: '0.98rem' }}>
        {item.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
