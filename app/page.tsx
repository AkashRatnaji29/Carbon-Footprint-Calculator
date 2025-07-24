'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // For accordion icons

export default function HomePage() {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // FAQ data
  const faqs = [
    {
      question: "Why should I care about my carbon footprint?",
      answer:
        "Your carbon footprint represents your contribution to climate change. Reducing it helps mitigate global warming, preserves ecosystems, and promotes a sustainable future for all.",
    },
    {
      question: "How can I reduce my carbon footprint?",
      answer:
        "You can reduce your carbon footprint by using public transport, eating less meat, conserving energy, recycling, and supporting renewable energy sources.",
    },
    {
      question: "What activities contribute most to my carbon footprint?",
      answer:
        "Travel (especially flying and driving), energy usage (electricity and heating), and consumption habits (like buying new clothes or gadgets) are often the biggest contributors.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white text-center p-6 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10"></div>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          🌍 Carbon Footprint Tracker
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover your environmental impact and take steps to reduce it.
        </motion.p>
        <Link
          href="/calculator"
          className="relative text-lg px-8 py-4 rounded-full bg-white text-green-600 font-semibold shadow-lg hover:bg-green-100 transition-all duration-300"
          onClick={() => handleButtonClick("Hero Section")}
        >
          Start Calculator
        </Link>
        <motion.div
          className="absolute bottom-10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="currentColor" opacity="0.3"/>
            <path d="M12 6c-1.5 0-2.5.5-3 1.5S9 10 10 10s2-.5 2-2-1-2-2-2zm-2 8c-1 0-1.5.5-2 1s-.5 1.5 0 2 1.5.5 2 0 1-1.5 0-2zm6-2c-1 0-1.5.5-2 1s-.5 1.5 0 2 1.5.5 2 0 1-1.5 0-2z" fill="currentColor"/>
          </svg>
        </motion.div>
      </section>

      {/* What is a Carbon Footprint Section */}
      <section className="py-16 px-6 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What is a Carbon Footprint?</h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A carbon footprint is the total amount of greenhouse gases, primarily carbon dioxide (CO₂), that are emitted directly or indirectly by an individual, organization, or product. It’s measured in kilograms of CO₂ equivalent per month or year and includes emissions from activities like transportation, energy use, and consumption habits.
          </motion.p>
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="currentColor" opacity="0.1"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={childFade} className="mb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-green-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-green-600" />
                )}
              </button>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-gray-100 rounded-b-lg text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="py-10 bg-gray-800 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h3>
        <Link href="/calculator">
          <Button className="text-lg px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300">
            Calculate Your Footprint Now
          </Button>
        </Link>
      </section>
    </div>
  );
}