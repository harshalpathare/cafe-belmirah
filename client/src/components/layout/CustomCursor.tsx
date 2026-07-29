'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { damping: 25, stiffness: 200 });
  const springY = useSpring(trailY, { damping: 25, stiffness: 200 });

  const isHoveringRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      trailX.set(e.clientX - 20);
      trailY.set(e.clientY - 20);
    };

    const handleMouseEnterInteractive = () => { isHoveringRef.current = true; };
    const handleMouseLeaveInteractive = () => { isHoveringRef.current = false; };

    window.addEventListener('mousemove', handleMouseMove);

    const interactives = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold/60 pointer-events-none z-[9998]"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
