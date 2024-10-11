import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Cards = ({ title, description, imageUrl, technologies }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#4F46E5] text-white px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
