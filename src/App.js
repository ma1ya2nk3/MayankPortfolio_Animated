
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="p-4 flex justify-between bg-gradient-to-r from-blue-700 to-purple-700 text-white sticky top-0 z-10 shadow-lg">
      <h1 className="font-bold text-xl">Mayank</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
      </div>
    </nav>
  );
}

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition} className="p-10 text-center">
      <h1 className="text-5xl font-bold mb-4 text-white">Mayank Awasthi</h1>
      <p className="text-xl text-gray-200">Java Full Stack Engineer with 3+ years experience in Spring Boot, Microservices, React & AWS.</p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl shadow">Download CV</button>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition} className="p-10 text-white">
      <h2 className="text-3xl font-semibold mb-3">About Me</h2>
      <p>B.Tech in CSE from Lovely Professional University. Certified from IIT Kharagpur & Telusko in Spring Boot & AI.</p>
    </motion.div>
  );
}

function Experience() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition} className="p-10 space-y-6 text-white">
      <div>
        <h3 className="text-2xl font-bold">L&T Technology Services (2021-2024)</h3>
        <ul className="list-disc ml-6">
          <li>Designed REST microservices reducing latency by 32%</li>
          <li>Migrated WinForms to React & Spring stack increasing adoption by 2.1x</li>
          <li>Built CI/CD with Jenkins, Docker, Kubernetes cutting deployment time 40%</li>
        </ul>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition} className="p-10 space-y-6 text-white">
      <div>
        <h3 className="text-2xl font-bold">Data Rebranding</h3>
        <p>Refactored monolithic WinForms platform into microservices, boosting performance by 28%. Built modular React UI raising NPS to 8.2.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Danaher</h3>
        <p>Modernized backend with OAuth2 and React UI, eliminating 60% security vulnerabilities.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Volvo API Platform</h3>
        <p>Designed & documented REST APIs serving 100K+ calls under 200ms latency with caching & auth layers.</p>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-center text-white mt-10">
      <button onClick={() => window.open('Mayank_Awasthi_Resume_Redesigned.pdf','_blank')} className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700">Download Resume PDF</button>
      <p className="mt-4 text-sm">© 2025 Mayank Awasthi</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
