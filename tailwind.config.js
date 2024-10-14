/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        lightGreen: "var(--light-green)",
        darkGreen: "var(--dark-green)",
        white: "var(--white)",
        lightBeige: "var(--light-beige)",
        darkBeige: "var(--dark-beige)",
        black: "var(--black)",
        darkGreen2: "var(--dark-green-2)",
        gray: "var(--gray)",
        lightGray: "var(--light-gray)",
        lightBlue: "var(--light-blue)",
        green: "var(--green)",
        green2: "var(--green-2)",
        darkGreen3: "var(--dark-green-3)",
        green2: "var(--green2)",
        
        
       
        iconColor: "var(--icon-color)",
        darkGreenTextColor: "var(--darkGreen-text-color)",
        lightGreenTextColor: "var(--lightGreen-text-color)",
      },
    },
  },
  plugins: [],
};
