'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Cards from "@/components/utilities/Cards";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* //!EACH SECTION HAS A VIEW MORE OR KNOWMRE CURSER POINTER ON THE BOTTOM RIGHT OF THE SECTION */}
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <AboutSection />
      <TestimonialSection />
      <FeatureSection />
      <FAQSection />
      <CallToActionSection />

    </div>
  );
}





function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return <motion.div
    ref={ref}
    style={{ opacity, y }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <section
      className="relative" >
      <h2 className="sr-only">Hero Section</h2>
      <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 md:pt-52"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:w-1/2">
          <motion.h1
            className="text-3xl overflow-hidden font-extrabold text-white sm:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {["Empowering", "businesses", "with", "Innovative", "Tech", "Solutions"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0, 0.71, 0.2, 1.01]
                    }
                  }
                }}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={{
                      hidden: { rotateX: 90 },
                      visible: {
                        rotateX: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg text-white sm:text-xl/relaxed"
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            {["Techserve", "offers", "customized", "digital", "solutions", "to", "optimize", "your", "online", "presence", "and", "drive", "business", "growth."].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="block w-full rounded bg-rose-600 px-8 sm:px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
              >
                About
              </Link>
            </motion.div>

            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="block w-full rounded bg-white px-8 sm:px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/images/hero.png"
              alt="Tech Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  </motion.div>;
}



function ServiceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [.7, 1]);

  return <motion.div
    ref={ref}
    style={{ opacity, y, scale }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h2 className="text-4xl lg:text-6xl font-bold text-left text-white">Service Section</h2>
    <section className="bg-gray-900 rounded-xl mx-auto">

      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h3 className="text-2xl font-bold sm:text-4xl">Our Tech Solutions</h3>

            <p className="mt-4 text-gray-600">
              At Techserve, we offer a wide range of innovative tech solutions designed to meet your unique business needs. Our client-centric approach ensures that each solution is tailored to optimize your digital presence and drive growth.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Explore Our Services
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Web Development</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Custom websites tailored to your business needs.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">App Development</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Innovative mobile apps for iOS and Android.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">UI/UX Design</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                User-centric designs for optimal experiences.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Video Production</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Professional video shooting and editing.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Digital Marketing</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Strategies to boost your online presence.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-[#4F46E5] p-3">
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Customized Solutions</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Tailored tech solutions for your business.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </motion.div>;
}

function ProjectSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);

  const projects = [
    { title: "E-commerce Platform", description: "A brief description of Project 1", imageUrl: "/images/p1.png", technologies: ['React', 'Node.js', 'MongoDB'] },
    { title: "Social Media Dashboard", description: "An overview of Project 2", imageUrl: "/images/p2.png", technologies: ['Vue.js', 'Express', 'PostgreSQL'] },
    { title: "Task Management System", description: "Details about Project 3", imageUrl: "/images/p3.png", technologies: ['Angular', 'Django', 'MySQL'] },
    { title: "Mobile Fitness App", description: "Highlights of Project 4", imageUrl: "/images/p4.png", technologies: ['React Native', 'Firebase', 'GraphQL'] },
    { title: "Portfolio Website", description: "Key features of Project 5", imageUrl: "/images/p5.png", technologies: ['Next.js', 'Tailwind CSS', 'Supabase'] },
    { title: "Real-time Chat Application", description: "Summary of Project 6", imageUrl: "/images/p6.png", technologies: ['Svelte', 'FastAPI', 'Redis'] },
    { title: "Cross-platform Mobile Game", description: "Main aspects of Project 7", imageUrl: "/images/p7.png", technologies: ['Flutter', 'Spring Boot', 'Elasticsearch'] },
    { title: "Microservices Architecture", description: "Core elements of Project 8", imageUrl: "/images/p8.png", technologies: ['TypeScript', 'NestJS', 'Docker'] },
    { title: "Headless CMS Blog", description: "Unique features of Project 9", imageUrl: "/images/p1.png", technologies: ['Gatsby', 'Strapi', 'AWS'] },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">Project Section</h2>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Cards
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return <motion.div
    ref={ref}
    style={{ opacity, scale }}
  >
    <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">About Section</h2>
    <section>
      <h2 className="sr-only">About Section</h2>
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl text-white"> Techserve</h2>
            <p className="mt-4 text-gray-300">
              At Techserve, we're passionate about leveraging technology to drive business growth. With years of experience and a team of skilled professionals, we deliver innovative solutions tailored to your unique needs.
            </p>
            <motion.a
              href="/about"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-rose-600 border border-rose-600 rounded active:text-rose-500 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/group1.png"
              alt="About Techserve"
              width={600}
              height={400}
              className="object-cover w-full h-56 shadow-lg rounded-lg sm:h-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  </motion.div>;
}

function TestimonialSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content: "Techserve's solutions have revolutionized our operations. Their expertise is unmatched!",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Marketing Director, InnovateCo",
      content: "The team at Techserve truly understands digital marketing. Our online presence has never been stronger.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Mike Johnson",
      role: "CTO, FutureTech",
      content: "Implementing Techserve's custom software solution has increased our productivity tenfold.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const totalWidth = testimonials.length * 100;
    const scrollSpeed = 0.8; // Same scroll speed for both mobile and desktop
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + scrollSpeed;
        return newPosition >= totalWidth ? 0 : newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">Testimonial</h2>
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 w-full" >
        <h2 className="sr-only">Testimonial Section</h2>
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
          <motion.div
            className="max-w-screen-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mb-8 font-light text-gray-300 lg:mb-16 sm:text-xl">
              Discover how Techserve has transformed businesses through innovative solutions.
            </p>
          </motion.div>
          <div className="mt-8 overflow-hidden">
            <motion.div
              className="flex"
              style={{
                x: `-${scrollPosition}%`,
                transition: "transform 0.05s linear",
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg shadow-xl flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  style={{ marginRight: "2rem" }}
                >
                  <img
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                  />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
                  <p className="text-gray-300">{testimonial.content}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function FeatureSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return <motion.div
    ref={ref}
    style={{ opacity, y }}
  >
    <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">Feature Section</h2>
    <section className="bg-gray-900 text-white">
      <h2 className="sr-only">Feature Section</h2>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              alt="App"
              src="/images/light-girl.png"
              width={600}
              height={400}
            />
          </motion.div>

          <div className="lg:py-24">
            <motion.h2
              className="text-3xl font-bold sm:text-4xl text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovative Solutions for Your Business
            </motion.h2>

            <motion.p
              className="mt-4 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our cutting-edge technology and expert team deliver tailored solutions to drive your business forward. From web development to digital marketing, we've got you covered.
            </motion.p>

            <motion.a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  </motion.div>;
}

function FAQSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return <motion.div
    ref={ref}
    style={{ opacity, y }}
  >
    <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">FAQ Section</h2>
    <section className="bg-[#0A0A0A] text-white user-select-none">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mt-8 space-y-8">
          {[
            {
              question: "What services does Techserve offer?",
              answer: "Techserve offers a comprehensive range of digital solutions including web development, mobile app development, UI/UX design, digital marketing, and custom software development. We tailor our services to meet the unique needs of each client."
            },
            {
              question: "How does Techserve ensure project success?",
              answer: "We follow a rigorous project management approach, combining agile methodologies with clear communication. Our team of experts works closely with clients throughout the development process, ensuring timely delivery and high-quality results."
            },
            {
              question: "What industries does Techserve serve?",
              answer: "Techserve has experience working with a diverse range of industries including e-commerce, healthcare, finance, education, and more. Our versatile team adapts our solutions to meet the specific requirements of each sector."
            },
            {
              question: "How can Techserve help improve my business's online presence?",
              answer: "We offer comprehensive digital marketing services, including SEO, social media management, and content creation. Our strategies are designed to increase your online visibility, engage your target audience, and drive conversions."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="group border-b border-gray-700 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <details className="group cursor-pointer">
                <summary className="flex items-center justify-between py-4">
                  <motion.h3
                    className="font-medium"
                    whileHover={{ scale: 1.05, color: "#4FD1C5" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {faq.question}
                  </motion.h3>
                  <motion.svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </summary>
                <motion.p
                  className="mt-4 leading-relaxed text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    height: { duration: 0.4, type: "spring" }
                  }}
                >
                  {faq.answer}
                </motion.p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>;
}

function CallToActionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return <motion.div
    ref={ref}
    style={{ opacity, scale }}
  >
    <h2 className="text-4xl lg:text-6xl font-bold text-left text-white my-4 py-4 px-6">Call to Action </h2>
    <section className="bg-[#12141A] text-white">
      <h2 className="sr-only">Call to Action Section</h2>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="mt-4 text-xl">
              Partner with Techserve to unlock innovative tech solutions tailored to your business needs. From web development to digital marketing, we're here to help you optimize your online presence and drive growth.
            </p>
            <motion.div
              className="mt-8"
              
            >
              <Link
                href="/contacts"
                className="inline  rounded-md bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:shadow-inner"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  boxShadow: '0 4px 6px rgba(59, 130, 246, 0.5), 0 1px 3px rgba(0, 0, 0, 0.1)',
                }}
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { alt: "Web Development", src: "/images/web.jpg" },
              { alt: "App Development", src: "/images/mobile.png" },
              { alt: "Digital Marketing", src: "/images/digitalmarket.png" },
              { alt: "Data Analytics", src: "/images/dataanalysis.png" }
            ].map((image, index) => (
              <motion.div
                key={index}
                className="h-40 w-full sm:h-56 relative overflow-hidden rounded-lg shadow-lg"
                animate={{ rotateY: [0, 180, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: index * 0.3
                }}
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </motion.div>;
}
