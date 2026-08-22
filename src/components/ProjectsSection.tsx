import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Face Recognition Attendance System',
    category: 'PYTHON / COMPUTER VISION',
    description:
      'Built a Python-based system that automates attendance tracking using facial recognition. Implemented face encoding for numerical representation and matching against a database for secure identity verification with real-time processing optimization.',
    githubUrl: '/',
    tech: [
      'Python',
      'OpenCV',
      'Face Recognition',
      'NumPy',
      'Database',
      'Computer Vision',
    ],
    metrics: [
      { label: 'SYSTEM', value: 'Automated Tracking' },
      { label: 'PROCESSING', value: 'Real-Time' },
      { label: 'VERIFICATION', value: 'Face Encoding' },
    ],
  },
  {
    number: '02',
    title: 'Smart Door Lock System   (Final Year Project)',
    category: 'IOT / EMBEDDED SYSTEMS',
    description:
      'Developed a secure access control system using Raspberry Pi and a deep learning camera. Enabled real-time face detection and matching against stored encodings with integrated voice recognition as a secondary verification layer.',
    githubUrl: '/',
    tech: [
      'Raspberry Pi',
      'Python',
      'Deep Learning',
      'Face Recognition',
      'Voice Recognition',
      'IoT',
    ],
    metrics: [
      { label: 'HARDWARE', value: 'Raspberry Pi' },
      { label: 'SECURITY', value: 'Dual-Layer (Face+Voice)' },
      { label: 'DETECTION', value: 'Real-Time' },
    ],
  },
  {
    number: '03',
    title: 'Emotion Recognition System   (Hackathon Project)',
    category: 'MACHINE LEARNING / C++',
    description:
      'Designed a Python and C++ model to detect human emotions from facial expressions. Programmed dynamic responses such as UI color changes and alerts by fine-tuning CNN-based emotion classification models.',
    githubUrl: '/',
    tech: [
      'Python',
      'C++',
      'Machine Learning',
      'CNN',
      'OpenCV',
      'Deep Learning',
    ],
    metrics: [
      { label: 'MODELS', value: 'CNN Classification' },
      { label: 'LANGUAGES', value: 'Python & C++' },
      { label: 'ACCURACY', value: 'High Precision' },
    ],
  },
  {
    number: '04',
    title: 'Automated Resume Builder',
    category: 'WEB APPLICATION / PRODUCTIVITY',
    description:
      'Created a user-friendly web application that generates professional resumes from form inputs. Offered customizable templates and PDF/DOCX export options, reducing resume creation time by 80% through automated formatting.',
    githubUrl: '/',
    tech: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'PDF / DOCX Export',
      'Form Validation',
    ],
    metrics: [
      { label: 'EFFICIENCY', value: '80% Time Reduction' },
      { label: 'EXPORTS', value: 'PDF & DOCX' },
      { label: 'TEMPLATES', value: 'Customizable' },
    ],
  },
  {
    number: '05',
    title: 'Pet Adoption Web Application',
    category: 'FULL-STACK / MERN APP',
    description:
      'Built a full-stack pet adoption website using the MERN stack. Added features for pet search, adoption requests, and user login, designed with a responsive UI using React.js and RESTful APIs.',
    githubUrl: '/',
    tech: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'STACK', value: 'MERN Stack' },
      { label: 'FEATURES', value: 'Search & Adoption' },
      { label: 'INTERFACE', value: 'Responsive UI' },
    ],
  },
  {
    number: '06',
    title: 'PG Search Web Application',
    category: 'WEB PLATFORM / REAL ESTATE',
    description:
      'Built a PG Search web app using React.js with dynamic property listings. Added advanced filters for location, price, and amenities to improve search accuracy, creating a responsive and user-friendly interface for smooth browsing.',
    githubUrl: '/',
    tech: [
      'React.js',
      'JavaScript',
      'REST APIs',
      'CSS3',
      'Responsive Design',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'React.js Web App' },
      { label: 'FILTERS', value: 'Location & Price' },
      { label: 'BROWSING', value: 'Smooth & Responsive' },
    ],
  },
  {
    number: '07',
    title: 'Employee Attendance System',
    category: 'ENTERPRISE / AUTOMATION',
    description:
      'Developed a dedicated employee attendance tracking and management system featuring automated logging, verification, and secure database management to streamline workforce operations and daily attendance reports.',
    githubUrl: '/',
    tech: [
      'Python',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Automation',
    ],
    metrics: [
      { label: 'SOLUTION', value: 'Workforce Tracking' },
      { label: 'AUTOMATION', value: 'Streamlined Logging' },
      { label: 'MANAGEMENT', value: 'Secure Database' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-4 sm:px-12 lg:px-20 overflow-visible z-10"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck - Responsive wrapper */}
        <div className="block lg:block">
          <ScrollStack
            itemDistance={window.innerWidth < 768 ? 40 : 20}
            itemScale={window.innerWidth < 768 ? 0.01 : 0.035}
            itemStackDistance={window.innerWidth < 768 ? 16 : 28}
            stackPosition="15%"
            scaleEndPosition="6%"
            baseScale={0.88}
            useWindowScroll={true}
          >
            {projects.map((project) => (
              <ScrollStackItem key={project.title}>
                <div className="relative w-full rounded-xl sm:rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-5 sm:p-8 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37] mb-6 lg:mb-0">
                  
                  {/* Top Gold Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                  {/* Corner Minimal L-Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                  {/* Big Background Watermark Number */}
                  <span
                    className="absolute -bottom-4 -right-2 text-7xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.number}
                  </span>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                    
                    {/* Left Column (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                          <span className="text-xs font-mono font-bold text-[#D4AF37]">
                            {project.number} //
                          </span>
                          <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                            {project.category}
                          </span>
                        </div>

                        <h3
                          className="text-2xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-white mb-3 sm:mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.6] sm:leading-[1.85] tracking-wide mb-5 sm:mb-8 max-w-2xl"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-6 border-t border-[#8C6D4F]/25">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[9.5px] sm:text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                      <div className="space-y-2.5 sm:space-y-3">
                        <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-1 sm:mb-2">
                          // ARCHITECTURE METRICS
                        </span>
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-2.5 sm:p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                          >
                            <span className="text-[9.5px] sm:text-[10px] font-mono text-[#A8988B]">
                              {m.label}
                            </span>
                            <span className="text-[10.5px] sm:text-[11px] font-mono font-medium text-[#F7E7C4]">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW ON GITHUB</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>

                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
