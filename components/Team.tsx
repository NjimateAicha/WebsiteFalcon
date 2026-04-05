import Image from 'next/image'
import type { Lang, Translations } from '@/lib/i18n'

interface TeamProps {
  lang: Lang
  t: Translations
}

export default function Team({ lang, t }: TeamProps) {
  const tm = t.team
  return (
    <section className="section" id="team">
      <div className="s-label">{tm.sectionLabel}</div>
      <div className="s-title">{tm.sectionTitle}</div>

      <div className="team-intro" style={{ marginTop: '2.5rem' }}>
        <div className="team-intro-grid">
          <div className="team-intro-text">
            <div className="s-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              {tm.introTitle1}
              <br />
              <span style={{ color: 'var(--orange)' }}>
                {tm.introTitleOrange}
                {tm.introTitleOrange2}
              </span>
            </div>
            <p>
              {tm.introDesc1}
              <strong>{tm.introDesc2}</strong>
              {tm.introDesc3}
            </p>
          </div>

          <div className="team-cards">
            {/* CEO card — full width */}
            <div style={{ gridColumn: '1 / -1' }}>
              <div className="ceo-card">
                <div className="ceo-img-wrap">
                  <Image
                    src="https://www.aichanjimate.com/assets/img/me.jpeg"
                    alt="Aicha Njimate — CEO & Founder FalconDeev"
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div className="ceo-badge">CEO &amp; Founder</div>
                </div>
                <div className="ceo-body">
                  <div className="ceo-name">Aicha Njimate</div>
                  <div className="ceo-role">CEO · Lead Full-Stack Developer</div>
                  <div className="ceo-desc">{tm.ceoDesc}</div>
                  <div className="ceo-links">
                    <a
                      href="https://www.linkedin.com/in/aicha-njimate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ceo-link orange"
                    >
                      LinkedIn →
                    </a>
                    <a
                      href="https://github.com/NjimateAicha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ceo-link muted"
                    >
                      GitHub →
                    </a>
                    <a
                      href="https://aichanjimate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ceo-link muted"
                    >
                      Portfolio →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team member cards */}
            <div className="team-member-card">
              <div className="tm-avatar">FD</div>
              <div className="tm-name">{tm.frontendName}</div>
              <div className="tm-role">React · TypeScript · UI/UX</div>
              <div className="tm-spec">{tm.frontendSpec}</div>
            </div>

            <div className="team-member-card">
              <div className="tm-avatar">BE</div>
              <div className="tm-name">{tm.backendName}</div>
              <div className="tm-role">Laravel · API · DevOps</div>
              <div className="tm-spec">{tm.backendSpec}</div>
            </div>

            <div className="team-member-card">
              <div className="tm-avatar">MB</div>
              <div className="tm-name">{tm.mobileName}</div>
              <div className="tm-role">Flutter · Firebase · iOS/Android</div>
              <div className="tm-spec">{tm.mobileSpec}</div>
            </div>

            <div className="team-member-card">
              <div className="tm-avatar">DS</div>
              <div className="tm-name">{tm.designName}</div>
              <div className="tm-role">UX · SEO · Marketing</div>
              <div className="tm-spec">{tm.designSpec}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
