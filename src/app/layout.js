


import localFont from "next/font/local";
import "./globals.css";


import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TechServe",
  description: "The best tech support in the world",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
    
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
  
    </html>
  );
}
