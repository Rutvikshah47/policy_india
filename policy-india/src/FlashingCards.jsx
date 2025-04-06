import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    { title: "Motor Insurance", emoji: "🚗" },
    { title: "Health Insurance", emoji: "🏥" },
    { title: "Term Plans", emoji: "📆" },
    { title: "Investment Plans", emoji: "💸" },
    { title: "Shop Insurance", emoji: "📦" },
    { title: "Home Insurance", emoji: "🏠" },
    { title: "Travel Insurance", emoji: "✈️" },
    { title: "Corporate Insurance", emoji: "👔" },
    { title: "WC Insurance", emoji: "🦺" }
  ];

export default function FlashingCards() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={services[current].title}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="p-10 bg-[#f4f2ef] text-[#0d2642] w-60 rounded-xl shadow-md text-center"
        >
          <div className="text-6xl mb-2">{services[current].emoji}</div>
          <h2 className="text-2xl font-bold">{services[current].title}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
