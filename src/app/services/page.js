'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    return (
      <div
      className="bg-[#0A0A0A] pt-20"

      >
        <BannerSection />
        <HeaderSection />
        <ServiceSection />
        <FeatureSection />
        <BenefitsSection />
        <CallToActionSection />
      </div>
    );
  }

function BannerSection() {
  return (
    <div className="relative overflow-hidden bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">Empowering businesses with</span>{' '}
                <span className="block xl:inline">high-quality digital solutions</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
              >
                Techserve offers a wide range of innovative tech solutions, from web development to digital marketing, designed to optimize your online presence and drive business growth.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-[#9E1030] md:py-4 md:px-10 md:text-lg"
                  >
                    Explore our services
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#3D37AF] px-8 py-3 text-base font-medium text-white hover:bg-[#322C8C] md:py-4 md:px-10 md:text-lg"
                  >
                    Contact us
                  </a>
                </div>
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
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div className="grid grid-cols-3 gap-4 h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/codelaptop.png"
              alt="Service 1"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/group2.png"
              alt="Service 2"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/web.jpg"
              alt="Service 3"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/group1.png"
              alt="Service 4"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-1"
          >
            <img
              className="w-full h-full object-cover"
              src="/images/mobile.png"
              alt="Service 5"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-gradient-to-b from-[#0E141F] to-[#1A2332] py-16 relative overflow-hidden">
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
          className="text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Innovative Tech Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Empowering your business with cutting-edge technology tailored for the digital age. Our expertise fuels innovation and drives sustainable growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { title: "Web Development", description: "Bespoke websites and web applications crafted to elevate your digital presence.", icon: "🌐", color: "from-blue-500 to-cyan-400" },
            { title: "App Development", description: "Innovative mobile solutions for iOS and Android to engage your audience on-the-go.", icon: "📱", color: "from-green-500 to-emerald-400" },
            { title: "Digital Marketing", description: "Strategic campaigns to amplify your brand and drive measurable business growth.", icon: "📈", color: "from-purple-500 to-pink-400" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`text-5xl mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
              <motion.div
                className="mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
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
    <div className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/abstract-tech-pattern.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
          className="text-4xl font-extrabold text-center mb-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Elevate Your Business with Techserve
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto"
        >
          Our innovative solutions are meticulously crafted to address your unique challenges, propelling your business towards unprecedented growth and success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {[
            { title: "Web Development", description: "Cutting-edge websites and web applications that captivate your audience and drive conversions.", icon: "🌐" },
            { title: "App Development", description: "Powerful mobile solutions that keep your business at your customers fingertips.", icon: "📱" },
            { title: "UI/UX Design", description: "Stunning interfaces that blend aesthetics with functionality for an unparalleled user experience.", icon: "🎨" },
            { title: "Video Production", description: "Compelling visual narratives that bring your brand story to life and engage your audience.", icon: "🎥" },
            { title: "Digital Marketing", description: "Data-driven strategies to amplify your online presence and accelerate business growth.", icon: "📈" },
            { title: "Customized Solutions", description: "Bespoke tech solutions tailored to your specific business needs and objectives.", icon: "🔧" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
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
    <div className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <div className="py-20">
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
            className="text-4xl font-extrabold text-center mb-16 text-white glow-text"
          >
            Our Services in Detail
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
                <h3 className="text-3xl font-semibold mb-6 text-[#3D37AF]">Web Development</h3>
                <p className="text-gray-300 mb-6 text-lg">We create custom websites and web applications tailored to your unique business needs, ensuring a strong online presence and optimal user experience.</p>
                <ul className="list-none text-gray-300 space-y-2">
                  {["Responsive design for all devices", "E-commerce solutions", "Content Management Systems (CMS)", "API integrations"].map((item, index) => (
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
                <img src="/images/web.jpg" alt="Web Development" className="rounded-lg shadow-2xl hover:shadow-[#3D37AF]/50 transition-shadow duration-300" />
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
                <img src="/images/mobile.png" alt="App Development" className="rounded-lg shadow-2xl hover:shadow-[#3D37AF]/50 transition-shadow duration-300" />
              </motion.div>
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:order-1">
                <h3 className="text-3xl font-semibold mb-6 text-[#3D37AF]">App Development</h3>
                <p className="text-gray-300 mb-6 text-lg">We build innovative mobile applications for both iOS and Android platforms, helping you engage your audience on-the-go.</p>
                <ul className="list-none text-gray-300 space-y-2">
                  {["Native and cross-platform development", "User-centric design approach", "Integration with device features", "Ongoing support and maintenance"].map((item, index) => (
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
                <h3 className="text-3xl font-semibold mb-6 text-[#3D37AF]">Digital Marketing</h3>
                <p className="text-gray-300 mb-6 text-lg">Our comprehensive digital marketing strategies are designed to boost your online presence and drive measurable results for your business.</p>
                <ul className="list-none text-gray-300 space-y-2">
                  {["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing", "Pay-Per-Click (PPC) Advertising"].map((item, index) => (
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
                <img src="/images/digitalmarket.png" alt="Digital Marketing" className="rounded-lg shadow-2xl hover:shadow-[#3D37AF]/50 transition-shadow duration-300" />
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
                <img src="/images/videopro.jpg" alt="Video Production" className="rounded-lg shadow-2xl hover:shadow-[#3D37AF]/50 transition-shadow duration-300" />
              </motion.div>
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:order-1">
                <h3 className="text-3xl font-semibold mb-6 text-[#3D37AF]">Video Production</h3>
                <p className="text-gray-300 mb-6 text-lg">We offer professional video production services to create compelling visual content that engages your audience and promotes your brand.</p>
                <ul className="list-none text-gray-300 space-y-2">
                  {["High-quality video shooting", "Professional editing and post-production", "Motion graphics and animation", "Optimized for various platforms"].map((item, index) => (
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-20">
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
          className="text-4xl font-extrabold text-center mb-16 text-white glow-text"
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
            { title: "Innovative Solutions", description: "We leverage cutting-edge technologies to provide forward-thinking solutions that keep you ahead of the competition." },
            { title: "Client-Centric Approach", description: "Our team works closely with you to understand your unique needs and deliver tailored solutions that drive results." },
            { title: "Comprehensive Services", description: "From web development to digital marketing, we offer a full range of services to support your digital transformation." },
            { title: "Quality Assurance", description: "We maintain high standards of quality in all our deliverables, ensuring robust and reliable solutions for your business." },
            { title: "Scalable Solutions", description: "Our solutions are designed to grow with your business, adapting to your changing needs and supporting long-term success." },
            { title: "Ongoing Support", description: "We provide continuous support and maintenance to ensure your digital solutions remain effective and up-to-date." }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#3D37AF]">{benefit.title}</h3>
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
    <div className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-white py-16"
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
            className="text-xl mb-8"
          >
            Let&apos;s discuss how our innovative tech solutions can empower your business and drive growth.
          </motion.p>
          <motion.a
            href="/contacts"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#3D37AF] text-white font-bold py-3 px-8 rounded-full hover:bg-[#322C8C] transition duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
