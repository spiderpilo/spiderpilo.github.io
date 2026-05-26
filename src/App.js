import './App.css';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

import pioloIcon from './Assets/piolo.png';
import pioloIconWhite from './Assets/piolo_white.png';
import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';
import groceryPic from './Assets/GroceryListAI.png';
import socialCuePic from './Assets/Assistive_Social_Cue_Companion.png';
import cafeFinderPic from './Assets/CafeFinder.png';
import mirrorTalePic from './Assets/MirrorTale.png';
import fateDeckPic from './Assets/FateDeck.png';
import fatedeckVideo from './Assets/fatedeck.mp4';
import mirrortaleVideo from './Assets/mirrortale.mp4';
import assistiveVideo from './Assets/assistivecompanion.mp4';
import dronePic from './Assets/Drone1.png';
import pcb1Video from './Assets/PCB1.mp4';

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
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0 },
  viewport: { once: true, amount: 0.2 },
};

const sectionIntroMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 36, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
  viewport: { once: true, amount: 0.6 },
});

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


  const [videoPlaying, setVideoPlaying] = useState(true);
  const [introGone, setIntroGone] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introComplete ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [introComplete]);

  const [showDevLog, setShowDevLog] = useState(false);
  const [revealedCards, setRevealedCards] = useState(new Set());
  const revealCard = useCallback((key) => {
    setRevealedCards(prev => new Set([...prev, key]));
  }, []);

  const droneTags = [
    'Python', 'OpenCV', 'YOLO', 'Raspberry Pi',
    'Pixhawk', 'ArduPilot', 'MAVLink', 'Linux',
  ];

  const pcbDesigns = useMemo(
    () => [
      {
        title: 'LED_Arduino',
        tech: ['KiCad', 'Eagle', 'Arduino', 'C/C++', 'Embedded C'],
        description:
          'A custom PCB designed to drive LEDs using an Arduino microcontroller — laying out the schematic, routing traces, and exporting fabrication-ready Gerber files.',
        highlights: [
          'Custom schematic and trace routing for LED control circuits',
          'Designed 3D model preview to verify component clearances',
          'Export-ready layout for PCB fabrication',
        ],
        images: [
          { src: pcb1Video, label: 'PCB Overview', type: 'video' },
          { src: `${process.env.PUBLIC_URL}/PCB_layout.png`, label: 'PCB Layout', type: 'image' },
        ],
        githubUrl: 'https://github.com/spiderpilo/LED_Arduino_PCB',
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: 'Assistive Social Cue Companion',
        image: socialCuePic,
        video: assistiveVideo,
        alt: 'Assistive Social Cue Companion',
        tech: ['React', 'TensorFlow.js', 'JavaScript'],
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
        title: 'FateDeck',
        image: fateDeckPic,
        video: fatedeckVideo,
        alt: 'FateDeck',
        tech: ['React', 'Node.js', 'OpenAI API', 'JavaScript'],
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
        video: mirrortaleVideo,
        alt: 'MirrorTale',
        tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'JavaScript'],
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
        title: 'AI-Powered Grocery List Assistant',
        image: groceryPic,
        alt: 'AI-Powered Grocery List Assistant',
        tech: ['React', 'Electron', 'Node.js', 'OpenAI API', 'JavaScript'],
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
        tech: ['React', 'Vite', 'Node.js', 'Google Maps API', 'JavaScript'],
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
    <>
      <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
        {!videoPlaying && !introGone && (
          <motion.div
            className="intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="intro-bubble-float">
              <motion.button
                className="intro-bubble"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 13, delay: 0.35 } }}
                exit={{ scale: 18, opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                whileHover={{ scale: 1.12, y: -8 }}
                whileTap={{ scale: 0.91 }}
                onClick={() => setIntroGone(true)}
                aria-label="Enter"
              >
                <div className="intro-icon-wrap">
                  <img src={pioloIcon} alt="piolo" className="intro-icon" />
                  <img src={pioloIconWhite} alt="" className="intro-icon-white" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoPlaying && (
          <motion.div
            className="dragon-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <video
              className="dragon-video"
              autoPlay
              muted
              playsInline
              onEnded={() => setVideoPlaying(false)}
            >
              <source src={`${process.env.PUBLIC_URL}/dragon.mp4`} type="video/mp4" />
            </video>
            <button
              className="dragon-skip"
              onClick={() => setVideoPlaying(false)}
            >
              skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {introComplete && <div className="page-wrapper">

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

        <p className="hero-sub">I build stuff...</p>

        <motion.div
          className="button-row"
          variants={shouldReduceMotion ? undefined : buttonsContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'visible'}
        >
          <motion.button className="my-button" variants={buttonItem} whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }} onClick={() => scrollToCentered('about')}>
            About
          </motion.button>

          <motion.button className="my-button" variants={buttonItem} whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -4 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }} onClick={() => scrollToTop('robotics')}>
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
          className={`about-card${revealedCards.has('about') ? ' card-revealed' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={() => revealCard('about')}
        >
          <div className="card-mask">
            <img src={pioloIcon} alt="" className="card-mask-icon" />
          </div>
          <div className="about-card-inner">
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
          </div>
        </motion.div>
      </section>

      <section id="robotics" className="section robotics-section">
        <div className="section-intro">
          <motion.span className="section-intro-accent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, amount: 0.8 }} />
          <motion.h2 {...sectionIntroMotion(0.1)}>Robotics</motion.h2>
          <motion.p className="section-intro-sub" {...sectionIntroMotion(0.22)}>
            Autonomous UAVs, embedded systems, and physical AI.
          </motion.p>
        </div>

        <motion.article
          className={`drone-card${revealedCards.has('drone') ? ' card-revealed' : ''}`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.12 }}
          onMouseEnter={() => revealCard('drone')}
        >
          <div className="card-mask">
            <img src={pioloIcon} alt="" className="card-mask-icon" />
          </div>
          {/* Banner */}
          <div className="drone-banner">
            <img src={dronePic} alt="AI Vision Drone" className="drone-banner-img" loading="lazy" />
            <div className="drone-banner-overlay" />
            <div className="drone-grid-overlay" />
            <div className="drone-reticle" />
            <span className="drone-status-badge">
              <span className="status-dot" />
              In Active Development
            </span>
          </div>

          {/* Content */}
          <div className="drone-content">
            <h3 className="drone-title">AI Vision Drone / Autonomous UAV Platform</h3>

            <div className="drone-description">
              <p>
                An ongoing autonomous UAV project focused on combining AI, robotics, and embedded systems
                into a custom-built aerial platform. The system integrates a Raspberry Pi companion
                computer, Pixhawk flight controller, computer vision pipelines, and real-time telemetry
                to explore physical AI applications such as subject tracking, autonomous assistance, and
                environmental awareness.
              </p>
              <p>
                The project involves both hardware and software engineering, including drone assembly,
                power distribution, sensor integration, embedded programming, computer vision
                experimentation, and AI-assisted navigation workflows. Current development includes
                integrating person detection using OpenCV and YOLO models on a Raspberry Pi while
                communicating with the flight controller through MAVLink telemetry systems.
              </p>
              <p>
                This project is being developed incrementally as a long-term engineering and research
                platform to deepen my understanding of autonomous systems, edge AI, robotics, and
                intelligent human-machine interaction.
              </p>
            </div>

            <p className="drone-section-label">Technologies</p>
            <div className="drone-chip-grid">
              {droneTags.map((tag) => (
                <motion.span
                  key={tag}
                  className="drone-chip"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="drone-actions">
              <button className="my-button project-button icon-btn" onClick={() => openLink('https://github.com/spiderpilo/Drone_AI_UAV')}>
                <FaGithub size={18} />
              </button>
              <button
                className="my-button project-button"
                onClick={() => setShowDevLog((v) => !v)}
              >
                {showDevLog ? 'Hide Dev Log' : 'Development Log'}
              </button>
            </div>

            <AnimatePresence>
              {showDevLog && (
                <motion.div
                  className="drone-log"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="drone-log-inner">
                    <div className="drone-log-entry">
                      <span className="log-tag">Active</span>
                      <p>
                        Integrating person detection using OpenCV and YOLO on a Raspberry Pi.
                        Establishing MAVLink communication layer between the companion computer and
                        Pixhawk flight controller for telemetry feedback and command relay.
                      </p>
                    </div>
                    <div className="drone-log-entry">
                      <span className="log-tag">Upcoming</span>
                      <p>
                        Full technical writeups, testing logs, and build documentation will be
                        published here as development progresses. Videos and annotated build
                        photos coming soon.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.article>
      </section>

      <section id="software" className="section software-section">
        <div className="section-intro">
          <motion.span className="section-intro-accent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, amount: 0.8 }} />
          <motion.h2 {...sectionIntroMotion(0.1)}>Software</motion.h2>
          <motion.p className="section-intro-sub" {...sectionIntroMotion(0.22)}>
            Web apps, AI tools, and interactive experiences.
          </motion.p>
        </div>

        <div className="projects-list">
          {projects.map((p, index) => {
            const motionProps = {
              ...projectCardMotion,
              transition: { ...projectCardMotion.transition, delay: index * 0.13 },
            };

            return (
              <motion.article key={p.title} className={`project-card${revealedCards.has(p.title) ? ' card-revealed' : ''}`} {...motionProps} onMouseEnter={() => revealCard(p.title)}>
                <div className="card-mask">
                  <img src={pioloIcon} alt="" className="card-mask-icon" />
                </div>
                <div className="project-image-wrap">
                  {p.video ? (
                    <video className="project-image" autoPlay muted loop playsInline>
                      <source src={p.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={p.image} alt={p.alt} className="project-image" loading="lazy" />
                  )}
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
                      <button className="my-button project-button icon-btn" onClick={() => openLink(p.liveUrl)}>
                        <FaExternalLinkAlt size={16} />
                      </button>
                    )}

                    <button className="my-button project-button icon-btn" onClick={() => openLink(p.githubUrl)}>
                      <FaGithub size={18} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="pcb-designs" className="section pcb-section">
        <div className="section-intro">
          <motion.span className="section-intro-accent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, amount: 0.8 }} />
          <motion.h2 {...sectionIntroMotion(0.1)}>PCB Designs</motion.h2>
          <motion.p className="section-intro-sub" {...sectionIntroMotion(0.22)}>
            Custom circuits, hardware prototyping, and embedded electronics.
          </motion.p>
        </div>

        <div className="pcb-list">
          {pcbDesigns.map((p) => (
            <motion.article key={p.title} className={`project-card pcb-card${revealedCards.has(p.title) ? ' card-revealed' : ''}`} {...projectCardMotion} onMouseEnter={() => revealCard(p.title)}>
              <div className="card-mask">
                <img src={pioloIcon} alt="" className="card-mask-icon" />
              </div>
              <div className="pcb-image-gallery">
                {p.images.map((img) => (
                  <div key={img.label} className="pcb-image-item">
                    <div className="project-image-wrap">
                      {img.type === 'video' ? (
                        <video className="project-image" autoPlay muted loop playsInline>
                          <source src={img.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={img.src} alt={img.label} className="project-image" loading="lazy" />
                      )}
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
                  <button className="my-button project-button icon-btn" onClick={() => openLink(p.githubUrl)}>
                    <FaGithub size={18} />
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
    </div>}
    </>
  );
}

export default App;