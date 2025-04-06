import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rohit Mehta",
    message: "Ramya was super helpful and patient in explaining all options. Got my health plan in minutes!",
    emoji: "👏",
  },
  {
    name: "Sneha Patil",
    message: "Smooth process, no confusion. Got claim approved quickly thanks to great support.",
    emoji: "💯",
  },
  {
    name: "Ankit Shah",
    message: "Best insurance experience ever. Highly recommend!",
    emoji: "🌟",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f4f2ef] py-12 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-[#0d2642] mb-6">What Our Customers Say 💬</h2>
      <br></br>
      <div className="max-w-xl mx-auto bg-[#0d2642] rounded-2xl shadow-lg p-6 transition-all duration-500 ease-in-out">
        <div className="text-4xl mb-2">{testimonials[index].emoji}</div>
        <p className="text-[#333] text-white italic mb-3">"{testimonials[index].message}"</p>
        <p className="font-semibold text-white">- {testimonials[index].name}</p>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0d2642]" : "bg-gray-400"} transition`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
