'use client';
import { useState } from "react";
import Image from "next/image";
import PricingSection from "./_components/PricingSection";
import QueueSection from "./_components/QueueSection";
import ContactSection from "./_components/ContactSection";
import TOSSection from "./_components/TOS";
import { AnimatePresence, motion } from "framer-motion";

export default function CommissionPage() {
  const [selectedType, setSelectedType] = useState("");
  const selectedClass = "rounded-md bg-purple-200 px-4 py-2 text-purple-800 font-semibold hover:bg-purple-300 transition-colors duration-200 whitespace-nowrap";
  const unselectedClass = "rounded-md border px-4 py-2 text-gray-800 font-semibold hover:text-purple-800 transition-colors duration-200 whitespace-nowrap";
  return (
    <div className="overflow-auto  min-h-screen flex items-center justify-center py-10 px-2 sm:px-0">
      <div className="text-center flex flex-col w-full max-w-2xl mx-auto">
        <img
          src="/img/commission.png"
          alt="Commission Default"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-md h-auto mx-auto mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">AHPU's Commission</h1>
        
        <div className="flex flex-row sm:flex-row overflow-x-auto space-x-2 sm:space-x-4 mb-8 py-2" style={{ scrollbarWidth: "none" as any, msOverflowStyle: "none" as any }}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <button className={selectedType === "price" ? selectedClass : unselectedClass}
            onClick={() => {
              if (selectedType === "price") setSelectedType("");
              else setSelectedType("price");
            }}
          >
            Type & Pricing
          </button>

            <a
            href="/portfolio"
            className={selectedType === "portfolio" ? selectedClass : unselectedClass}
            >
            Portfolio
            </a>

          <button className={selectedType === "queue" ? selectedClass : unselectedClass}
            onClick={() => {
              if (selectedType == "queue") setSelectedType("");
              else setSelectedType("queue");
            }}
          >
            Queue
          </button>

          <button className={selectedType === "TOS" ? selectedClass : unselectedClass}
            onClick={() => {
              if (selectedType == "TOS") setSelectedType("");
              else setSelectedType("TOS");
            }}
          >
            TOS & Conditions
          </button>
          
          <button className={selectedType === "contact" ? selectedClass : unselectedClass}
            onClick={() => {
          if (selectedType == "contact") setSelectedType("");
          else setSelectedType("contact");
            }}
          >
            Contact
          </button>
        </div>
        
        <div className="relative w-full px-0 sm:px-4">
          <AnimatePresence mode="wait">
            {selectedType && (
              <motion.div
                key={selectedType}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white shadow-lg p-4 sm:p-8 rounded-xl border border-gray-100"
              >
                {selectedType === "price" && <PricingSection />}
                {selectedType === "portfolio" && <QueueSection />}
                {selectedType === "queue" && <QueueSection />}
                {selectedType === "TOS" && <TOSSection />}
                {selectedType === "contact" && <ContactSection />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
