"use client"
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16 overflow-hidden"
    >
      <HeaderSection />
      <PopularProjectsSection />
      <ProjectTabs />
      <CallToActionSection />
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

  // This line creates a dynamic opacity value based on the scroll progress
  // It uses the useTransform hook from framer-motion to map scroll values to opacity values
  // As the user scrolls from 0% to 10% of the section, the opacity increases from 0 to 1
  // This creates a fade-in effect as the user starts scrolling into the section
  const opacity = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        opacity
      }}
      className="py-12 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-7xl font-bold mb-8 text-center text-darkGreenTextColor"
        >
          {["Our", "  ", "Projects"].map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (wordIndex * word.length + charIndex) }}
                  className={wordIndex === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]" : ""}
                >
                  {char}
                </motion.span>
              ))}
              {" "}
            </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl text-gray-300 text-center max-w-4xl mx-auto"
        >
          {["Explore our portfolio of innovative solutions and successful projects across various domains. From web applications to mobile apps, we've delivered cutting-edge technology to businesses of all sizes."].map((sentence, sentenceIndex) => (
            <span key={sentenceIndex} className="inline-block">
              {sentence.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * wordIndex }}
                  className="inline-block"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.p>
      </div>


      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#edecec] sm:text-4xl">Our Impact in Numbers</h2>

          <p className="mt-4 text-gray-300 sm:text-xl">
            We&apos;ve helped businesses across various industries achieve their goals through innovative technology solutions. Here&apos;s a snapshot of our impact.
          </p>
        </div>

        <dl
          className="mt-8 grid grid-cols-1 gap-4 divide-y divide-gray-700 sm:mt-10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-400">Projects Completed</dt>

            <dd className="text-4xl font-extrabold text-darkGreenTextColor md:text-5xl">100+</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-400">Client Satisfaction</dt>

            <dd className="text-4xl font-extrabold text-darkGreenTextColor md:text-5xl">98%</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-400">Team Members</dt>

            <dd className="text-4xl font-extrabold text-darkGreenTextColor md:text-5xl">50+</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-400">Years of Experience</dt>

            <dd className="text-4xl font-extrabold text-darkGreenTextColor md:text-5xl">10+</dd>
          </div>
        </dl>
      </div>

    </motion.section>
  );
}

function PopularProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const popularProjects = [
    {
      title: "E-commerce Redesign",
      description: "A complete overhaul of an online retail platform, focusing on user experience and conversion optimization.",
      image: "/images/p4.png"
    },
    {
      title: "HealthTech Mobile App",
      description: "An innovative mobile app for remote patient monitoring, built with React Native and integrated with wearable devices.",
      image: "/images/p2.png"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform leveraging machine learning for predictive insights and data visualization.",
      image: "/images/p12.png"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-darkGreenTextColor"
        >
          Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] to-[#4361EE]">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <motion.div 
      className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-darkGreenTextColor">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("Web Development");
  const tabs = ["Web Development", "Mobile Development", "AI & Machine Learning", "Digital Marketing"];

  const projectsByCategory = {
    "Web Development": [
      { title: "Corporate Website Redesign", description: "A modern, responsive redesign for a Fortune 500 company.", image: "/images/p5.png" },
      { title: "E-learning Platform", description: "A comprehensive online learning system with video courses and interactive quizzes.", image: "/images/p2.png" },
      { title: "Real Estate Listing Portal", description: "A feature-rich property listing and search platform with virtual tours.", image: "/images/p10.png" },
    ],
    "Mobile Development": [
      { title: "Fitness Tracking App", description: "A comprehensive fitness app with workout plans and progress tracking.", image: "/images/p1.png" },
      { title: "Food Delivery App", description: "A user-friendly food ordering and delivery app with real-time tracking.", image: "/images/p8.png" },
      { title: "Travel Companion App", description: "An all-in-one travel app with itinerary planning and local recommendations.", image: "/images/p7.png" },
    ],
    "AI & Machine Learning": [
      { title: "Predictive Maintenance System", description: "An AI-powered system for predicting equipment failures in manufacturing.", image: "/images/p1.png" },
      { title: "Natural Language Processing Tool", description: "A sophisticated NLP tool for sentiment analysis and text classification.", image: "/images/p1.png" },
      { title: "Computer Vision for Retail", description: "An AI system for automated inventory management and customer behavior analysis.", image: "/images/p11.png" },
    ],
    "Digital Marketing": [
      { title: "Social Media Campaign Manager", description: "A comprehensive tool for planning and executing multi-platform social media campaigns.", image: "/images/p3.png" },
      { title: "Email Marketing Automation", description: "An advanced email marketing platform with AI-driven personalization.", image: "/images/p2.png" },
      { title: "SEO Analytics Dashboard", description: "A comprehensive SEO tool for tracking and improving search engine rankings.", image: "/images/p12.png" },
    ],
  };

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <nav className="flex space-x-4" aria-label="Project Categories">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 font-medium text-sm rounded-md ${
                  activeTab === tab
                    ? "bg-darkGreenTextColor text-white"
                    : "text-gray-300 hover:bg-darkGreenTextColor hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsByCategory[activeTab].map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-darkGreenTextColor">Ready to Start Your Next Project?</h2>
        <Link
          href="contacts"
          className="inline-block bg-darkGreenTextColor text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity duration-300"
         
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
