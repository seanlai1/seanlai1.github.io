import { motion } from 'framer-motion'
import styles from './Resume.module.css'

const experience = [
  {
    role: 'Research Assistant',
    company: 'Wireless Intelligent Networks Laboratory — Santa Clara University',
    period: 'Sep. 2025 – Current',
    bullets: [
      'Conduct research on the QUIC network protocol, benchmarking throughput, latency, and packet loss against TCP/UDP using virtual machines and network testbeds.',
      'Investigate game theory model integration into QUIC to optimize resource allocation and protocol behavior for application-specific use cases.',
    ],
  },
  {
    role: 'Customer Engineering Intern',
    company: 'Cequence Cybersecurity — Santa Clara, CA',
    period: 'July 2025 – Sep. 2025',
    bullets: [
      'Automated AWS infrastructure setup using Terraform, Ansible, and CI/CD pipelines, enabling faster testing and deployment of plug-in software on API gateways.',
      'Reduced monthly AWS cloud spending for the Customer Engineering Team by ~10% through automation and resource optimization.',
      'Collaborated with global engineering teams in Australia, India, and Japan to develop and test cybersecurity API gateway plug-ins.',
    ],
  },
  {
    role: 'VR and AR Researcher / Game Developer',
    company: 'Santa Clara University Wave+Imaginarium — Santa Clara, CA',
    period: 'Jan. 2024 – Dec. 2024',
    bullets: [
      'Developed 3D environments and game mechanics in Unity using C# scripting, including a first-person PC game in a live forest virtual space.',
      'Collaborated with senior engineers to craft a body positivity virtual experience using Unity, Blender, and real-time movement tracking software.',
    ],
  },
  {
    role: 'Media Research Intern',
    company: 'IGraphix — Daly City, CA',
    period: 'June 2024 – Sep. 2024',
    bullets: [
      'Researched media editorials across all Asian languages including print, TV, Digital, and Social Platforms.',
      'Organized a database to store marketing research using Google Sheets and Excel; built reports on clients regarding revenue streams and Asian audiences.',
      'Coordinated LPGA golfing events with various Asian advertising agencies.',
    ],
  },
]

const education = [
  {
    degree: 'B.S. in Computer Science and Engineering',
    school: 'Santa Clara University — Santa Clara, CA',
    year: '2022 – 2026',
    detail: 'Relevant: OOP, Machine Learning, Compilers, Algorithms, Operating Systems, Embedded Systems',
  },
  {
    degree: 'Study Abroad — Computer Science Focus',
    school: 'Yonsei University — Seoul, South Korea',
    year: 'Aug – Dec 2024',
    detail: 'Relevant: Computer Networks, Korean Language, Psychology, Korean Philosophy',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function Resume() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div variants={item} className={styles.header}>
        <div>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            My experience, education, and skills.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download="Sean_Lai_Resume.pdf"
          className="btn btn-primary"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </a>
      </motion.div>

      <motion.section variants={item} className={styles.block}>
        <h3 className={styles.blockTitle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          Work Experience
        </h3>
        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <motion.div key={i} variants={item} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <p className={styles.role}>{exp.role}</p>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className={styles.block}>
        <h3 className={styles.blockTitle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Education
        </h3>
        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <p className={styles.role}>{edu.degree}</p>
                    <p className={styles.company}>{edu.school}</p>
                  </div>
                  <span className={styles.period}>{edu.year}</span>
                </div>
                {edu.detail && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 4 }}>{edu.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
