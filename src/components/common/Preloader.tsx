"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavkarLogo } from "@/components/landing/NavkarLogo";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0,0);
    }, 2000);

    document.body.style.cursor = 'wait';

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'default';
    };
  }, []);

  const slideUp = {
    initial: { y: 0 },
    exit: { y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  const logoPulse = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.9, 1],
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <motion.div
            variants={logoPulse}
            animate="animate"
            transition={logoPulse.transition}
            exit="exit"
          >
            <NavkarLogo className="h-24 w-24 text-primary" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
