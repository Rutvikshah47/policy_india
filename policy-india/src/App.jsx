import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FlashingCards from "./FlashingCards";
function App() {
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

  

  return (

  

    <div className="font-sans text-black bg-[#f4f2ef] flex flex-col">
      

<section className="w-full flex justify-center bg-[#f4f2ef] relative">

        {/* ✨ Text Content */}
       

        {/* 🖼️ Sketch Illustration */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center w-full md:w-auto px-4 md:px-0"
>
  <div className="w-full md:w-auto max-w-md md:max-w-full">
  {window.innerWidth > 1000 && ( 
    <img
      src="/illustration_desktop.png"
      alt="Policy India Illustration"
      className="w-full h-auto max-h-[300px] md:max-h-[95vh] object-contain"
    />
  )}
  {window.innerWidth < 1000 && ( 
    <img
      src="/illustration_mobile.png"
      alt="Policy India Illustration"
      className="w-full h-[25h] object-contain"
    />
  )}
  </div>
</motion.div>
{window.innerWidth > 1000 && ( 
 
 <div className="absolute bottom-8 w-full flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById('next-section')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="animate-bounce p-4 rounded-full transition"
          aria-label="Scroll Down"
        >
          <svg
            className="w-20 h-20 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
)}
      
      
    </section>

      {/* Services Section */}
      <section id="next-section" className="py-12 px-4 bg-[#f4f2ef]">
      {window.innerWidth < 1000 && ( 
        <div>
          <p className="text-2xl font-semibold text-center mb-8 text-[#0d2642]">🛡️ Plans Jo Aapke Kaam Aaye 💼</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FlashingCards />
          </div>
        </div>
      )}
      {window.innerWidth > 1000 && ( 
        <div>
          <h1 className="text-4xl font-semibold text-center mb-8 text-[#0d2642]">🛡️ Plans Jo Aapke Kaam Aaye 💼✨</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((item) => (
                <div key={item.title} className="p-6 bg-[#f4f2ef] text-[#0d2642] w-45  rounded-xl shadow-md text-center hover:scale-105 transition">
                  <div className="text-5xl mb-2">{item.emoji}</div>
                  <h3 className="text-1xl font-bold">{item.title}</h3>
                </div>
              ))}
          </div>
        </div>
      )}
        
      </section>

      {/* Why Us Section */}
      <section className="py-2 bg-[#f4f2ef] px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#0d2642]">Why POLICY INDIA?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-3xl">🧠</div>
            <h4 className="font-bold mt-2">Right Advice</h4>
            <p className="text-sm">No over-selling, just what you need</p>
          </div>
          <div>
            <div className="text-3xl">📞</div>
            <h4 className="font-bold mt-2">Always Available</h4>
            <p className="text-sm">WhatsApp ya call, we’re here!</p>
          </div>
          <div>
            <div className="text-3xl">💰</div>
            <h4 className="font-bold mt-2">Affordable Plans</h4>
            <p className="text-sm">Zyada coverage, kam premium</p>
          </div>
          <div>
            <div className="text-3xl">🙋</div>
            <h4 className="font-bold mt-2">Ramya’s Touch</h4>
            <p className="text-sm">Friendly, honest, and warm service</p>
          </div>
        </div>

      {/* ⬇️ Scroll Down Indicator */}
      {window.innerWidth > 1000 && ( 
        <div className="bottom-[5rem] w-full flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById('next-section-policy')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="animate-bounce p-4 rounded-full transition"
          aria-label="Scroll Down"
        >
          <svg
            className="w-20 h-20 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      )}
      
      

      </section>

      {/* CTA Section */}
      <section id="next-section-policy" className="py-10 bg-[#0d2642] text-white text-center px-4">
        <h3 className="text-2xl font-semibold">Need help choosing a policy?</h3>
        <p className="text-md mt-2">Talk to Ramya directly on WhatsApp or book a free consultation.</p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="https://wa.me/917779077484"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0d2642] px-6 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            🗨️ WhatsApp Now
          </a>
          <button className="bg-indigo-800 px-6 py-2 rounded-full hover:bg-indigo-900">
            📅 Book a Call
          </button>
        </div>
      </section>
      
      {/* About Ramya Section */}
      <section className="py-12 px-4 bg-[#f4f2ef] text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#0d2642]">Meet <span className="font-bold">Ramya Shah</span></h2>
        <p className="max-w-2xl mx-auto text-gray-800 text-lg">
          Ramya is not your typical insurance advisor. He’s warm, experienced, and dedicated to helping you get the most value
          for your premium. With POLICY INDIA, he’s on a mission to make insurance simple, honest, and human-first.
        </p>
        <img
          src="/ramya.jpg" // Replace this with a real sketch-style portrait of Ramya later
          alt="Ramya Shah"
          className="mx-auto mt-6 rounded-full w-36 h-36 border-4 border-indigo-200 object-cover"
        />
      </section>

      {/* ⬇️ Scroll Down Indicator */}
      {window.innerWidth > 1000 && (  
        <div className="bottom-[5rem] w-full flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById('next-section-form')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="animate-bounce p-4 rounded-full transition"
          aria-label="Scroll Down"
        >
          <svg
            className="w-20 h-20 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      )}
      

{/* Lead Capture Section */}
<section id="next-section-form" className="py-12 bg-white px-4">
  <h2 className="text-2xl font-semibold text-center mb-4 text-[#0d2642]">Let's find the perfect policy for you</h2>
  <p className="text-center text-gray-700 mb-8">Fill the form below and we'll get back to you soon</p>

  <form className="max-w-xl mx-auto grid gap-4">
    <input
      type="text"
      placeholder="Full Name"
      className="px-4 py-3 border rounded-md w-full"
      required
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="px-4 py-3 border rounded-md w-full"
      required
    />
    <select className="px-4 py-3 border rounded-md w-full">
      <option>Select Service Type</option>
      <option>Life Insurance</option>
      <option>Health Insurance</option>
      <option>Motor Insurance</option>
      <option>Term Plans</option>
      <option>Investment Plans</option>
    </select>
    <textarea
      placeholder="Any specific needs or questions?"
      className="px-4 py-3 border rounded-md w-full"
      rows="3"
    />
    <button
      type="submit"
      className="bg-[#0d2642] text-white py-3 rounded-md hover:bg-[#0a1f36] transition"
    >
      🚀 Get My Policy Recommendation
    </button>
  </form>
</section>


      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 bg-[#f4f2ef]">
        © {new Date().getFullYear()} POLICY INDIA · Ramya Shah · All rights reserved
      </footer>

      
    </div>

    
  );
}

export default App;

