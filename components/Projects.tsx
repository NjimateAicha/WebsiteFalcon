import Image from 'next/image'
import type { Lang, Translations } from '@/lib/i18n'

interface ProjectsProps {
  lang: Lang
  t: Translations
}

// Helper: get local image path
function imgUrl(filename: string) {
  return `/images/${filename}`
}

const projectData = [

  {
    href: 'https://arfakvoyage.com',
    img: imgUrl('arfk.jpeg'),
    name: 'Visa Reservation App',
    descKey: 'p2Desc' as const,
    tags: ['Laravel', 'Angular'],
  },
  {
    href: 'https://cabinethbavocats.com',
    img: imgUrl('cabinet-hb-avocats.jpeg'),
    name: 'Cabinet HB Avocats',
    descKey: 'p3Desc' as const,
    tags: ['Laravel'],
  },
  {
    href: 'https://www.afrilavage.com',
    img: imgUrl('Capture d’écran_25-6-2025_172011_www.afrilavage.com.jpeg'),
    name: 'Afrilavage',
    descKey: 'p4Desc' as const,
    tags: ['Full-Stack'],
  },
  {
    href: 'https://najiprom.ma',
    img: imgUrl('Capture d’écran_18-11-2025_12759_najiprom.ma.jpeg'),
    name: 'NajiProm',
    descKey: 'p5Desc' as const,
    tags: ['WordPress'],
  },
  {
    href: 'https://marocsol.com',
    img: imgUrl('Capture d’écran_18-11-2025_121651_marocsol.com.jpeg'),
    name: 'Marocsol',
    descKey: 'p6Desc' as const,
    tags: ['WordPress'],
  },
  {
    href: 'https://bricks-for-all.com',
    img: imgUrl('Capture d’écran_22-3-2026_17453_bricks-for-all.com.jpeg'),
    name: 'Bricks For All',
    descKey: 'p7Desc' as const,
    tags: ['E-commerce'],
  },
  {
    href: 'https://www.rocksol.ma',
    img: imgUrl('Capture d’écran_22-3-2026_174943_www.rocksol.ma.jpeg'),
    name: 'Rocksol',
    descKey: 'p8Desc' as const,
    tags: ['WordPress'],
  },
  {
    href: 'https://paradesoliviers.com',
    img: imgUrl('Capture d’écran_18-11-2025_121913_paradesoliviers.com.jpeg'),
    name: 'ParadesOliviers',
    descKey: 'p9Desc' as const,
    tags: ['E-commerce'],
  },
  {
    href: 'https://www.ab-services.ma',
    img: imgUrl('Screenshot 2025-09-08 135113.png'),
    name: 'AB-Services',
    descKey: 'p10Desc' as const,
    tags: ['Vitrine'],
  },
  {
    href: 'https://brunettefrance.com',
    img: imgUrl('Capture d’écran_13-9-2025_17252_brunettefrance.com (1).jpeg'),
    name: 'Brunette France',
    descKey: 'p11Desc' as const,
    tags: ['E-commerce'],
  },
  {
    href: 'https://mooninterior.ma',
    img: imgUrl('image.png'),
    name: 'Moon Interior',
    descKey: 'p12Desc' as const,
    tags: ['WordPress'],
  },
  {
    href: 'https://dentiste.aichanjimate.com',
    img: imgUrl('dentiste.jpeg'),
    name: 'Cabinet Dentaire',
    descKey: 'p13Desc' as const,
    tags: ['Vitrine'],
  },
  {
    href: 'https://opticien.aichanjimate.com',
    img: imgUrl('opticienc.jpeg'),
    name: 'Opticien',
    descKey: 'p14Desc' as const,
    tags: ['Vitrine'],
  },
  {
    href: 'https://moto.aichanjimate.com',
    img: imgUrl('moto.jpeg'),
    name: 'Moto Location',
    descKey: 'p15Desc' as const,
    tags: ['E-commerce'],
  },
    {
    href: 'https://santebliss.com',
    img: imgUrl('Capture d’écran_25-6-2025_172033_santebliss.com.jpeg'),
    name: 'SanteBliss',
    descKey: 'p1Desc' as const,
    tags: ['Laravel', 'E-commerce'],
  },
]

export default function Projects({ lang, t }: ProjectsProps) {
  const p = t.projects

  return (
    <section className="section" id="projets">
      <div className="projects-header">
        <div>
          <div className="s-label">{p.sectionLabel}</div>
          <div className="s-title">{p.sectionTitle}</div>
        </div>
        <a
          href="https://aichanjimate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          {p.viewAll}
        </a>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-img">
              <Image
                src={project.img}
                alt={project.name}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="project-body">
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{p[project.descKey]}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="view-link">{p.viewSite}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
