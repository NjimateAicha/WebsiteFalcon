import type { Lang, Translations } from '@/lib/i18n'

interface TestimonialsProps {
  lang: Lang
  t: Translations
}

const testimonials = [
  {
    text: 'Excellente collaboration\u00a0! Site livré rapidement, design moderne et conforme à nos attentes. Je recommande à 100\u00a0%.',
    name: 'Madame Hanan Bounit',
    role: 'Avocate · cabinethbavocats.com',
  },
  {
    text: 'Le site est exactement comme je voulais, je suis très content du résultat. Bravo pour le travail et le professionnalisme.',
    name: 'Monsieur Mohamed Arab',
    role: 'E-commerce · santebliss.com',
  },
  {
    text: "Elle a fait preuve de grande patience, a bien compris nos besoins et a été ouverte à toutes les révisions. Une collaboration agréable.",
    name: 'Ayoub Ait Ali',
    role: 'bayticare.fr',
  },
  {
    text: "FalconDeev a parfaitement compris nos besoins et livré un site web de grande qualité, répondant à toutes nos attentes.",
    name: 'Monsieur Mohammed Rezki',
    role: 'arfakvoyage.com',
  },
  {
    text: "Leur expertise et réactivité ont été essentielles. Nous sommes très satisfaits du résultat et recommandons vivement leurs services.",
    name: 'IchraQ Opticienne',
    role: 'Application desktop',
  },
  {
    text: "Travailler avec FalconDeev a été une expérience exceptionnelle. Qualité, réactivité et respect total des délais.",
    name: 'Yassine Serrafi',
    role: 'CEO · afrilavage.com',
  },
  {
    text: "Très satisfait du travail réalisé. Professionnel, à l'écoute et livraison dans les délais. Je recommande FalconDeev.",
    name: 'Monsieur Noureddine Abad',
    role: 'ab-services.ma',
  },
]

export default function Testimonials({ lang, t }: TestimonialsProps) {
  const tm = t.testimonials
  return (
    <section className="section section-alt" id="avis">
      <div className="s-label">{tm.sectionLabel}</div>
      <div className="s-title">{tm.sectionTitle}</div>

      <div className="testi-grid">
        {testimonials.map((item) => (
          <div className="testi" key={item.name}>
            <p className="testi-text">&ldquo;{item.text}&rdquo;</p>
            <div className="testi-name">{item.name}</div>
            <div className="testi-role">{item.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
