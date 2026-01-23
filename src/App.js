// App.js
import './App.css';
import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useMemo } from 'react';

import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';
import groceryPic from './Assets/GroceryListAI.png';
import socialCuePic from './Assets/Assistive_Social_Cue_Companion.png';
import cafeFinderPic from './Assets/CafeFinder.png';

// Buttons container (stagger)
const buttonsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const buttonItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const nameWaveContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.55,
      staggerChildren: 0.08,
    },
  },
};

const nameLetter = {
  hidden: { y: 0, scale: 1 },
  visible: {
    y: [0, -14, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.55,
      times: [0, 0.35, 1],
      ease: 'easeOut',
    },
  },
};

const projectCardMotion = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: 'easeOut', delay: 0.1 },
  viewport: { once: true, amount: 0.35 },
};

function App() {
  const shouldReduceMotion = useReducedMotion();

  const openLink = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const scrollToCentered = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, []);

  const scrollToTop = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  const name = 'piolo';

  const projects = useMemo(
    () => [
      {
        title: 'AI-Powered Grocery List Assistant',
        image: groceryPic,
        alt: 'AI-Powered Grocery List Assistant',
        tech: ['React', 'Electron', 'Node.js', 'OpenAI API'],
        description:
          'A personalized grocery list app that learns from past lists to suggest items you actually buy together — avoiding generic recommendations.',
        highlights: [
          'Generates suggestions from current + historical lists',
          'Designed for fast, low-friction everyday use',
          'Focused on practical, user-specific behavior',
        ],
        githubUrl: 'https://github.com/spiderpilo/Grocerylist-AI',
      },
      {
        title: 'Assistive Social Cue Companion',
        image: socialCuePic,
        alt: 'Assistive Social Cue Companion',
        tech: ['React', 'JavaScript', 'Webcam', 'HTML5 Video'],
        description:
          'An early-stage assistive tool designed to support people with autism or neurodivergent in social situations by providing gentle, real-time context (emotion cues + “sarcasm likelihood”) — framed as supportive and non-diagnostic.',
        highlights: [
          'Real-time webcam overlay for emotion-aware feedback',
          'Sarcasm analyzer that gives a quick “tone check” for messages',
          'Built around clarity, consent, and user-centered design',
        ],
        githubUrl: 'https://github.com/spiderpilo/Assistive-Social-Cue-Companion',
      },

      // ✅ Cafe Finder (fixed copy + naming consistency)
      {
        title: 'Café Finder',
        image: cafeFinderPic,
        alt: 'Café Finder',
        tech: ['React', 'Vite', 'Node.js', 'Google Maps API'],
        description:
          'A fast, clean, location-based café discovery tool that helps you find great coffee nearby — without drowning you in big chains.',
        highlights: [
          'Search cafés by ZIP code or current location',
          'Ranks results by a quality score and down-weights large chains',
          'Deployed and ready to use',
        ],
        liveUrl: 'https://cafe-finder-9sys6jn12-piolos-projects-b34180f7.vercel.app/',
        githubUrl: 'https://github.com/spiderpilo/Cafe-Finder',
      },
    ],
    []
  );

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <motion.div
        className="centered hero"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>
          hi, i&apos;m{' '}
          <motion.span
            className="bold-name"
            variants={shouldReduceMotion ? undefined : nameWaveContainer}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'visible'}
            aria-label={name}
          >
            {name.split('').map((ch, idx) => (
              <motion.span
                key={`${ch}-${idx}`}
                className="name-letter"
                variants={shouldReduceMotion ? undefined : nameLetter}
              >
                {ch}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <p>I code sometimes...</p>

        <p>
          I am a <b>Computer Science student</b> at CSULB with a huge interest in full stack development,
          AI, and — most of all — <b>beautiful user experience</b>.
        </p>

        <motion.div
          className="button-row"
          variants={shouldReduceMotion ? undefined : buttonsContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'visible'}
        >
          <motion.button
            className="my-button"
            variants={shouldReduceMotion ? undefined : buttonItem}
            onClick={() => scrollToCentered('about')}
          >
            About
          </motion.button>

          <motion.button
            className="my-button"
            variants={shouldReduceMotion ? undefined : buttonItem}
            onClick={() => scrollToTop('projects')}
          >
            Projects
          </motion.button>

          <motion.button
            className="my-button"
            variants={shouldReduceMotion ? undefined : buttonItem}
            onClick={() => openLink('https://github.com/spiderpilo')}
          >
            GitHub
          </motion.button>

          <motion.button
            className="my-button"
            variants={shouldReduceMotion ? undefined : buttonItem}
            onClick={() => openLink('https://www.linkedin.com/in/piolo-patag-5a0b7735b/')}
          >
            LinkedIn
          </motion.button>

          <motion.button
            className="my-button"
            variants={shouldReduceMotion ? undefined : buttonItem}
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
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
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

        <p>
          Outside of coding, I’m usually sketching UI ideas, refining personal projects, or learning
          something new.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>

        <div className="projects-list">
          {projects.map((p, index) => {
            const motionProps =
              index === 0
                ? projectCardMotion
                : {
                    ...projectCardMotion,
                    transition: { ...projectCardMotion.transition, delay: 0.2 },
                  };

            return (
              <motion.article
                key={p.title}
                className="project-card"
                {...(shouldReduceMotion ? {} : motionProps)}
              >
                <motion.div className="project-image-wrap">
                  <img src={p.image} alt={p.alt} className="project-image" loading="lazy" />
                </motion.div>

                <motion.div className="project-content">
                  <h3 className="project-title">{p.title}</h3>

                  <div className="tech-row">
                    {p.tech.map((t) => (
                      <span key={`${p.title}-${t}`} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">{p.description}</p>

                  <ul className="project-highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    {p.liveUrl && (
                      <motion.button
                        className="my-button project-button"
                        onClick={() => openLink(p.liveUrl)}
                        style={{ marginRight: 12 }}
                      >
                        Visit Website
                      </motion.button>
                    )}

                    <motion.button
                      className="my-button project-button"
                      onClick={() => openLink(p.githubUrl)}
                    >
                      View GitHub
                    </motion.button>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
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
