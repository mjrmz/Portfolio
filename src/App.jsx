import { useState, useEffect } from "react";
import "./App.css";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGithub,
  FaAndroid,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiAutodesk, SiC } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  
  // ================= SCROLL REVEAL =================
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) el.classList.add("active");
        else el.classList.remove("active");
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("load", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  // ================= TYPING EFFECT =================
  const roles = ["Computer Engineer", "Embedded Systems Engineer", "Web Developer", "CAD Drafter"];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = 1200;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullText.length) setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // ================= TECH STACK =================
  const techStacks = [
    { icon: <FaJava />, name: "Java", className: "tech-java" },
    { icon: <SiFlutter />, name: "Flutter", className: "tech-flutter" },
    { icon: <SiFirebase />, name: "Firebase", className: "tech-firebase" },
    { icon: <FaHtml5 />, name: "HTML5", className: "tech-html" },
    { icon: <FaCss3Alt />, name: "CSS3", className: "tech-css" },
    { icon: <FaJs />, name: "JavaScript", className: "tech-js" },
    { icon: <FaReact />, name: "React", className: "tech-react" },
    { icon: <FaDatabase />, name: "MySQL", className: "tech-mysql" },
    { icon: <FaGithub />, name: "GitHub", className: "tech-github" },
    { icon: <FaAndroid />, name: "Android", className: "tech-android" },
    { icon: <SiC />, name: "C", className: "tech-c" },
    { icon: <SiAutodesk />, name: "AutoCAD", className: "tech-autocad" },
  ];

  // ================= PROJECTS =================
  const projects = [
  {
    title: "Mobile App for Reverse Vending Machine",
    short: "Flutter app for IoT-enabled RVM with cash denomination and monitoring.",
    images: ["app1.jpg", "app2.jpg", "app3.jpg", "app4.jpg","app5.jpg", "app6.jpg", "app7.jpg","app8.jpg", "app9.jpg" ],
    technologies: ["Flutter", "Firebase", "IoT", "Dart"],
    responsibilities: [
      "Developed full UI and frontend screens",
      "Designed backend logic and Firebase structure",
      "Implemented cash denomination settings",
      "Built storage monitoring and collection history",
      "Integrated real-time Firestore updates"
    ],
    thumbnail: "/appthumbnail.webp"
  },
  {
    title: "Reverse Vending Machine",
    short: "ESP32-based RVM with accurate dispensing and Firebase logging.",
    images: ["/project2.jpg", "/p2b.jpg"],
    technologies: ["ESP32", "HX711", "Servo", "Firebase"],
    responsibilities: [
      "Led hardware & software development",
      "Designed sensor-based detection logic",
      "Integrated Firebase logging system",
      "Implemented accurate coin dispensing",
      "Added LCD UI for user instructions"
    ],
    thumbnail: "machine.png"
  },
  {
    title: "Payroll Application",
    short: "Java desktop payroll with allowances, deductions & employee records.",
    images: ["/p3a.jpg"],
    technologies: ["Java", "MySQL", "NetBeans"],
    responsibilities: [
      "Designed UI using Java Swing",
      "Developed full payroll computation engine",
      "Built employee management module",
      "Integrated MySQL database",
      "Handled CRUD operations and validation"
    ],
    thumbnail: "/payroll.webp"
  },
  {
    title: "Robotic Arm",
    short: "4-DOF servo robotic arm controlled via joystick.",
    images: ["/robotic1.mp4"],
    technologies: ["Arduino", "Servo Motors", "Joystick"],
    responsibilities: [
      "Led mechanical & electronic design",
      "Planned 4-DOF movement system",
      "Implemented servo control logic",
      "Built joystick manual control",
      "Developed full project documentation"
    ],
    thumbnail: "/robotarm.jpg"
  },
  {
    title: "Automatic Trash Can",
    short: "Touchless sensor-based smart trash bin with servo.",
    images: ["/trash1.jpg", "/trash2.jpg", "/trash.mp4"],
    technologies: ["Arduino", "Ultrasonic Sensor", "Servo"],
    responsibilities: [
      "Led the project from planning to completion",
      "Implemented auto-open sensor logic",
      "Designed servo lid mechanism",
      "Built prototype housing"
    ],
    thumbnail: "/trash.webp"
  }
];

  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${dark ? "dark" : ""}`}>
        <div className="navbar-left">
          <span className="navbar-logo">MJ</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-right">
          <button className="dark-mode-btn" onClick={() => setDark(!dark)}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU + OVERLAY ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu-btn" onClick={() => setMenuOpen(false)}><FaTimes /></button>
        <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
        <a onClick={() => setMenuOpen(false)} href="#tech">Tech Stack</a>
        <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setMenuOpen(false)} href="#about">About</a>
        <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* ================= HERO ================= */}
      <header id="home" className="hero reveal">
        <div className="hero-left">
          {/* Welcome line */}
          <span className="hero-welcome">Welcome to my Profile!</span>

          <div className="hero-hi-name">
            <span className="hero-hi">Hi, I'm</span>
            <span className="hero-name">Marjorie Jayne Ramirez</span>
          </div>

          <h3 className="typing-title">
            <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
          </h3>

          <p className="hero-desc">
            I build modern web/mobile apps and engineering solutions.
            Passionate about IoT, automation, and software development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">Projects</a>
            <a href="/MJ_Ramirez_CV.pdf" className="btn secondary-btn" download>Download CV</a>
          </div>
        </div>

        <div className="hero-right profile-wrapper">
          <img src="/profile.jpg" alt="profile" className="profile-img" />
        </div>
      </header>


      {/* ================= TECH STACK ================= */}
      <section id="tech" className="section reveal">
        <h2>Tech Stack</h2>
        <div className="tech-wrapper">
          {techStacks.map((tech, index) => (
            <div key={index} className={`tech-card reveal ${tech.className}`}>
              {tech.icon}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{ rotate: 25, stretch: 0, depth: 150, modifier: 1, slideShadows: true }}
          pagination={{ clickable: true }}
          className="project-swiper"
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className="project-card reveal" onClick={() => openProjectModal(proj)}>
                <div className="project-card-inner">
                  <div className="project-card-image">
                     {proj.thumbnail && <img src={proj.thumbnail} alt={proj.title} />}
                  </div>
                  <div className="project-card-content">
                    <h3>{proj.title}</h3>
                   {proj.short && <p className="project-short">{proj.short}</p>}

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

{/* ================= PROJECT MODAL ================= */}
{selectedProject && (
  <div className="project-modal-overlay" onClick={closeProjectModal}>
    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
      
      <h2 className="modal-title">{selectedProject.title}</h2>

      {/* Media Swiper (Images & Videos) */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="modal-swiper"
      >
        {selectedProject.images.map((media, index) => (
          <SwiperSlide key={index}>
            <div className="image-frame">
              {media.endsWith(".mp4") ? (
                <video
                  src={media}          // path relative to public folder
                  controls
                  autoPlay={false}
                  loop
                  muted={false}
                  playsInline
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              ) : (
                <img
                  src={media}
                  alt={`${selectedProject.title} ${index + 1}`}
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Technologies */}
      <div className="project-tech">
        <h4>Technologies</h4>
        <div className="tech-badges">
          {selectedProject.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="project-role">
        <h4>Responsibilities</h4>
        <ul>
          {selectedProject.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

    </div>
  </div>
)}


      {/* ================= ABOUT ================= */}
      <section id="about" className="section reveal">
        <div className="about-card">
          <h2>About Me</h2>
          <p className="about-text">
            When I was younger, I was sure I’d become a doctor—until I realized I’m much better at fixing circuits than dealing with needles. Senior high rolled in, and suddenly engineering looked way more exciting than memorizing medical terms.
            <br /><br />
            I started in Mechanical Engineering, but after a year of pretending I understood thermodynamics, I shifted to Computer Engineering—easily one of the best plot twists of my life.
            <br /><br />
            From there, I finally got to build the “cool projects” I always imagined: embedded systems, microcontrollers, sensors, and the occasional wire that smokes because I “thought it would work this time.” Eventually, I dove into software too, writing code to convince my hardware to behave.
            <br /><br />
            Now I get to enjoy the best of both worlds: IoT devices, embedded electronics, and full-stack software development. I don’t just build things—I create solutions that blend hardware and software into something useful, smart, and sometimes unintentionally funny.
          </p>
        </div>
      </section>

  
      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section reveal">
        <h2>Contact Me</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <a href="mailto:mjramirez44464@gmail.com">mjramirez44464@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <span>0939 178 0053</span>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <span>Davao City, Philippines</span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="reveal">
        <p>© {new Date().getFullYear()} • Built by Marjorie Jayne Ramirez</p>
      </footer>
    </div>
  );
}
