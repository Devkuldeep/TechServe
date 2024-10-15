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

function LightGreenButton({ title, link, className }) {
  return (
    <motion.div
      className={`w-full sm:w-auto ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={link}
        className="in-block w-full rounded bg-[#80F495] px-8 sm:px-12 py-3 text-sm font-medium text-[#1C3434] shadow hover:bg-[#00DF82] focus:outline-none focus:ring active:bg-[#2CC295]"
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
    className="block w-full rounded bg-[#F4F1EA] px-8 sm:px-12 py-3 text-sm font-medium text-[#1C3434] shadow hover:text-[#1C3434] focus:outline-none focus:ring active:text-[#1C3434]"
  >
    {title}
  </Link>
</motion.div>;
    }

function GreenWhiteButton({ title, link, className }) {
  return  <motion.a
  href={link}
  className={`inline-block  py-3 mt-8 text-sm   bg-[#50b364] border border-[#50b364] rounded active:text-[#50b364] hover:bg-transparent hover:text-[#1C3434] focus:outline-none focus:ring ${className}`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {title}
</motion.a>
}


export { Button, LightGreenButton, DarkGreenButton, WhiteButton, GreenWhiteButton    };
