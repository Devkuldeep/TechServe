"use client";

import { useEffect } from 'react';


const SmoothScrollPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
     
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <section style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
        <h1>Welcome to Lenis Smooth Scroll Page</h1>
        <p>Scroll down to see smooth scrolling.</p>
      </section>
      <section style={{ height: '100vh', backgroundColor: '#6c757d' }}>
        <h1>Another Section</h1>
      </section>
      <section style={{ height: '100vh', backgroundColor: '#343a40' }}>
        <h1>Final Section</h1>
      </section>
    </div>
  );
};

export default SmoothScrollPage;
