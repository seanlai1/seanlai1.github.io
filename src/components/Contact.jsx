import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import styles from './Contact.module.css'

const links = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.814 1.102.814 2.222v3.293c0 .322.216.694.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
    ),
    label: 'GitHub',
    value: '@seanlai1',
    href: 'https://github.com/seanlai1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/sean-lai1',
    href: 'https://linkedin.com/in/sean-lai1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    label: 'Email',
    value: 'mrseanlai@gmail.com',
    href: 'mailto:mrseanlai@gmail.com',
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

export default function Contact() {
  // Sign up at https://formspree.io, create a form, and replace 'YOUR_FORM_ID' with your form ID
  const [state, handleSubmit] = useForm('xnjgbypl')

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div variants={item}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <div className={styles.layout}>
        {/* Contact Links */}
        <motion.div variants={item} className={styles.linksCol}>
          {links.map(({ icon, label, value, href }) => (
            <a key={label} href={href} className={`card ${styles.linkCard}`} target="_blank" rel="noreferrer">
              <span className={styles.linkIcon}>{icon}</span>
              <div>
                <p className={styles.linkLabel}>{label}</p>
                <p className={styles.linkValue}>{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className={`card ${styles.form}`}
          noValidate
        >
          <h3 className={styles.formTitle}>Send a Message</h3>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              autoComplete="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.fieldError} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.fieldError} />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              rows={5}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.fieldError} />
          </div>

          {state.succeeded ? (
            <p className={styles.success}>Message sent! I'll be in touch soon.</p>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={state.submitting}>
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
          )}
        </motion.form>
      </div>
    </motion.div>
  )
}
