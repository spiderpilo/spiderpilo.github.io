import './App.css';
import { motion } from 'framer-motion';
import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';

// Parent animation: controls overall group and staggering
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 }
  }
};

// Individual button animation
const item = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

function App() {
  const handleGitHubClick = () => {
    window.open('https://github.com/spiderpilo', '_blank', 'noopener,noreferrer');
  };

  const handleAboutClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* HERO SECTION */}
      <motion.div
        className="centered hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>
          hi, i&apos;m <span className="bold-name">piolo</span>
        </h1>
        <p>I code sometimes...</p>
        <p>
          I am a <b>software developer</b> based in California with a huge interest in full stack
          development, AI, and — most of all — beautiful user experience.
        </p>

        <motion.div
          className="button-row"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleAboutClick}
          >
            About
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleGitHubClick}
          >
            GitHub
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleContactClick}
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <motion.img
          src={profilePic}
          alt="Piolo"
          className="profile-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <h2>About Me</h2>
        <p>
          Hi, I’m <b>Piolo</b> — a guy that codes cometimes; based in California with a passion for
          building clean, aesthetic, and meaningful digital experiences. I’m currently
          studying Computer Science and working on personal projects that combine design,
          logic, and usability.
        </p>
        <p>
          I enjoy full-stack development, experimenting with AI, and crafting smooth,
          thoughtful user interfaces. My goal is to create software that feels as good
          as it looks.
        </p>
        <p>
          When I’m not coding, I’m probably sketching UI ideas, learning something new,
          or exploring ways technology can make everyday life better.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>
          I’d love to connect! Reach me at{' '}
          <a className="email-link" href="mailto:piolo.patag@gmail.com">
            piolo.patag@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
