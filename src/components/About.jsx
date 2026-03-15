import { motion } from 'framer-motion'
import styles from './About.module.css'
import profilePhoto from '../assets/profile.jpeg'
import scuLogo from '../assets/sculogo.png'

const skills = [
  'Java', 'C++', 'JavaScript', 'Python',
  'React', 'TypeScript', 'Node.js', 'HTML/CSS',
  'C#', 'Unity', 'C', 'Docker',
  'MongoDB', 'SQL', 'Git', 'Flask',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export default function About() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className={styles.about}>
      <div className={styles.intro}>
        <motion.div variants={item} className={styles.avatarWrap}>
          <img src={profilePhoto} alt="Sean Lai" className={styles.avatar} />
        </motion.div>
        <motion.div variants={item} className={styles.bio}>
          <h2 className="section-title">Hi, I'm Sean</h2>
          <p className="section-subtitle" style={{ marginBottom: 16 }}>
            Computer Science &amp; Engineering Student · Burlingame, CA
          </p>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            I'm a Computer Science and Engineering student at Santa Clara University
            with a passion for building full-stack web apps, conducting systems
            research, and exploring emerging tech like VR/AR and cybersecurity.
            I've interned at a cybersecurity startup, worked as a research assistant
            on QUIC network protocols, and shipped real products used by real people.
            Outside of coding I enjoy gaming, golf, and exploring new cultures —
            I spent a semester studying abroad at Yonsei University in Seoul.
          </p>
        </motion.div>
      </div>

      <motion.div variants={item}>
        <h3 className={styles.sectionHeading}>Skills &amp; Technologies</h3>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <span key={skill} className="badge">{skill}</span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className={styles.factsGrid}>
        {[
          { icon: null, label: 'Education',  value: 'B.S. Computer Science & Engineering, Santa Clara University', logo: scuLogo },
          { icon: null, label: 'Experience',  value: 'Cequence, Wireless Intelligent Networks Lab, IGraphix' },
          { icon: null, label: 'Location',    value: 'Burlingame, CA' },
          { icon: null, label: 'Interests',   value: 'Networks, VR/AR, Cybersecurity' },
        ].map(({ icon, label, value, logo }) => (
          <div key={label} className={`card ${styles.factCard}`}>
            {logo && <img src={logo} className={styles.factCardLogo} alt="" aria-hidden="true" />}
            {icon && <span className={styles.factIcon}>{icon}</span>}
            <span className={styles.factLabel}>{label}</span>
            <span className={styles.factValue}>{value}</span>
          </div>
        ))}
        <a
          href="https://krishnaramamoorthy.com/winlab/"
          target="_blank"
          rel="noreferrer"
          className={`card ${styles.factCard} ${styles.factCardLink}`}
        >
          <span className={styles.factLabel}>Research Lab</span>
          <span className={styles.factValue}>Wireless Intelligent Networks Lab</span>
          <span className={styles.factArrow}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </span>
        </a>
      </motion.div>
    </motion.div>
  )
}
