import { motion } from 'framer-motion'
import styles from './Media.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

const videos = [
  {
    src: '/media/demo.mov',
    title: 'Demo Recording',
    description: 'Screen recording demo.',
  },
]

const photos = [
  {
    src: '/media/screenshot.png',
    title: 'Screenshot',
    description: '',
  },
]

export default function Media() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className={styles.media}>
      <h2 className="section-title">Media</h2>

      {videos.length > 0 && (
        <motion.div variants={item}>
          <h3 className={styles.sectionHeading}>Videos</h3>
          <div className={styles.grid}>
            {videos.map((v) => (
              <motion.div key={v.src} variants={item} className={`card ${styles.mediaCard}`}>
                <video controls className={styles.video} preload="metadata">
                  <source src={v.src} type="video/mp4" />
                  <source src={v.src} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.caption}>
                  <span className={styles.mediaTitle}>{v.title}</span>
                  {v.description && <span className={styles.mediaDesc}>{v.description}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {photos.length > 0 && (
        <motion.div variants={item}>
          <h3 className={styles.sectionHeading}>Photos</h3>
          <div className={styles.grid}>
            {photos.map((p) => (
              <motion.div key={p.src} variants={item} className={`card ${styles.mediaCard}`}>
                <img src={p.src} alt={p.title} className={styles.photo} />
                <div className={styles.caption}>
                  <span className={styles.mediaTitle}>{p.title}</span>
                  {p.description && <span className={styles.mediaDesc}>{p.description}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
