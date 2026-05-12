import './App.css';
import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';
import groceryPic from './Assets/GroceryListAI.png';
import socialCuePic from './Assets/Assistive_Social_Cue_Companion.png';
import cafeFinderPic from './Assets/CafeFinder.png';
import mirrorTalePic from './Assets/MirrorTale.png';
import fateDeckPic from './Assets/FateDeck.png';

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

  const bubbleRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      bubbleRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const maxDist = 320;
        const extra = dist < maxDist ? (1 - dist / maxDist) * 0.55 : 0;
        el.style.setProperty('--hover-scale', 1 + extra);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const pcbDesigns = useMemo(
    () => [
      {
        title: 'LED_Arduino',
        tech: ['KiCad', 'Arduino', 'PCB Design', 'Eagle'],
        description:
          'A custom PCB designed to drive LEDs using an Arduino microcontroller — laying out the schematic, routing traces, and exporting fabrication-ready Gerber files.',
        highlights: [
          'Custom schematic and trace routing for LED control circuits',
          'Designed 3D model preview to verify component clearances',
          'Export-ready layout for PCB fabrication',
        ],
        images: [
          { src: `${process.env.PUBLIC_URL}/3DModel.png`, label: '3D Model' },
          { src: `${process.env.PUBLIC_URL}/PCB_layout.png`, label: 'PCB Layout' },
        ],
        githubUrl: 'https://github.com/spiderpilo/LED_Arduino_PCB',
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: 'FateDeck',
        image: fateDeckPic,
        alt: 'FateDeck',
        tech: ['React', 'Node.js', 'OpenAI API'],
        description:
          'A playful AI-powered tarot experience that turns user questions into dynamic 3-card readings, combining storytelling, personality, and interactive design.',
        highlights: [
          'Generates 3-card spreads with contextual AI interpretations',
          'Interactive UI with card animations and user-driven questions',
          'Built at a hackathon for entertainment, creativity, and fun UX',
        ],
        liveUrl: 'https://fate-deck.vercel.app',
        githubUrl: 'https://github.com/spiderpilo/fateDeck',
      },
      {
        title: 'MirrorTale',
        image: mirrorTalePic,
        alt: 'MirrorTale',
        tech: ['React', 'Node.js', 'Express', 'OpenAI API'],
        description:
          'An AI-powered reflection companion that transforms your thoughts into a personalized illustrated storybook through guided, Socratic-style conversations.',
        highlights: [
          'Guides users through reflection without giving direct advice',
          'Transforms reflections into structured multi-page narratives with AI-generated visuals',
          'Interactive storybook UI with animations and PDF export',
        ],
        liveUrl: 'https://www.mirrorttale.org/',
        githubUrl: 'https://github.com/spiderpilo/MirrorTale',
      },
      {
        title: 'Assistive Social Cue Companion',
        image: socialCuePic,
        alt: 'Assistive Social Cue Companion',
        tech: ['React', 'JavaScript', 'Webcam', 'TensorFlow.js'],
        description:
          'An assistive AI tool designed to support neurodivergent users in social situations by providing real-time context around facial expressions and tone.',
        highlights: [
          'Real-time emotion detection using webcam input',
          'Sarcasm likelihood feedback powered by AI',
          'Designed with a user-centered, non-diagnostic approach',
        ],
        githubUrl: 'https://github.com/spiderpilo/Assistive-Social-Cue-Companion',
      },
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
        liveUrl: 'https://cafe-finder-brown.vercel.app',
        githubUrl: 'https://github.com/spiderpilo/Cafe-Finder',
      },
    ],
    []
  );

  return (
    <div className="page-wrapper">
      <div className="background-bubbles">
        <span className="bubble bubble-1" ref={el => bubbleRefs.current[0] = el}></span>
        <span className="bubble bubble-2" ref={el => bubbleRefs.current[1] = el}></span>
        <span className="bubble bubble-3" ref={el => bubbleRefs.current[2] = el}></span>
        <span className="bubble bubble-4" ref={el => bubbleRefs.current[3] = el}></span>
        <span className="bubble bubble-5" ref={el => bubbleRefs.current[4] = el}></span>
        <span className="bubble bubble-6" ref={el => bubbleRefs.current[5] = el}></span>
      </div>

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

        <p className="hero-sub">I code sometimes...</p>

        <motion.div
          className="button-row"
          variants={shouldReduceMotion ? undefined : buttonsContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'visible'}
        >
          <motion.button className="my-button" variants={buttonItem} whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }} onClick={() => scrollToCentered('about')}>
            About
          </motion.button>

          <motion.button className="my-button" variants={buttonItem} whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }} onClick={() => scrollToTop('projects')}>
            Projects
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            onClick={() => openLink('https://github.com/spiderpilo')}
          >
            <FaGithub size={18} />
            GitHub
          </motion.button>

          <motion.button
            className="my-button"
            variants={buttonItem}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            onClick={() => openLink('https://www.linkedin.com/in/piolo-patag-5a0b7735b/')}
          >
            <FaLinkedin size={18} />
            LinkedIn
          </motion.button>

          <motion.button className="my-button" variants={buttonItem} whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }} onClick={() => scrollToCentered('contact')}>
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      <section id="about" className="section about-section">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={profilePic}
            alt="Piolo"
            className="profile-photo"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          />

          <h2>About Me</h2>

          <p>Hi, I&apos;m <b>Piolo</b>.</p>

          <p>
            I&apos;m a Computer Science student and builder focused on AI, robotics, and embedded systems.
          </p>

          <p>
            I enjoy creating projects that combine software, hardware, and real-world interaction — from
            AI-powered applications and computer vision systems to autonomous drones, PCB prototypes, and
            experimental robotics projects.
          </p>

          <p>
            My goal is to work at the intersection of machine learning and physical systems while
            continuously learning through hands-on building and iteration.
          </p>

          <p>
            When I&apos;m not coding, I&apos;m usually prototyping ideas, refining projects, testing
            hardware, or documenting the process online.
          </p>
        </motion.div>
      </section>

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
              <motion.article key={p.title} className="project-card" {...motionProps}>
                <div className="project-image-wrap">
                  <img src={p.image} alt={p.alt} className="project-image" loading="lazy" />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>

                  <div className="tech-row">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-chip">
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
                      <button className="my-button project-button" onClick={() => openLink(p.liveUrl)}>
                        Visit Website
                      </button>
                    )}

                    <button className="my-button project-button" onClick={() => openLink(p.githubUrl)}>
                      View GitHub
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="pcb-designs" className="section pcb-section">
        <h2>PCB Designs</h2>

        <div className="pcb-list">
          {pcbDesigns.map((p) => (
            <motion.article key={p.title} className="project-card pcb-card" {...projectCardMotion}>
              <div className="pcb-image-gallery">
                {p.images.map((img) => (
                  <div key={img.label} className="pcb-image-item">
                    <div className="project-image-wrap">
                      <img src={img.src} alt={img.label} className="project-image" loading="lazy" />
                    </div>
                    <span className="pcb-image-label">{img.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>

                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-chip">
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
                  <button className="my-button project-button" onClick={() => openLink(p.githubUrl)}>
                    <FaGithub size={16} />
                    View GitHub
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

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