import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Button({ 
  textColor, 
  backgroundColor, 
  hoverBackgroundColor, 
  hoverTextColor, 
  link, 
  title 
}) {
  return (
    <Link 
      href={link}
      className={`
        inline-block px-6 py-2 rounded
        text-${textColor} bg-${backgroundColor}
        hover:bg-${hoverBackgroundColor} hover:text-${hoverTextColor}
        transition duration-300 ease-in-out
      `}
    >
      {title}
    </Link>
  );
}

function  LightGreenButton({ title, link, className }) {
  return (
    <motion.div
      className={`w-full sm:w-auto ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={link}
        className="block lg:inline-block w-full rounded bg-[#80F495] px-8 sm:px-12 py-3 text-sm font-medium text-darkGreenTextColor  shadow hover:bg-[#00DF82] focus:outline-none focus:ring active:bg-[#2CC295]"
      >
        {title}
      </Link>
    </motion.div>
  );
}

function DarkGreenButton({ title, link, className }) {
  return <Button title={title} link={link} textColor="white" backgroundColor="darkGreen" hoverBackgroundColor="green" hoverTextColor="white" className={className} />;
}

function WhiteButton({ title, link, className }) {
  return <motion.div
  className={`w-full sm:w-auto ${className}`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    href={link}
    className="block lg:inline-block w-full rounded bg-[#F4F1EA] px-8 sm:px-12 py-3 text-sm font-medium text-[#1C3434] shadow hover:text-[#1C3434] focus:outline-none focus:ring active:text-[#1C3434]"
  >
    {title}
  </Link>
</motion.div>;
    }

function GreenWhiteButton({ title, link, className }) {
  return  <motion.div
  
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    href={link}
    className={`inline-block w-full rounded bg-green2 px-8 sm:px-12 py-3 text-sm font-medium 
      shadow hover:text-[#1C3434] focus:outline-none focus:ring active:text-[#1C3434] ${className}`}
  >
    {title}
  </Link>
</motion.div>
}


export { Button, LightGreenButton, DarkGreenButton, WhiteButton, GreenWhiteButton    };
