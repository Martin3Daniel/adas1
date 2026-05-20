import React, { useState } from "react";
import { 
  SERVICES, 
  TESTIMONIALS, 
  BRAND_PARTNERS, 
  FAQS 
} from "./data";
import ServiceCard from "./components/ServiceCard";
import BookingForm from "./components/BookingForm";
import WhatsAppWidget from "./components/WhatsAppWidget";
import BrandLogo from "./components/BrandLogo";
import { 
  Award, 
  ShieldCheck, 
  History, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ArrowUp, 
  Wrench, 
  Clock, 
  ChevronDown,
  Navigation,
  CheckCircle,
  Menu,
  X,
  Sparkles
} from "lucide-react";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("ceramic");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [footerNotice, setFooterNotice] = useState<string | null>(null);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleScrollTo("booking-form-section");
  };

  const triggerWhatsAppDirectChat = () => {
    const text = "Hello Adas Concepts! I am interested in your professional automobile detailing and mechanical repair services.";
    window.open(`https://wa.me/14255550190?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black font-sans text-neutral-300 selection:bg-red-650 selection:text-white bg-grid">
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 border-b border-white/5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => handleScrollTo("hero-root")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-none bg-red-700 text-white font-display font-black text-xl italic tracking-tighter border border-white/15">
              AC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-black tracking-tight text-white uppercase">Adas Concepts</span>
                <span className="rounded-none bg-red-700/15 border border-red-700/35 px-2 py-0.5 text-[8px] font-bold text-red-500 uppercase tracking-widest">Est. 2004</span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Premium Auto Detailing & Care</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-neutral-400">
            <button onClick={() => handleScrollTo("hero-root")} className="transition hover:text-red-500 cursor-pointer">Home</button>
            <button onClick={() => handleScrollTo("about-section")} className="transition hover:text-red-500 cursor-pointer">About Us</button>
            <button onClick={() => handleScrollTo("services-section")} className="transition hover:text-red-500 cursor-pointer">Services</button>
            <button onClick={() => handleScrollTo("testimonials-section")} className="transition hover:text-red-500 cursor-pointer">Reviews</button>
            <button onClick={() => handleScrollTo("faq-section")} className="transition hover:text-red-500 cursor-pointer">FAQs</button>
            <button onClick={() => handleScrollTo("booking-form-section")} className="transition hover:text-red-500 cursor-pointer">Contact</button>
          </nav>

          {/* High Conversion Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleScrollTo("booking-form-section")}
              className="rounded-none border border-red-700 bg-red-700/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-red-750 cursor-pointer"
            >
              Book Slot
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="rounded-none p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white md:hidden border border-white/5 bg-black"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-white/5 bg-neutral-950 p-6 md:hidden">
            <div className="flex flex-col gap-4 text-xs font-black uppercase tracking-widest text-neutral-400">
              <button onClick={() => handleScrollTo("hero-root")} className="text-left py-1 hover:text-red-500">Home</button>
              <button onClick={() => handleScrollTo("about-section")} className="text-left py-1 hover:text-red-500">About Us</button>
              <button onClick={() => handleScrollTo("services-section")} className="text-left py-1 hover:text-red-500">Services</button>
              <button onClick={() => handleScrollTo("testimonials-section")} className="text-left py-1 hover:text-red-500">Reviews</button>
              <button onClick={() => handleScrollTo("faq-section")} className="text-left py-1 hover:text-red-500">FAQs</button>
              <button onClick={() => handleScrollTo("booking-form-section")} className="text-left py-1 hover:text-red-500">Contact & Booking</button>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
                <button
                  onClick={() => handleScrollTo("booking-form-section")}
                  className="w-full text-center rounded-none bg-red-700 py-3.5 text-[10px] font-black uppercase tracking-widest text-white hover:bg-red-600"
                >
                  Book Appointment Now
                </button>
                <button
                  onClick={triggerWhatsAppDirectChat}
                  className="w-full text-center rounded-none border border-emerald-600 py-3 text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:bg-emerald-600 hover:text-white transition"
                >
                  Instant WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero-root" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black px-6 py-20 border-b border-white/5">
        
        {/* Dynamic Glowing Radial Ambient Grid Effect */}
        <div className="absolute inset-0 bg-[#070707] bg-grid opacity-80" />
        <div className="absolute inset-0 bg-stripes opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.08),transparent_65%)] pointer-events-none" />

        {/* Backdrop Image with Dark Tint Overlay representing Detailing craft */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="/src/assets/images/car_detailing_hero_1779279229333.png" 
            alt="Expert detailing car coating body shine" 
            className="h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          
          {/* Tagline / Establishment trust pill */}
          <div className="inline-flex items-center gap-2 rounded-none border border-red-700/50 bg-red-950/45 px-4 py-2 mb-6.5 text-[10px] text-red-500 font-extrabold tracking-widest uppercase">
            <span className="flex h-1.5 w-1.5 bg-red-500 animate-pulse" />
            <span>EXPERT DETAILING & REPAIR IN RENTON, WA SINCE 2004</span>
          </div>

          {/* Absolute Trust & High Impact Headline */}
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-[1.10]">
            Car Maintenance & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-650 italic underline decoration-4 decoration-red-700 underline-offset-10">Detailing Services</span> You Can Trust
          </h1>

          {/* Sub-headline addressing the 20-year authority */}
          <p className="mx-auto mt-8 max-w-2xl text-xs sm:text-sm leading-relaxed uppercase tracking-widest text-neutral-400 font-mono">
            With over <strong>two decades of master mechanical engineering</strong> expertise and award-winning showroom paint protection formula, we restore and amplify your automobile's performance, value, and aesthetic glow.
          </p>

          {/* Absolute Conversion CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleScrollTo("booking-form-section")}
              className="w-full sm:w-auto rounded-none bg-red-700 hover:bg-red-650 px-8 py-4.5 text-xs font-black uppercase tracking-widest text-white transition cursor-pointer border border-white/10"
            >
              Book Your Appointment
            </button>
            <button
              onClick={triggerWhatsAppDirectChat}
              className="w-full sm:w-auto rounded-none border border-white/10 bg-black px-8 py-4.5 text-xs font-black uppercase tracking-widest text-white transition hover:bg-neutral-900 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <span className="h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
            </button>
          </div>

          {/* Fast Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-10 text-[10px] text-neutral-500 uppercase font-mono tracking-widest">
            <div className="flex items-center justify-center gap-2.5">
              <Award className="h-4 w-4 text-red-500 shrink-0" />
              <span>20+ Years Trusted Service</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-red-500 shrink-0" />
              <span>5-Year Ceramic Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Wrench className="h-4 w-4 text-red-500 shrink-0" />
              <span>Certified Master Mechanics</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT & HERITAGE SECTION */}
      <section id="about-section" className="relative bg-black px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Left Column: Rich Copy Storytelling */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase">OUR LEGACY & VALUES</span>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase italic leading-tight">
                  Two Decades of Mechanical Precision <br />
                  and Detailing Masterwork.
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
                Founded in 2004, <strong>Adas Concepts</strong> has served as Renton's premier enclave for high-end vehicle maintenance, complex chassis calibration, and luxury paint detailing. Our approach is deeply holistic—combining structural mechanical engineering with artistic surface perfecting.
              </p>

              <p className="text-sm leading-relaxed text-neutral-400">
                We believe that premium care is not a simple automated pass; it is a meticulous diagnostic task. We leverage computerized diagnostic equipment, precise paint depth gauges, elite level nano-ceramic elements, and factory-level mechanical procedures to safeguard your vehicle's physical longevity.
              </p>

              {/* Quality Key Values Grid */}
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-white/5 border border-white/10 text-red-500">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-white font-display">Founded in 2004</h4>
                    <p className="text-xs text-neutral-500 mt-1">Providing safe, premium, high-integrity auto engineering services to Renton block owners.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-white/5 border border-white/10 text-red-500">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-white font-display">Aesthetic Restoration</h4>
                    <p className="text-xs text-neutral-500 mt-1">Multi-stage paint correction, wet-look ceramic gloss cure, and elite paint protection film styling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Graphic Showcase */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-none border border-white/10 bg-[#0c0c0c] p-2">
                <img 
                  src="/src/assets/images/car_repair_expert_1779279248060.png" 
                  alt="Certified mechanic analyzing engine bay diagnostic" 
                  className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Trust Card inside Image */}
                <div className="absolute bottom-6 left-6 right-6 rounded-none border border-white/15 bg-black/95 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-red-700/10 border border-red-700/30 text-red-500">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black text-white uppercase tracking-wider font-display">Meticulous Engineering Standards</h5>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Every mechanical parameter and gloss micron thoroughly validated.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Statistic Board */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-none border border-white/10 bg-neutral-900 p-8 text-center bg-stripes">
            <div>
              <p className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-white italic">2004</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1.5">YEAR ESTABLISHED</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-red-500 italic">10K+</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1.5">CARS PERFECTED</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-white italic">100%</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1.5">SATISFACTION RATED</p>
            </div>
            <div>
              <p className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-red-500 italic">5-YR</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1.5">COATING WARRANTY</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. KEY SERVICES SECTION */}
      <section id="services-section" className="bg-black px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Heading */}
          <div className="max-w-xl mb-14 space-y-2">
            <span className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase">PROFESSIONAL AUTOMOTIVE SUITE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">Our Premium Care Services</h2>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1">
              Select any of our computerized structural repair or nano-detail packages. Click any item to directly coordinate your booking.
            </p>
          </div>

          {/* Services Grid (8 columns / flex matching template requests) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onSelect={handleServiceSelect} 
              />
            ))}
          </div>

          {/* Quick Informational Notice */}
          <div className="mt-10 rounded-none bg-[#0a0a0a] p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-1 w-4 bg-red-650 shrink-0" />
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Looking for complex custom mechanical overhauls, vintage restores, or winter protection?
              </p>
            </div>
            <button
              onClick={() => handleServiceSelect("ceramic")}
              className="text-xs font-black text-red-500 uppercase tracking-widest hover:text-red-400 transition cursor-pointer"
            >
              Get Custom Quote &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 4. BRAND PARTNERS & DYNAMIC TESTIMONIALS (INFINITE SCROLL MARQUEE) */}
      <section id="testimonials-section" className="bg-black py-24 overflow-hidden border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase">VERIFIED AUTHORITY</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">Client Endorsements & Expertise</h2>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1 mx-auto max-w-lg">
              Regularly detailing and restoring performance standards for top collectors, racetrack vehicles, and local Seattle commuters.
            </p>
          </div>
        </div>

        {/* Brand Partners Infinite Scroller Marquee */}
        <div className="relative w-full bg-neutral-900 py-5 border-y border-white/5 select-none text-neutral-500">
          {/* Fading side mask gradients for true luxury appearance */}
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
          
          <div className="animate-marquee flex gap-8 items-center">
            {/* Loop 1 */}
            {BRAND_PARTNERS.map((brand, idx) => (
              <div 
                key={`b1-${idx}`} 
                className="group relative flex items-center gap-3 px-5 py-2.5 mx-2 border border-white/5 bg-black/40 hover:bg-neutral-950 hover:border-red-700/40 transition duration-300 select-none cursor-help shrink-0"
              >
                {/* Brand Logo Icon */}
                <span className="text-white/40 group-hover:text-red-500 transition-colors duration-300">
                  <BrandLogo id={brand.id} className="h-5 w-auto" />
                </span>
                
                {/* Brand Name Text */}
                <span className="text-white/40 group-hover:text-white transition-colors duration-300 font-display font-black text-xs tracking-widest uppercase">
                  {brand.logoText}
                </span>

                {/* POP OVER - Highly Styled Luxury Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-80 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50 rounded-none border border-red-700/40 bg-black/95 p-5 text-left shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-md">
                  {/* Decorative Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
                  
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                    <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-widest uppercase">
                      {brand.estPartner}
                    </span>
                    <span className="font-mono text-[9px] text-[#777777] uppercase tracking-wider font-bold">
                      {brand.carsServiced}
                    </span>
                  </div>

                  {/* Brand Title and Specialty */}
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mb-1 flex items-center gap-2">
                    <span className="text-red-500 shrink-0">
                      <BrandLogo id={brand.id} className="h-4 w-auto" />
                    </span>
                    <span>{brand.name} Specification</span>
                  </h4>
                  <p className="text-[10px] text-red-500 font-mono uppercase tracking-wider mb-2.5">
                    🛡️ Specialty: {brand.specialty}
                  </p>

                  {/* Body description */}
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-3 font-normal normal-case">
                    {brand.details}
                  </p>

                  {/* Highlight Metric */}
                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-500 font-mono uppercase tracking-wider">VERIFIED STATUS</span>
                    <span className="font-mono text-white bg-red-700/20 border border-red-750/30 px-2 py-0.5 font-bold tracking-widest uppercase">
                      {brand.highlightMetric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* Loop 2 */}
            {BRAND_PARTNERS.map((brand, idx) => (
              <div 
                key={`b2-${idx}`} 
                className="group relative flex items-center gap-3 px-5 py-2.5 mx-2 border border-white/5 bg-black/40 hover:bg-neutral-950 hover:border-red-700/40 transition duration-300 select-none cursor-help shrink-0"
              >
                {/* Brand Logo Icon */}
                <span className="text-white/40 group-hover:text-red-500 transition-colors duration-300">
                  <BrandLogo id={brand.id} className="h-5 w-auto" />
                </span>
                
                {/* Brand Name Text */}
                <span className="text-white/40 group-hover:text-white transition-colors duration-300 font-display font-black text-xs tracking-widest uppercase">
                  {brand.logoText}
                </span>

                {/* POP OVER - Highly Styled Luxury Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-80 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50 rounded-none border border-red-700/40 bg-black/95 p-5 text-left shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-md">
                  {/* Decorative Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
                  
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                    <span className="font-mono text-[9px] text-red-500 font-extrabold tracking-widest uppercase">
                      {brand.estPartner}
                    </span>
                    <span className="font-mono text-[9px] text-[#777777] uppercase tracking-wider font-bold">
                      {brand.carsServiced}
                    </span>
                  </div>

                  {/* Brand Title and Specialty */}
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mb-1 flex items-center gap-2">
                    <span className="text-red-500 shrink-0">
                      <BrandLogo id={brand.id} className="h-4 w-auto" />
                    </span>
                    <span>{brand.name} Specification</span>
                  </h4>
                  <p className="text-[10px] text-red-500 font-mono uppercase tracking-wider mb-2.5">
                    🛡️ Specialty: {brand.specialty}
                  </p>

                  {/* Body description */}
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-3 font-normal normal-case">
                    {brand.details}
                  </p>

                  {/* Highlight Metric */}
                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-500 font-mono uppercase tracking-wider">VERIFIED STATUS</span>
                    <span className="font-mono text-white bg-red-700/20 border border-red-750/30 px-2 py-0.5 font-bold tracking-widest uppercase">
                      {brand.highlightMetric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Feedback Infinite Scroller Marquee (Satisfies Dynamic Testimonials Animated requirement) */}
        <div className="relative mt-10 w-full overflow-hidden select-none">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <div className="animate-marquee flex gap-6 py-4 items-stretch" style={{ animationDuration: "45s" }}>
            {/* Double Render for seamless continuous wrap */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div 
                key={`t-${idx}`} 
                className="w-80 sm:w-96 rounded-none border border-l-2 border-white/5 border-l-red-750 bg-white/5 p-6 backdrop-blur-md flex flex-col justify-between shrink-0 transition-all hover:bg-white/[0.08] hover:border-red-650/40 hover:shadow-2xl hover:shadow-red-950/10"
              >
                <div>
                  <div className="flex gap-1.5 text-red-500 mb-3 text-xs">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-sans italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{testimonial.author}</h4>
                    <p className="text-[10px] text-red-500 mt-0.5 font-mono uppercase tracking-wider">{testimonial.vehicle}</p>
                  </div>
                  <span className="rounded-none bg-neutral-950 border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#777777]">
                    Verified Client
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING & CONTACT SECTION */}
      <section id="booking-form-section" className="relative bg-black px-6 py-24 border-t border-white/5">
        
        <div className="mx-auto max-w-7xl z-10 relative">
          
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Renton WA Details & Custom Map UI (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase">VISIT ADAS CONCEPTS</span>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">Our Renton Facility</h2>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-2">
                  Drop off your vehicle at our secure Renton facility. Our space holds continuous surveillance, deionized filtering chambers, and electronic diagnostic bays.
                </p>
              </div>

              {/* Facility Details Cards */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="flex gap-4 rounded-none bg-neutral-900/40 p-4 border border-white/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-white/5 border border-white/10 text-red-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-bold">Physical Address</h4>
                    <p className="text-sm font-bold text-white uppercase tracking-wider mt-1">900 Grady Way, Renton, Washington 98057</p>
                    <p className="text-[11px] text-neutral-450 mt-0.5">Under 1 minute from I-405, near Renton Shopping Village.</p>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="flex gap-4 rounded-none bg-neutral-900/40 p-4 border border-white/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-white/5 border border-white/10 text-red-500">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-bold">Contact Center</h4>
                    <p className="text-sm font-bold text-white mt-1">+1 (425) 555-0190</p>
                    <p className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider mt-0.5">Instant WhatsApp: 24/7 Support Channel</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4 rounded-none bg-neutral-900/40 p-4 border border-white/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-white/5 border border-white/10 text-red-500">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-bold">Workshop Schedule</h4>
                    <p className="text-sm font-bold text-white mt-1 uppercase tracking-wider">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-[11px] text-neutral-450 mt-0.5">Sunday Slot Booking: Closed for detailing cure cycles.</p>
                  </div>
                </div>
              </div>

              {/* PREMIUM INTERACTIVE MOCK MAP CAPABILITY */}
              <div className="relative overflow-hidden rounded-none border border-white/15 bg-neutral-900 p-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-red-500" />
                    <span className="font-display text-xs font-bold text-white uppercase tracking-widest">Facility Coordinates Map</span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-600">47.4829° N, 122.2171° W</span>
                </div>

                {/* Stylized dark blueprint-like vector map card */}
                <div className="relative h-44 rounded-none bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden bg-grid">
                  
                  {/* Mock Streets & Markers in high fidelity */}
                  <div className="absolute inset-0 p-4 font-mono text-[9px] text-neutral-800 select-none">
                    <div className="absolute top-2 left-6 border-l border-white/5 h-32" />
                    <div className="absolute top-1/2 left-0 right-0 border-t border-white/5" />
                    <div className="absolute bottom-6 left-12 border-l border-white/5 h-16" />
                    <span className="absolute top-8 left-16 text-neutral-800 tracking-widest font-semibold uppercase">INTERSTATE 405</span>
                    <span className="absolute bottom-6 right-20 text-neutral-800 tracking-widest font-semibold uppercase text-right">GRADY WAY</span>
                  </div>

                  {/* Renton Center Locator Badge */}
                  <div className="relative z-10 rounded-none bg-neutral-950 border border-red-700/40 p-3 shadow-2xl flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-none bg-red-700 text-white font-black text-xs italic">
                      A
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black text-white uppercase tracking-wider">Adas Concepts HQ</h5>
                      <p className="text-[9px] text-red-500 font-bold uppercase tracking-wider">900 Grady Way, Renton, WA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                  <span>🚗 Onsite client security valet lot</span>
                  <a 
                    href="https://maps.google.com/?q=900+Grady+Way+Renton+WA" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-red-500 hover:underline flex items-center cursor-pointer"
                  >
                    Open Google Maps &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Active Reservation Scheduler (7 Cols) */}
            <div className="lg:col-span-7">
              <BookingForm 
                selectedServiceId={selectedServiceId} 
                onServiceChange={setSelectedServiceId} 
              />
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-section" className="bg-black py-24 px-6 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-2">
            <span className="font-mono text-xs font-bold tracking-widest text-red-500 uppercase">KNOWLEDGE BASE</span>
            <h2 className="font-display text-3xl font-black text-white uppercase italic tracking-tighter leading-tight">Frequently Asked Questions</h2>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1">
              Have inquiries regarding paint depths, cure times, or custom alignment processes? See our clear answers.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-none border border-white/10 bg-neutral-900/40 hover:border-white/20 transition overflow-hidden"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left p-5 font-bold text-sm uppercase tracking-wider text-white hover:text-red-500 transition cursor-pointer font-display"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-500" : "text-neutral-500"}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 bg-black/60 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER & ACCREDITATIONS */}
      <footer className="bg-black border-t border-white/5 py-16 px-6 relative">
        <div className="mx-auto max-w-7xl">
          
          {/* Custom reactive legal notification block */}
          {footerNotice && (
            <div className="mb-10 p-5 bg-neutral-900 border-l-2 border-red-700 text-xs text-neutral-300 font-mono uppercase tracking-wider flex items-center justify-between animate-pulse">
              <span>{footerNotice}</span>
              <button 
                onClick={() => setFooterNotice(null)} 
                className="text-red-500 hover:text-white uppercase font-black text-[10px] tracking-widest cursor-pointer ml-4"
              >
                [Dismiss]
              </button>
            </div>
          )}

          <div className="grid gap-10 md:grid-cols-12 mb-12">
            
            {/* Column 1: Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-none bg-red-700 text-white font-display font-black text-xl italic tracking-tighter">
                  AC
                </div>
                <span className="font-display text-base font-black text-white uppercase tracking-wider">Adas Concepts</span>
              </div>
              <p className="text-xs text-neutral-450 leading-relaxed max-w-sm font-mono uppercase tracking-tight">
                Renton's signature automotive detailing and computerized tune boutique. Harnessing mechanical principles and nano-ceramic sciences since 2004 for showroom excellence.
              </p>
              <p className="text-[10px] font-mono text-neutral-600">
                © {new Date().getFullYear()} Adas Concepts. Independent Premium Facility. All rights reserved.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-3.5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">Quick Navigation</h4>
              <ul className="text-xs space-y-2 text-neutral-400 font-medium">
                <li><button onClick={() => handleScrollTo("hero-root")} className="hover:text-red-500 transition cursor-pointer font-mono uppercase text-[10px] tracking-wider">Return to Home</button></li>
                <li><button onClick={() => handleScrollTo("about-section")} className="hover:text-red-500 transition cursor-pointer font-mono uppercase text-[10px] tracking-wider">Our 2004 Heritage</button></li>
                <li><button onClick={() => handleScrollTo("services-section")} className="hover:text-red-500 transition cursor-pointer font-mono uppercase text-[10px] tracking-wider">Detailing & Care Suite</button></li>
                <li><button onClick={() => handleScrollTo("booking-form-section")} className="hover:text-red-500 transition cursor-pointer font-mono uppercase text-[10px] tracking-wider">Reserve Tuning Slot</button></li>
              </ul>
            </div>

            {/* Column 3: Trust Certs */}
            <div className="md:col-span-4 space-y-3.5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">Accreditation Standards</h4>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-tight">
                Operating with fully EPA approved water reclamation filters, Gtechniq authorized coatings, and ASE Master mechanical diagnostic processes.
              </p>
              <div className="flex flex-wrap gap-2.5 text-[9px] font-mono text-neutral-400">
                <span className="rounded-none bg-neutral-950 border border-white/10 px-2.5 py-1.5 font-bold">ASE CERTIFIED</span>
                <span className="rounded-none bg-neutral-950 border border-white/10 px-2.5 py-1.5 font-bold">9H CERTIFIED</span>
                <span className="rounded-none bg-neutral-950 border border-white/10 px-2.5 py-1.5 font-bold">EPA COMPLIANT</span>
              </div>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-xs font-semibold text-neutral-500">
              <a 
                href="#privacy" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setFooterNotice("Privacy Policy Statement: Authorized detailing client records, vehicle diagnostic telemetry, and contact details remain strictly confidential and offline."); 
                }} 
                className="hover:text-red-500 font-mono uppercase tracking-wider text-[10px]"
              >
                Privacy Policy
              </a>
              <span className="text-neutral-800">•</span>
              <a 
                href="#terms" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setFooterNotice("Terms of Care Statement: Repair estimates expire in 30 days. Our multi-year warranties depend strictly on the selected hydrophobic coating package option."); 
                }} 
                className="hover:text-red-500 font-mono uppercase tracking-wider text-[10px]"
              >
                Terms of Care
              </a>
            </div>
            
            {/* Scroll back up action */}
            <button
              onClick={() => handleScrollTo("hero-root")}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-400 transition cursor-pointer font-mono uppercase tracking-widest text-[10px]"
              title="Return to topmost page"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* WHATSAPP DYNAMIC CONCIERGE FLOATING LEAD CAPTURE BUTTON */}
      <WhatsAppWidget />
    </div>
  );
}
