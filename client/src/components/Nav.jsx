import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Nav = () => (
  <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 90, delay: 0.1 }}
    style={{
      position: 'sticky',
      top: 16,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 12px',
      pointerEvents: 'none',
    }}
  >
    <nav className="nav-pill" style={{ pointerEvents: 'auto' }}>
      <Link to="/" className="nav-brand">
        Joshua<span style={{ color: 'var(--coral-deep)' }}>.</span>
      </Link>
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} style={{ textDecoration: 'none' }}>
          {({ isActive }) => <span className={`nav-link${isActive ? ' is-active' : ''}`}>{l.label}</span>}
        </NavLink>
      ))}
    </nav>
  </motion.header>
);

export default Nav;
