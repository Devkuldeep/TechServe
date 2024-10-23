import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Cards = ({ title, description, imageUrl, technologies }) => {
  return (
    <motion.div
      className="bg-[#F4F1EA] rounded-lg shadow-md overflow-hidden cursor-pointer select-none"
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
        <h3 className="text-xl font-semibold mb-2 text-[#1C3434]">{title}</h3>
        <p className="text-[#1C3434] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#031B1B] text-white px-2 py-1 rounded-full text-sm"
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
