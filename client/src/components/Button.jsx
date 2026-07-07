import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Playful pill button. Renders as a router <Link> (to), an <a> (href), or a
// <button>. `variant`: 'solid' | 'outline'.
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-head)',
  fontWeight: 600,
  fontSize: '1.02rem',
  padding: '13px 26px',
  borderRadius: 999,
  textDecoration: 'none',
  cursor: 'pointer',
  border: '2px solid transparent',
  lineHeight: 1,
};

const variants = {
  solid: {
    background: 'var(--coral-deep)',
    color: '#fff',
    boxShadow: '0 10px 24px rgba(255,107,71,0.35)',
  },
  outline: {
    background: 'rgba(255,255,255,0.7)',
    color: 'var(--ink)',
    border: '2px solid var(--ink)',
  },
};

const LinkWithRef = forwardRef((props, ref) => <Link ref={ref} {...props} />);
LinkWithRef.displayName = 'LinkWithRef';
const MotionLink = motion(LinkWithRef);

const Button = ({ to, href, children, variant = 'solid', onClick, type, leftIcon, style, ...rest }) => {
  const styleObj = { ...base, ...variants[variant], ...style };
  const motionProps = { whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.97 } };
  const content = (
    <>
      {leftIcon}
      {children}
    </>
  );

  if (to)
    return (
      <MotionLink to={to} style={styleObj} onClick={onClick} {...motionProps} {...rest}>
        {content}
      </MotionLink>
    );
  if (href)
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={styleObj}
        onClick={onClick}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    );
  return (
    <motion.button type={type || 'button'} style={styleObj} onClick={onClick} {...motionProps} {...rest}>
      {content}
    </motion.button>
  );
};

export default Button;
