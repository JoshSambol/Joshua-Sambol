// Consistent max-width + vertical rhythm wrapper for page sections.
const Section = ({ children, style, pad = 'clamp(48px, 8vw, 96px)', narrow = false }) => (
  <section style={{ position: 'relative', zIndex: 1, paddingBlock: pad, ...style }}>
    <div style={{ maxWidth: narrow ? 820 : 'var(--maxw)', margin: '0 auto', paddingInline: 'clamp(20px, 5vw, 40px)' }}>
      {children}
    </div>
  </section>
);

export default Section;
