import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight, IconBrandGithub, IconWorld, IconBrandApple } from '@tabler/icons-react';
import { swatch } from '../lib/palette';
import { screenshotUrl, previewSite } from '../lib/preview';

const linkIcon = (label) => {
  if (label === 'GitHub') return <IconBrandGithub size={16} />;
  if (label === 'App Store') return <IconBrandApple size={16} />;
  if (label === 'Website') return <IconWorld size={16} />;
  return <IconArrowUpRight size={16} />;
};

const Pill = ({ children, bg, color, border, wrap = false }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 12px',
      borderRadius: wrap ? 14 : 999,
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      fontSize: '0.78rem',
      background: bg,
      color,
      border: border || 'none',
      whiteSpace: wrap ? 'normal' : 'nowrap',
      lineHeight: 1.3,
      maxWidth: '100%',
    }}
  >
    {children}
  </span>
);

// Top-of-card preview: an app logo (iOS apps) or a live homepage screenshot
// (websites). Falls back to the plain pastel band if the shot can't load.
const Preview = ({ project, s, featured }) => {
  const [broken, setBroken] = useState(false);
  const site = previewSite(project);

  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: featured ? '16 / 9' : '16 / 10',
        background: project.logo ? s.soft : s.tint,
        overflow: 'hidden',
      }}
    >
      {project.logo ? (
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
            width: featured ? 108 : 88,
            height: featured ? 108 : 88,
            objectFit: 'contain',
            borderRadius: 22,
            boxShadow: '0 12px 28px rgba(80,70,40,0.18)',
          }}
        />
      ) : site && !broken ? (
        <img
          src={screenshotUrl(site)}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          onError={() => setBroken(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '2.4rem',
            color: s.deep,
            opacity: 0.5,
          }}
        >
          {project.title}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, color = 'lavender', featured = false }) => {
  const s = swatch(color);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        background: 'var(--card)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid rgba(255,255,255,0.8)',
      }}
    >
      {project.showPreview !== false && <Preview project={project} s={s} featured={featured} />}

      {/* body */}
      <div
        style={{
          padding: featured ? '24px 28px 28px' : '20px 22px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <h3
            className="h-section"
            style={{ fontSize: featured ? 'clamp(1.5rem, 3vw, 2rem)' : '1.4rem', color: 'var(--ink)' }}
          >
            {project.title}
          </h3>
          {project.date && (
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 600,
                fontSize: '0.82rem',
                color: 'var(--ink-soft)',
                whiteSpace: 'nowrap',
                marginTop: 6,
              }}
            >
              {project.date}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.status && (
            <Pill bg={s.tint} color="var(--ink)">
              ● {project.status}
            </Pill>
          )}
          {project.clientWork && (
            <Pill bg={s.tint} color="var(--ink)">
              Client work
            </Pill>
          )}
          {project.challenge && (
            <Pill bg="var(--ink)" color="#fff" wrap>
              ★ {project.challenge}
            </Pill>
          )}
        </div>

        <p className="text-soft" style={{ margin: 0, lineHeight: 1.6, fontSize: featured ? '1.02rem' : '0.96rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                padding: '4px 10px',
                borderRadius: 999,
                fontSize: '0.76rem',
                fontFamily: 'var(--font-head)',
                fontWeight: 500,
                background: s.tint,
                color: s.deep,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.links?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', paddingTop: 4 }}>
            {project.links.map((l, i) => (
              <motion.a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 16px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  background: i === 0 ? s.deep : 'transparent',
                  color: i === 0 ? '#fff' : 'var(--ink)',
                  border: i === 0 ? 'none' : `2px solid ${s.soft}`,
                }}
              >
                {linkIcon(l.label)}
                {l.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
