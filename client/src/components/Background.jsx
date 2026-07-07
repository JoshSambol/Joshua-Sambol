// The fixed, animated pastel → warm backdrop: gradient wash + drifting color
// blobs. Sits behind all page content (z-index 0).
import { motion } from 'framer-motion';

const blobs = [
  { color: 'var(--lavender)', size: 460, top: '-8%', left: '-6%', dur: 18, dx: 40, dy: 30 },
  { color: 'var(--mint)', size: 380, top: '35%', left: '78%', dur: 22, dx: -50, dy: 40 },
  { color: 'var(--coral)', size: 340, top: '72%', left: '8%', dur: 20, dx: 45, dy: -35 },
  { color: 'var(--butter)', size: 300, top: '90%', left: '62%', dur: 24, dx: -30, dy: -40 },
];

const Background = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div className="bg-wash" />
    {blobs.map((b, i) => (
      <motion.div
        key={i}
        className="bg-blob"
        style={{ background: b.color, width: b.size, height: b.size, top: b.top, left: b.left }}
        animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0] }}
        transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export default Background;
