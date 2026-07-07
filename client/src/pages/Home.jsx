import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Sparkle from '../components/Sparkle';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTA from '../components/CTA';
import { identity, techStack } from '../data/site';
import { featuredProjects } from '../data/projects';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { colorForIndex } from '../lib/palette';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, type: 'spring', stiffness: 90 },
  }),
};

const Home = () => (
  <>
    {/* ---------------- HERO ---------------- */}
    <Section pad="clamp(56px, 9vw, 120px)" style={{ paddingTop: 'clamp(40px, 7vw, 80px)' }}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <Sparkle size={30} color="#fff" twinkle style={{ position: 'absolute', top: '-10px', right: '18%' }} />
        <Sparkle size={22} color="#fff" twinkle delay={1} style={{ position: 'absolute', top: '48%', left: '10%' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 16px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.7)',
            boxShadow: 'var(--shadow-sm)',
            fontFamily: 'var(--font-head)',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'var(--ink-soft)',
            marginBottom: 28,
          }}
        >
          Available for freelance projects
        </motion.div>

        <h1 className="h-display" style={{ fontSize: 'clamp(2.8rem, 9vw, 6rem)' }}>
          <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
            Hi, I&apos;m Josh.
          </motion.span>
          <br />
          <motion.span
            custom={1}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="accent-word"
            style={{ display: 'inline-block', maxWidth: '100%' }}
          >
            I build for the web.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-soft"
          style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)', lineHeight: 1.6, maxWidth: 620, margin: '24px auto 0' }}
        >
          {identity.tagline} I&apos;m a full-stack developer taking on freelance websites, web apps, and iOS apps,
          from first sketch to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34 }}
        >
          <Button to="/contact" leftIcon={null}>
            Work with me
          </Button>
          <Button to="/work" variant="outline">
            See my work
          </Button>
        </motion.div>

        {/* tech row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginTop: 48 }}
        >
          {techStack.map((t) => {
            const Icon = t.icon;
            return (
              <motion.a
                key={t.label}
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                title={t.label}
                whileHover={{ y: -6, rotate: [0, -8, 8, 0] }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  background: 'rgba(255,255,255,0.75)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink)',
                }}
              >
                <Icon size={30} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </Section>

    {/* ---------------- FEATURED WORK ---------------- */}
    <Section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
        <SectionHeading
          align="left"
          eyebrow="Featured work"
          title="Things I've made lately"
          subtitle="A few recent projects. There's a full archive of everything I've built over on the Work page."
        />
        <Link
          to="/work"
          style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 600,
            color: 'var(--ink)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            whiteSpace: 'nowrap',
          }}
        >
          View all <IconArrowRight size={18} />
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}
      >
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.title} project={p} color={colorForIndex(i)} />
        ))}
      </div>
    </Section>

    {/* ---------------- SERVICES TEASER ---------------- */}
    <Section>
      <SectionHeading
        eyebrow="How I can help"
        title="What I build"
        subtitle="From a simple site to a full-blown app, here's what you can hire me for."
      />
      <div className="services-grid" style={{ marginTop: 44 }}>
        {services.map((s, i) => (
          <ServiceCard key={s.title} item={s} index={i} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <Button to="/services" variant="outline">
          See how we&apos;d work together →
        </Button>
      </div>
    </Section>

    {/* ---------------- TESTIMONIAL ---------------- */}
    {testimonials.length > 0 && (
      <Section>
        <SectionHeading eyebrow="Kind words" title="What clients say" />
        <div style={{ marginTop: 40 }}>
          <TestimonialCard item={testimonials[0]} />
        </div>
      </Section>
    )}

    {/* ---------------- CTA ---------------- */}
    <Section>
      <CTA />
    </Section>
  </>
);

export default Home;
