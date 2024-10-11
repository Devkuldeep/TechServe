"use client"
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16 overflow-hidden"
    >
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <CareersSection />
    </motion.div>
  );
}

     function HeaderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      opacity: 1,
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    text: {
      opacity: 1,
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => {
    setCursorVariant("text");
    setIsHovering(true);
  };
  const textLeave = () => {
    setCursorVariant("default");
    setIsHovering(false);
  };

  return (
    <motion.div 
      ref={ref}
      style={{
        opacity,
        y
      }}
      className="relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white py-16 md:py-40 overflow-hidden select-none"
    >
      <motion.div 
        className="cursor fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28
        }}
      />
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isHovering ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(190, 18, 60, 0.5), rgba(50, 44, 140, 0.5), rgba(10, 10, 10, 0.5))` : 'none'
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1 
          style={{
            scale
          }}
          className="text-7xl md:text-9xl font-extrabold mb-12 text-center leading-tight"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {['The', ' ', 'Techserve', ' ', 'Journey'].map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 2 ? "inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-light mb-16"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          From humble beginnings to industry leaders: Our mission to revolutionize digital solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div 
            className="bg-gradient-to-br from-[#111824] to-[#1F2937] p-10 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            whileInView={{ backgroundColor: "#1F2937" }}
            viewport={{ once: false, amount: 0.8 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#FF4D6D]">Founded in 2010</h3>
            <p className="text-gray-200 text-lg">
              Techserve was born from a vision to bridge the gap between businesses and cutting-edge technology.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-[#111824] to-[#1F2937] p-10 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            whileInView={{ backgroundColor: "#1F2937" }}
            viewport={{ once: false, amount: 0.8 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#4361EE]">Our Goal</h3>
            <p className="text-gray-200 text-lg">
              To empower companies of all sizes with innovative, tailored digital solutions that drive growth and success in the digital age.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-[#111824] to-[#1F2937] p-10 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            whileInView={{ backgroundColor: "#1F2937" }}
            viewport={{ once: false, amount: 0.8 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#FF4D6D]">Today</h3>
            <p className="text-gray-200 text-lg">
              We continue to push boundaries, staying at the forefront of technological advancements to serve our clients better.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
     }
  function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-gradient-to-b from-[#111824] to-[#1F2937] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold mb-12 text-[#FF4D6D] text-center"
        >
          Our Mission 
        </motion.h2> */}

        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold mb-16 text-center text-[#edecec]"
        >
       Our Mission <span className="inline-block text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]"> & Vision</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#4361EE]">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Techserve, we are dedicated to empowering businesses with cutting-edge digital solutions. Our mission is to bridge the gap between innovative technology and business needs, driving growth and success in the digital age.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#141C2B] p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#FF4D6D]">Our Vision</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              We envision a future where every business, regardless of size, can harness the full potential of technology. Our goal is to be at the forefront of digital innovation, continuously pushing boundaries to provide unparalleled solutions that transform industries and drive global progress.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-[#1A2332] p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#FF4D6D]">Our Approach</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Techserve takes pride in its client-centric, innovative approach. We believe in:
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="text-[#4361EE] mr-2">✓</span> Tailoring solutions to each client&apos;s unique needs
            </li>
            <li className="flex items-center">
              <span className="text-[#4361EE] mr-2">✓</span> Staying ahead of technological trends
            </li>
            <li className="flex items-center">
              <span className="text-[#4361EE] mr-2">✓</span> Fostering long-term partnerships with our clients
            </li>
            <li className="flex items-center">
              <span className="text-[#4361EE] mr-2">✓</span> Delivering measurable results and ROI
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#111824] via-transparent to-[#1F2937] opacity-50"></div>
    </motion.section>
  );
}

function ServicesSection() {
  const services = [
    { name: "Web Development", icon: "🌐", description: "Custom websites tailored to your business needs, from responsive designs to complex web applications." },
    { name: "App Development", icon: "📱", description: "Native and cross-platform mobile apps that deliver seamless user experiences across all devices." },
    { name: "UI/UX Design", icon: "🎨", description: "Intuitive and visually appealing interfaces that enhance user engagement and satisfaction." },
    { name: "Cloud Solutions", icon: "☁️", description: "Scalable and secure cloud infrastructure to power your business operations and data management." },
    { name: "AI & Machine Learning", icon: "🤖", description: "Intelligent systems that automate processes, provide insights, and drive data-driven decision making." },
    { name: "Cybersecurity", icon: "🔒", description: "Robust security measures to protect your digital assets and ensure data integrity." },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{
        opacity
      }}
      className="py-20 bg-gradient-to-b from-[#111824] to-[#1A2332]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center text-[#edecec]"
        >
        Our Cutting <span className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]"> Edge Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141C2B] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#4361EE]">{service.name}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TeamSection() {
  const team = [
    { name: "Alex Johnson", role: "CEO & Founder", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sarah Lee", role: "CTO", image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Michael Chen", role: "Lead Designer", image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Emily Rodriguez", role: "Head of Marketing", image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-[#1A2332]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center text-[#edecec]"
        >
          Meet Our <span className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]"> Visionary Team</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141C2B] rounded-2xl shadow-xl overflow-hidden"
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#4361EE]">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ClientsSection() {
  const clients = [
    { name: "TechCorp" },
    { name: "InnovateTech" },
    { name: "FutureSystems" },
    { name: "GlobalTech" },
    { name: "NextGen Solutions" },
    { name: "SmartTech" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-[#111824]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center text-[#FF4D6D]"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[200px] mx-20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-400 font-bold text-4xl whitespace-nowrap hover:text-gray-200 transition-all duration-300 text-center">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function CareersSection() {
  const openings = [
    { title: "Senior Full Stack Developer", department: "Engineering", icon: "💻" },
    { title: "UX/UI Designer", department: "Design", icon: "🎨" },
    { title: "Data Scientist", department: "AI & Analytics", icon: "📊" },
    { title: "Digital Marketing Specialist", department: "Marketing", icon: "📱" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, y }}
      className="py-24 bg-gradient-to-b from-[#1A2332] to-[#111824] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]"
        >
          Join Our Innovative Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#1F2937] to-[#111824] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{job.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-[#4361EE]">{job.title}</h3>
                  <p className="text-gray-400">{job.department}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">Join our dynamic team and work on cutting-edge projects that shape the future of technology.</p>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#5651E5" }}
                whileTap={{ scale: 0.95 }}
                initial={{ backgroundColor: "#4338CA" }}
                animate={{ backgroundColor: "#4338CA" }}
                transition={{ duration: 0.3 }}
                className="text-white py-2 px-6 rounded-md text-lg font-semibold"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-gray-300 mb-8">Don&apos;t see a position that fits your skills?</p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5651E5" }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "#4338CA" }}
            animate={{ backgroundColor: "#4338CA" }}
            transition={{ duration: 0.3 }}
            className="text-white py-3 px-8 rounded-md text-xl font-semibold shadow-lg"
          >
            Send Us Your Resume
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
    </motion.section>
  );
}
