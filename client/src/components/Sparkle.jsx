import { motion } from 'framer-motion';

// A little 4-point star. Used both as static decoration and as twinkling accents.
const Sparkle = ({ size = 24, color = '#fff', style, twinkle = false, delay = 0 }) => {
  const star = (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M50 0 C54 32 68 46 100 50 C68 54 54 68 50 100 C46 68 32 54 0 50 C32 46 46 32 50 0 Z"
        fill={color}
      />
    </svg>
  );

  if (!twinkle) return <span style={{ display: 'inline-flex', ...style }}>{star}</span>;

  return (
    <motion.span
      style={{ display: 'inline-flex', ...style }}
      animate={{ scale: [1, 1.35, 1], rotate: [0, 25, 0], opacity: [0.75, 1, 0.75] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {star}
    </motion.span>
  );
};

export default Sparkle;
