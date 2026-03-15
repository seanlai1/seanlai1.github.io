import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'Mimica',
    description:
      'A voice translation device with a custom cloud pipeline featuring voice cloning and support for 10+ languages, built as a senior design project.',
    tech: ['Python', 'Machine Learning', 'ESP32', 'Cloud Engineering', 'Voice Cloning'],
    repo: 'https://github.com/Gurprasaad/Mimica-Senior-Design',
    current: true,
  },
  {
    title: 'Homey',
    description:
      'Full-stack roommate finder web app with Tinder-style swiping, real-time messaging via Socket.io, and algorithm-based compatibility matching.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker', 'JWT'],
    repo: 'https://github.com/seanlai1/Homey',
    featured: true,
  },
  {
    title: 'Emissions Buddy',
    description:
      'Chrome extension that activates on flight booking pages to present carbon emission data from flight logs, plane model, passenger load, and fuel type.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Pandas', 'SQLite'],
    repo: 'https://github.com/ethansy878/Emissions-Buddy',
    extra: { label: 'Devpost', href: 'https://devpost.com/software/emissions-buddy' },
    featured: false,
  },
  {
    title: 'QUIC Protocol Research',
    description:
      'Research benchmarking the QUIC network protocol — throughput, latency, and packet loss — against TCP and UDP using virtual machines and network testbeds. We are applying Q-learning, a reinforcement machine learning model, to optimize protocol parameters under bottleneck network conditions.',
    tech: ['C++', 'Python', 'Networking', 'Linux', 'Q-Learning', 'Reinforcement Learning'],
    featured: false,
  },
  {
    title: 'VR Forest Experience',
    description:
      'Immersive 3D first-person PC game set in a live forest virtual space, built with Unity. Includes custom C# scripting for physics behaviors and graphical effects.',
    tech: ['Unity', 'C#', 'Blender', 'VR/AR'],
    repo: 'https://greenhouse-gamedev.itch.io/heartwood',
    repoLabel: 'Play',
    featured: false,
  },
  {
    title: 'Netflix Predictive Model',
    description:
      'This project focuses on predicting movie ratings based solely on historical user–movie interactions, a setting known as collaborative filtering. Explores classification and predictive modelling techniques with data preprocessing pipelines and model evaluation.',
    tech: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'Jupyter'],
    repo: 'https://github.com/seanlai1/machine-learning-final-project',
    featured: false,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function Portfolio() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div variants={item}>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">A selection of projects I've built and shipped.</p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={item}
            className={`card ${styles.project}${p.featured ? ' ' + styles.featured : ''}${p.current ? ' ' + styles.current : ''}`}
          >
            {p.featured && <span className={styles.featuredBadge}>Featured</span>}
            {p.current && <span className={styles.currentBadge}>Currently Working On</span>}
            <h3 className={styles.projectTitle}>{p.title}</h3>
            <p className={styles.projectDesc}>{p.description}</p>
            <div className={styles.techList}>
              {p.tech.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
            <div className={styles.links}>
              {p.repo && (
                <a href={p.repo} className="btn btn-outline" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.814 1.102.814 2.222v3.293c0 .322.216.694.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  {p.repoLabel || 'Source'}
                </a>
              )}
              {p.extra && (
                <a href={p.extra.href} className="btn btn-outline" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  {p.extra.label}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
