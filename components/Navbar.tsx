import type { Lang, Translations } from '@/lib/i18n'

interface NavbarProps {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
}

export default function Navbar({ lang, t, setLang }: NavbarProps) {
  return (
    <nav>
      <a href="#" className="logo">
        <svg width="30" height="21" viewBox="0 0 40 28" fill="none" aria-hidden="true">
          <path d="M20 14 C16 8 8 4 2 6 C6 10 10 14 14 16 L20 14Z" fill="#F97316" />
          <path d="M20 14 C24 8 32 4 38 6 C34 10 30 14 26 16 L20 14Z" fill="#F97316" />
          <path d="M14 16 L20 22 L26 16 L20 14Z" fill="#e06810" />
        </svg>
        <span className="logo-text">
          FALCON<span>DEV</span>
        </span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#services">{t.nav.services}</a>
        </li>
        <li>
          <a href="#team">{t.nav.team}</a>
        </li>
        <li>
          <a href="#projets">{t.nav.projects}</a>
        </li>
        <li>
          <a href="#avis">{t.nav.reviews}</a>
        </li>
      </ul>

      <div className="nav-right">
        <div className="lang-toggle">
          <button
            className={`lang-btn${lang === 'fr' ? ' active' : ''}`}
            onClick={() => setLang('fr')}
            aria-label="Passer en français"
          >
            FR
          </button>
          <button
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
        <a
          href="https://calendly.com/njimateaicha/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  )
}
