import React, { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [customText, setCustomText] = useState("");

  const presetMessages = [
    { title: "Ceramic Coating Inquiry", text: "Hi Marcus, I'm looking to get a price quote and process details regarding your premium Ceramic Coating services." },
    { title: "Book Mechanical Tuning", text: "Hello! I would like to schedule an expert engine diagnostics and wheel alignment session." },
    { title: "General Detail Pricing", text: "Hey Adas Concepts, I am looking for custom pricing for full interior and exterior showroom detailing." }
  ];

  // Auto show a helpful message hint after 4 seconds to prompt conversion!
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNotification(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  const executeSend = (textToSend: string) => {
    const finalMsg = textToSend || "Hi Adas Concepts! I'd like to ask a general question about your vehicle detailing and repair services.";
    const url = `https://wa.me/14255550190?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating mini trigger notification note */}
      {hasNotification && !isOpen && (
        <div 
          onClick={handleOpenToggle}
          className="absolute bottom-16 right-2 mb-2 w-72 rounded-xl border border-neutral-800 bg-neutral-900 p-4.5 shadow-2xl shadow-red-950/20 cursor-pointer animate-bounce"
        >
          <div className="flex gap-2.5">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white text-xs">
              M
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-600 border border-neutral-900" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">MARCUS • LEAD DETAILER</p>
              <h5 className="mt-0.5 text-xs font-semibold leading-snug text-white">Hey! Got questions about restoring your car's coat or engine? Chat with me instantly!</h5>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Bubble Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl transition-all duration-300">
          {/* Header */}
          <div className="bg-neutral-900 p-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-amber-500 font-bold text-white">
                  AC
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-neutral-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Adas Concepts Support</h4>
                <p className="text-[10px] text-emerald-400 font-medium">Active • Replying in under 5 Mins</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Dialog Chat Space */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto bg-neutral-950/90">
            {/* Intro text from Assistant */}
            <div className="rounded-xl bg-neutral-900/60 p-3.5 border border-neutral-900">
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1 mb-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                OFFICIAL CONCIERGE
              </p>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Greetings from Renton, WA! I'm Marcus, lead service advisor at Adas Concepts (established 2004). Ask me about detailing packages, ceramic application, or mechanic bookings.
              </p>
            </div>

            {/* Prompt Selector */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pl-1">Tap a pre-set request topic:</p>
              {presetMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => executeSend(msg.text)}
                  className="w-full text-left rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-2.5 text-xs text-neutral-300 font-medium transition hover:border-red-600/40 hover:bg-neutral-900 hover:text-red-400"
                >
                  ✨ {msg.title}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input Panel */}
          <div className="p-3 border-t border-neutral-900 bg-neutral-900/40 flex gap-2">
            <input
              type="text"
              placeholder="Type custom inquiry here..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") executeSend(customText);
              }}
              className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            <button
              onClick={() => executeSend(customText)}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-500 shrink-0 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Sticky Core Button */}
      <button
        onClick={handleOpenToggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-2xl transition-all duration-300 hover:bg-emerald-500 hover:scale-105 hover:rotate-6 text-white cursor-pointer relative ${
          isOpen ? "bg-red-600 hover:bg-red-500" : ""
        }`}
        aria-label="Chat and Book on WhatsApp"
      >
        {isOpen ? (
          <svg className="h-6 w-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <MessageSquare className="h-6 w-6 fill-current stroke-none" />
        )}
        {hasNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white border-2 border-neutral-950 animate-pulse">
            1
          </span>
        )}
      </button>
    </div>
  );
}
