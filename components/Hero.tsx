import Image from 'next/image'
import type { Lang, Translations } from '@/lib/i18n'

interface HeroProps {
  lang: Lang
  t: Translations
}

export default function Hero({ lang, t }: HeroProps) {
  const h = t.hero
  return (
    <section className="hero">
      <div className="hero-deco-circle" />
      <div className="hero-deco-line" />

      <div className="hero-left">
        <div className="team-badge">
          <div className="team-badge-dot" />
          <span className="team-badge-text">{h.badge}</span>
        </div>

        <div className="hero-eyebrow">{h.tagline}</div>

        <h1 className="hero-title">
          {h.titlePart1}
          <span className="orange">{h.titleOrange1}</span>
          {h.titlePart2}
          <span className="orange">{h.titleOrange2}</span>
        </h1>

        <p className="hero-sub">
          <strong>{h.sub1}</strong>
          {h.sub2}
          <strong>{h.sub3}</strong>
          {h.sub4}
          {/* <strong>{h.sub5}</strong> */}
          {h.sub6}
        </p>

        <div className="hero-btns">
          <a
            href="https://calendly.com/njimateaicha/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            {h.cta1}
          </a>
          <a href="#projets" className="btn-outline">
            {h.cta2}
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-n">{h.stat1Val}</div>
            <div className="stat-l">{h.stat1Label}</div>
          </div>
          <div>
            <div className="stat-n">{h.stat2Val}</div>
            <div className="stat-l">{h.stat2Label}</div>
          </div>
          <div>
            <div className="stat-n">{h.stat3Val}</div>
            <div className="stat-l">{h.stat3Label}</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="eagle-frame">
          <Image
            src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=800&q=80"
            alt="FalconDeev — Web & Mobile Agency"
            fill
            sizes="(max-width: 960px) 0px, 50vw"
            style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}
