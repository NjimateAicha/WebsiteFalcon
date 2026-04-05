import type { Lang, Translations } from '@/lib/i18n'

interface CTAProps {
  lang: Lang
  t: Translations
}

export default function CTA({ lang, t }: CTAProps) {
  const c = t.cta
  return (
    <div className="cta-wrap">
      <div className="cta-glow" />
      <div className="s-label" style={{ marginBottom: '1rem' }}>
        {c.sectionLabel}
      </div>
      <h2>
        {c.title1}
        <br />
        {c.title2}
        <span style={{ color: 'var(--orange)' }}>{c.titleOrange}</span>
      </h2>
      <p>{c.desc}</p>
      <div className="cta-btns">
        <a
          href="https://calendly.com/njimateaicha/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange"
        >
          {c.btn1}
        </a>
        <a
          href="https://wa.me/212601927552"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          {c.btn2}
        </a>
        <a href="mailto:njimateaicha@gmail.com" className="btn-outline">
          {c.btn3}
        </a>
      </div>
    </div>
  )
}
