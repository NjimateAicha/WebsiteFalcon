import type { Lang, Translations } from '@/lib/i18n'

interface ServicesProps {
  lang: Lang
  t: Translations
}

export default function Services({ lang, t }: ServicesProps) {
  const s = t.services

  const services = [
    {
      num: '01',
      name: s.s1Name,
      desc: s.s1Desc,
      stack: ['React.js', 'TypeScript', 'Laravel', 'Tailwind', 'REST API'],
    },
    {
      num: '02',
      name: s.s2Name,
      desc: s.s2Desc,
      stack: ['Flutter', 'Firebase', 'REST API'],
    },
    {
      num: '03',
      name: s.s3Name,
      desc: s.s3Desc,
      stack: ['React', 'Laravel', 'PostgreSQL', 'OpenAI'],
    },
    {
      num: '04',
      name: s.s4Name,
      desc: s.s4Desc,
      stack: ['WordPress', 'WooCommerce', 'Laravel'],
    },
    {
      num: '05',
      name: s.s5Name,
      desc: s.s5Desc,
      stack: lang === 'fr' ? ['Stratégie', 'SaaS', 'Freelance'] : ['Strategy', 'SaaS', 'Freelance'],
    },
    {
      num: '06',
      name: s.s6Name,
      desc: s.s6Desc,
      stack: ['Hostinger VPS', 'Cloudflare', 'NGINX', 'Vercel'],
    },
  ]

  return (
    <section className="section section-alt" id="services">
      <div className="s-label">{s.sectionLabel}</div>
      <div className="s-title">{s.sectionTitle}</div>
      <p className="s-sub">{s.sectionSub}</p>

      <div className="services-grid">
        {services.map((svc) => (
          <div className="svc" key={svc.num}>
            <div className="svc-num">{svc.num}</div>
            <div className="svc-name">{svc.name}</div>
            <div className="svc-desc">{svc.desc}</div>
            <div className="svc-stack">
              {svc.stack.map((tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
