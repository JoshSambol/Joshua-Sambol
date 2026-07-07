import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TestimonialCard from '../components/TestimonialCard';
import Sparkle from '../components/Sparkle';
import CTA from '../components/CTA';
import { services, process } from '../data/services';
import { testimonials } from '../data/testimonials';

const Services = () => (
  <>
    <Section pad="clamp(48px, 8vw, 90px)" style={{ paddingTop: 'clamp(32px, 6vw, 60px)' }}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <Sparkle size={26} color="#fff" twinkle style={{ position: 'absolute', top: 0, right: '22%' }} />
        <div
          style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            marginBottom: 12,
          }}
        >
          Work with me
        </div>
        <h1 className="h-display" style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)' }}>
          Let&apos;s make something <span className="accent-word">great</span>.
        </h1>
        <p className="text-soft" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 620, margin: '20px auto 0' }}>
          I help businesses, non-profits, and people with big ideas turn them into polished, fast, delightful software.
          Here&apos;s what I do and how working together goes.
        </p>
      </div>
    </Section>

    {/* SERVICES */}
    <Section pad="clamp(16px, 4vw, 40px)">
      <SectionHeading eyebrow="Services" title="What I build" />
      <div className="services-grid" style={{ marginTop: 44 }}>
        {services.map((s, i) => (
          <ServiceCard key={s.title} item={s} index={i} />
        ))}
      </div>
    </Section>

    {/* PROCESS */}
    <Section>
      <SectionHeading
        eyebrow="The process"
        title="How it works"
        subtitle="No mystery, no jargon. Four simple steps from idea to launch."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
          marginTop: 44,
        }}
      >
        {process.map((p, i) => (
          <ProcessStep key={p.step} item={p} index={i} />
        ))}
      </div>
    </Section>

    {/* TESTIMONIAL */}
    {/*GET RID OF TS FOR TESTIMONIAL
    {testimonials.length > 0 && (
      <Section>
        <SectionHeading eyebrow="Kind words" title="Don't just take my word for it" />
        <div style={{ marginTop: 40 }}>
          <TestimonialCard item={testimonials[0]} />
        </div>
      </Section>
    )}
*/}

    <Section>
      <CTA />
    </Section>
  </>
);

export default Services;
