"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  LightGreenButton,
  WhiteButton,
  GreenWhiteButton,
} from "@/components/utilities/Buttons";

export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, rgba(0, 223, 130, 0.05), transparent 60%)`,
  };

  return (
    <motion.div 
      className="pt-20 relative min-h-screen overflow-hidden"
      style={gradientStyle}
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, rgba(0, 223, 130, 0.15), transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.1 }}
    >
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 bg-green z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 1.2, 1],
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
          borderRadius: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <motion.div
          className="w-full h-full bg-green rounded-full"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <BannerSection />
      <HeaderSection />
      <ServiceSection />
      <FeatureSection />
      <BenefitsSection />
      <CallToActionSection />
    </motion.div>
  );
}

function BannerSection() {
  return (
    <div className="relative overflow-hidden mx-auto  py-2 px-2  max-w-7xl">
      <div className="lg:w-1/2  ">
        <div className="relative px-4  z-10 pb-8   lg:w-full lg:max-w-2xl  xl:pb-32">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto  max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-2 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-darkGreenTextColor sm:text-5xl "
              >
                <span className="block xl:inline">
                  Empowering businesses with
                </span>{" "}
                <span className="block xl:inline">
                  high-quality digital solutions
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-3 text-base text-lightGreenTextColor sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-lg lg:mx-0"
              >
                Techserve offers a wide range of innovative tech solutions, from
                web development to digital marketing, designed to optimize your
                online presence and drive business growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center  items-center "
              >
              
                <LightGreenButton
                  title="Contact us"
                  link="/contacts"
                  className="text-lightBeige  mt-4 text-center"
                />
              
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="p-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 "
      >
        <div className="grid grid-cols-3 gap-4 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/codelaptop.png"
              alt="Service 1"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2"
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/group2.png"
              alt="Service 2"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/web.jpg"
              alt="Service 3"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2"
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/group1.png"
              alt="Service 4"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/mobile.png"
              alt="Service 5"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </motion.div>
      
    </div>
  );
}

function HeaderSection() {
  return (
    <div className=" py-16 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-10"></div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-darkGreenTextColor"
        >
          Innovative Tech Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-[#717D7D] text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Empowering your business with cutting-edge technology tailored for the
          digital age. Our expertise fuels innovation and drives sustainable
          growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Web Development",
              description:
                "Bespoke websites and web applications crafted to elevate your digital presence.",
              icon: "🌐",
              color: "from-[#80F495] to-[#00DF82]",
            },
            {
              title: "App Development",
              description:
                "Innovative mobile solutions for iOS and Android to engage your audience on-the-go.",
              icon: "📱",
              color: "from-[#80F495] to-[#00DF82]",
            },
            {
              title: "Digital Marketing",
              description:
                "Strategic campaigns to amplify your brand and drive measurable business growth.",
              icon: "📈",
              color: "from-[#80F495] to-[#00DF82]",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-gradient-to-br from-[#1C3434] to-[#031B1B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`text-5xl mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              >
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#FFFFFF]">
                {service.title}
              </h2>
              <p className="text-[#717D7D]">{service.description}</p>
              <motion.div
                className="mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                ></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
   
    </div>
  );
}

function ServiceSection() {
  return (
    <div className=" py-2 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/abstract-tech-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-4 text-darkGreenTextColor bg-clip-text  "
        >
          Elevate Your Business with Techserve
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-[#717D7D] mb-20 max-w-3xl mx-auto"
        >
          Our innovative solutions are meticulously crafted to address your
          unique challenges, propelling your business towards unprecedented
          growth and success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {[
            {
              title: "Web Development",
              description:
                "Cutting-edge websites and web applications that captivate your audience and drive conversions.",
              icon: "🌐",
            },
            {
              title: "App Development",
              description:
                "Powerful mobile solutions that keep your business at your customers fingertips.",
              icon: "📱",
            },
            {
              title: "UI/UX Design",
              description:
                "Stunning interfaces that blend aesthetics with functionality for an unparalleled user experience.",
              icon: "🎨",
            },
            {
              title: "Video Production",
              description:
                "Compelling visual narratives that bring your brand story to life and engage your audience.",
              icon: "🎥",
            },
            {
              title: "Digital Marketing",
              description:
                "Data-driven strategies to amplify your online presence and accelerate business growth.",
              icon: "📈",
            },
            {
              title: "Customized Solutions",
              description:
                "Bespoke tech solutions tailored to your specific business needs and objectives.",
              icon: "🔧",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1C3434] to-[#031B1B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#FFFFFF]">
                {service.title}
              </h3>
              <p className="text-[#717D7D]">{service.description}</p>
              <motion.div
                className="mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function FeatureSection() {
  return (
    <div className="">
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold text-center mb-8  sm:mb-12 text-darkGreenTextColor glow-text"
          >
            Our Services
          </motion.h2>
          <div className="space-y-24">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-3xl font-semibold mb-6 text-darkGreenTextColor">
                  Web Development
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  We create custom websites and web applications tailored to
                  your unique business needs, ensuring a strong online presence
                  and optimal user experience.
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  {[
                    "Responsive design for all devices",
                    "E-commerce solutions",
                    "Content Management Systems (CMS)",
                    "API integrations",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-[#3D37AF] mr-2">▹</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/web.jpg"
                  alt="Web Development"
                  className="rounded-lg shadow-2xl hover:shadow-darkGreenTextColor/50 transition-shadow duration-300"
                />
              </motion.div>
            </motion.div>

            {/* App Development */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center"
            >
              <motion.div
                className="md:w-1/2 md:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/mobile.png"
                  alt="App Development"
                  className="rounded-lg shadow-2xl hover:shadow-darkGreenTextColor/50 transition-shadow duration-300"
                />
              </motion.div>
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:order-1">
                <h3 className="text-3xl font-semibold mb-6 text-darkGreenTextColor">
                  App Development
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  We build innovative mobile applications for both iOS and
                  Android platforms, helping you engage your audience on-the-go.
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  {[
                    "Native and cross-platform development",
                    "User-centric design approach",
                    "Integration with device features",
                    "Ongoing support and maintenance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-darkGreenTextColor mr-2">▹</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-3xl font-semibold mb-6 text-darkGreenTextColor">
                  Digital Marketing
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Our comprehensive digital marketing strategies are designed to
                  boost your online presence and drive measurable results for
                  your business.
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  {[
                    "Search Engine Optimization (SEO)",
                    "Social Media Marketing",
                    "Content Marketing",
                    "Pay-Per-Click (PPC) Advertising",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-darkGreenTextColor mr-2">▹</span>{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/digitalmarket.png"
                  alt="Digital Marketing"
                  className="rounded-lg shadow-2xl hover:shadow-darkGreenTextColor/50 transition-shadow duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Video Production */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center"
            >
              <motion.div
                className="md:w-1/2 md:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/videopro.jpg"
                  alt="Video Production"
                  className="rounded-lg shadow-2xl hover:shadow-darkGreenTextColor/50 transition-shadow duration-300"
                />
              </motion.div>
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:order-1">
                <h3 className="text-3xl font-semibold mb-6 text-darkGreenTextColor">
                  Video Production
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  We offer professional video production services to create
                  compelling visual content that engages your audience and
                  promotes your brand.
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  {[
                    "High-quality video shooting",
                    "Professional editing and post-production",
                    "Motion graphics and animation",
                    "Optimized for various platforms",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-darkGreenTextColor mr-2">▹</span>{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className=" py-1 sm:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-extrabold text-center mb-4 sm:mb-8 text-darkGreenTextColor glow-text"
        >
          Why Choose Techserve
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Innovative Solutions",
              description:
                "We leverage cutting-edge technologies to provide forward-thinking solutions that keep you ahead of the competition.",
            },
            {
              title: "Client-Centric Approach",
              description:
                "Our team works closely with you to understand your unique needs and deliver tailored solutions that drive results.",
            },
            {
              title: "Comprehensive Services",
              description:
                "From web development to digital marketing, we offer a full range of services to support your digital transformation.",
            },
            {
              title: "Quality Assurance",
              description:
                "We maintain high standards of quality in all our deliverables, ensuring robust and reliable solutions for your business.",
            },
            {
              title: "Scalable Solutions",
              description:
                "Our solutions are designed to grow with your business, adapting to your changing needs and supporting long-term success.",
            },
            {
              title: "Ongoing Support",
              description:
                "We provide continuous support and maintenance to ensure your digital solutions remain effective and up-to-date.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-darkGreenTextColor">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
              <motion.div
                className="mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function CallToActionSection() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-darkGreenTextColor py-12 bg-lightGreenColor mb-8 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-extrabold mb-4"
          >
            Ready to Optimize Your Online Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl"
          >
            Let&apos;s discuss how our innovative tech solutions can empower
            your business and drive growth.
          </motion.p>
          <GreenWhiteButton title="Get Started" link="/contacts" className="px-4 py-2 font-bold mt-6 md:w-auto"/>
       
        </div>
      </motion.div>
    </div>
  );
}
