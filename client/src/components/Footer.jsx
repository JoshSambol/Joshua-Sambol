import { Link } from 'react-router-dom';
import { socialLinks, identity } from '../data/site';

const Footer = () => (
  <footer style={{ position: 'relative', zIndex: 1, paddingBlock: '48px 40px' }}>
    <div
      style={{
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
        paddingInline: 'clamp(20px, 5vw, 40px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(38,64,46,0.12)',
        paddingTop: 32,
      }}
    >
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--ink)' }}>
          {identity.name}
          <span style={{ color: 'var(--coral-deep)' }}>.</span>
        </div>
        <p className="text-soft" style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
          {identity.role} · Building bright things on the web.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {socialLinks.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                background: '#fff',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
              }}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
    <p className="text-soft" style={{ textAlign: 'center', fontSize: '0.82rem', marginTop: 28, opacity: 0.7 }}>
      © {identity.name} · <Link to="/contact" style={{ color: 'inherit' }}>Work with me</Link>
    </p>
  </footer>
);

export default Footer;
