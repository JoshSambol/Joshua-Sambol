import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import AchievementRow from '../components/AchievementRow';
import Sparkle from '../components/Sparkle';
import CTA from '../components/CTA';
import Seo from '../components/Seo';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { colorForIndex } from '../lib/palette';

const sorted = [...projects].sort((a, b) => (b.sort || 0) - (a.sort || 0));

const Stat = ({ n, label, color }) => (
  <div
    style={{
      padding: '18px 22px',
      borderRadius: 'var(--r-md)',
      background: 'var(--card)',
      boxShadow: 'var(--shadow-sm)',
      textAlign: 'center',
      minWidth: 120,
    }}
  >
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2rem', color }}>{n}</div>
    <div className="text-soft" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
      {label}
    </div>
  </div>
);

const Work = () => (
  <>
    <Seo
      title="Projects & Achievements | Joshua Sambol, NJ Web & iOS Developer"
      description="Browse projects and awards from Joshua Sambol, a web developer and iOS app developer in Princeton, NJ, from award-winning iOS apps to client websites across New Jersey."
      path="/work"
    />
    <Section pad="clamp(48px, 8vw, 90px)" style={{ paddingTop: 'clamp(32px, 6vw, 60px)' }}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <Sparkle size={24} color="#fff" twinkle style={{ position: 'absolute', top: 0, left: '20%' }} />
        <div
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-head)',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}
        >
          The archive
        </div>
        <h1 className="h-display" style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)' }}>
          Everything I&apos;ve <span className="accent-word">built</span>.
        </h1>
        <p className="text-soft" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 600, margin: '20px auto 0' }}>
          A running log of my projects and the recognition they&apos;ve earned along the way, from first experiments to
          shipped apps, built as a web and iOS developer based in New Jersey.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34 }}
        >
          <Stat n={projects.length} label="Projects" color="var(--lavender-deep)" />
          <Stat n={achievements.length} label="Awards" color="var(--coral-deep)" />
          <Stat n="2021" label="Building since" color="var(--mint-deep)" />
        </motion.div>
      </div>
    </Section>

    {/* PROJECTS */}
    <Section pad="clamp(20px, 4vw, 40px)">
      <SectionHeading align="left" eyebrow="Projects" title="Project archive" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
          marginTop: 34,
        }}
      >
        {sorted.map((p, i) => (
          <ProjectCard key={p.title} project={p} color={colorForIndex(i)} />
        ))}
      </div>
    </Section>

    {/* ACHIEVEMENTS */}
    <Section>
      <SectionHeading
        align="left"
        eyebrow="Recognition"
        title="Awards & achievements"
        subtitle="Challenges won, teams made, and honors picked up over the years."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 860 }}>
        {achievements.map((a, i) => (
          <AchievementRow key={`${a.title}-${a.year}`} item={a} color={colorForIndex(i)} index={i} />
        ))}
      </div>
    </Section>

    <Section>
      <CTA title="Like what you see?" subtitle="Let's add your project to this list. Tell me what you have in mind." />
    </Section>
  </>
);

export default Work;
