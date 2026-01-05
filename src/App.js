import './App.css';
import { motion } from 'framer-motion';
import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';
import groceryPic from './Assets/GroceryListAI.png';
import socialCuePic from './Assets/Assistive_Social_Cue_Companion.png';

// Buttons container (stagger)
const buttonsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const buttonItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Name wave: parent waits, then staggers letters
const nameWaveContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.55, // starts AFTER bubbles settle
      staggerChildren: 0.08
    }
  }
};

// Each letter pops up then settles back
const nameLetter = {
  hidden: { y: 0, scale: 1 },
  visible: {
    y: [0, -14, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.55,
      times: [0, 0.35, 1],
      ease: 'easeOut'
    }
  }
};

// Project card fade-in (reusable)
const projectCardMotion = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: 'easeOut', delay: 0.1 },
  viewport: { once: true, amount: 0.35 }
};

// Same animation, just a slightly different delay (avoids duplicate props)
const projectCardMotionSecond = {
  ...projectCardMotion,
  transition: { ...projectCardMotion.transition, delay: 0.2 }
};

function App() {
  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  // Centered scroll (nice for About/Contact)
  const scrollToCentered = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  // Top scroll (nice for Projects so it lands at the start of the stack)
  const scrollToTop = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const name = 'piolo';

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <motion.div
        className="centered hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>
          hi, i&apos;m{' '}
          <motion.span
            className="bold-name"
            variants={nameWaveContainer}
            initial="hidden"
            animate="visible"
            aria-label={name}
          >
            {name.split('').map((ch, idx) => (
              <motion.span key={`${ch}-${idx}`} className="name-letter" variants={nameLetter}>
                {ch}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <p>I code sometimes...</p>

        <p>
          I am a <b>Computer Science student</b> at CSULB with a huge interest in full stack development, AI,
          and — most of all — <b>beautiful user experience</b>.
        </p>

        {/* Buttons (bubbles) */}
        <motion.div className="button-row" variants={buttonsContainer} initial="hidden" animate="visible">
          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToCentered('about')}
          >
            About
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToTop('projects')}  
          >
            Projects
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openLink('https://github.com/spiderpilo')}
          >
            GitHub
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openLink('https://www.linkedin.com/in/piolo-patag-5a0b7735b/')}
          >
            LinkedIn
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToCentered('contact')}
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <motion.img
          src={profilePic}
          alt="Piolo"
          className="profile-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        />

        <h2>About Me</h2>
        <p>
          Hi, I’m <b>Piolo</b> — a Computer Science student based in California who enjoys building clean,
          thoughtful, and well-designed software.
        </p>
        <p>
          I focus on full-stack applications and AI-assisted tools, with an emphasis on usability and
          human-centered design.
        </p>
        <p>Outside of coding, I’m usually sketching UI ideas, refining personal projects, or learning something new.</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>

        <div className="projects-list">
          {/* PROJECT 1 */}
          <motion.article className="project-card" {...projectCardMotion}>
            <motion.div
              className="project-image-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut', delay: 0.25 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <img
                src={groceryPic}
                alt="AI-Powered Grocery List Assistant"
                className="project-image"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="project-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h3 className="project-title">AI-Powered Grocery List Assistant</h3>

              <p className="project-description">
                A personalized grocery list app that learns from past lists to suggest items you actually buy
                together — avoiding generic recommendations.
              </p>

              <ul className="project-highlights">
                <li>Generates suggestions from current + historical lists</li>
                <li>Designed for fast, low-friction everyday use</li>
                <li>Focused on practical, user-specific behavior</li>
              </ul>

              <div className="project-actions">
                <motion.button
                  className="my-button project-button"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => openLink('https://github.com/spiderpilo/Grocerylist-AI')}
                >
                  View GitHub
                </motion.button>
              </div>
            </motion.div>
          </motion.article>

          {/* PROJECT 2 */}
          <motion.article className="project-card" {...projectCardMotionSecond}>
            <motion.div
              className="project-image-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut', delay: 0.25 }}
              viewport={{ once: true, amount: 0.45 }}
            >
              <img
                src={socialCuePic}
                alt="Assistive Social Cue Companion"
                className="project-image"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="project-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h3 className="project-title">Assistive Social Cue Companion</h3>

              <p className="project-description">
                An early-stage assistive tool designed to support autistic and neurodivergent people in social
                situations by providing gentle, real-time context (emotion cues + “sarcasm likelihood”) — framed
                as supportive and non-diagnostic.
              </p>

              <ul className="project-highlights">
                <li>Real-time webcam overlay for emotion-aware feedback</li>
                <li>Sarcasm analyzer that gives a quick “tone check” for messages</li>
                <li>Built around clarity, consent, and user-centered design</li>
              </ul>

              <div className="project-actions">
                <motion.button
                  className="my-button project-button"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => openLink('https://github.com/spiderpilo/Assistive-Social-Cue-Companion')}
                >
                  View GitHub
                </motion.button>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>
          Reach me at{' '}
          <a className="email-link" href="mailto:piolo.patag@gmail.com">
            piolo.patag@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
