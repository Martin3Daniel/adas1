import React from "react";
import { 
  Battery, 
  Disc, 
  Sparkles, 
  Compass, 
  Hammer, 
  Gauge, 
  Car, 
  CheckSquare 
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export interface Testimonial {
  id: number;
  author: string;
  vehicle: string;
  quote: string;
  rating: number;
  avatarSeed: string;
}

export const SERVICES: Service[] = [
  {
    id: "battery",
    name: "Battery Check & Repair",
    description: "Precision battery health diagnostics, cold cranking amps test, and high-performance battery replacements with premium warranties.",
    icon: Battery,
    features: ["Voltage Diagnostic", "Cranking Amp Check", "Premium AGM Options"]
  },
  {
    id: "tires",
    name: "Tire & Disc Blade Changing",
    description: "High-speed wheel mounting, precision balancing, and brake disc rotor inspections. We handle high-end performance rims safely.",
    icon: Disc,
    features: ["Laser Alignment", "Rotors Inspection", "Rim Protection Safe"]
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    description: "Elite multi-layer nano-ceramic coating with 5+ year hydrophobic shield. Exceptional gloss enhancements and deep paint correction matching master detailing standards.",
    icon: Sparkles,
    features: ["9H Hardness Shield", "Paint Correction Included", "Hydrophobic Finish"]
  },
  {
    id: "alignment",
    name: "Alignment Fixing",
    description: "Multi-axis computerized wheel alignment restores steering center, improves tire wear, and guarantees high-performance responsiveness.",
    icon: Compass,
    features: ["Digital Calibration", "Chassis Check", "Steering Angle Reset"]
  },
  {
    id: "denting",
    name: "Car Denting Repair",
    description: "Paintless Dent Repair (PDR) and premium structural dent restoration. Recreates native showroom contours without affecting original factory topcoats.",
    icon: Hammer,
    features: ["Paintless Paint Preservation", "Precision Metal Shaping", "Original Finish Guarantee"]
  },
  {
    id: "balancing",
    name: "Expert Engine Balancing",
    description: "Advanced engine vibration diagnostics. Fine-tuning of crankshaft assemblies, piston matching, and performance optimization for heavy-duty and sports vehicles.",
    icon: Gauge,
    features: ["Harmonic Diagnostics", "Crankshaft Laser Tuning", "Efficiency Restoration"]
  },
  {
    id: "wash",
    name: "Car Wash Facility",
    description: "Detailing-grade multi-bucket wash using deionized water, premium microfiber, active snow foams, and deep undercarriage salt clearance.",
    icon: Car,
    features: ["Deionized Water Spot-Free", "Snow Foam Conditioning", "Alloy Treatment"]
  },
  {
    id: "fitness",
    name: "Fitness Checking Facility",
    description: "Complete 150-point diagnostic check evaluating mechanical, safety, and electronic systems for absolute road readiness and pre-purchase peace of mind.",
    icon: CheckSquare,
    features: ["150-Point Inspection", "Digital Diagnostic Logs", "Safety Certifications"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Christopher K.",
    vehicle: "Porsche 911 Carrera S",
    quote: "Adas Concepts has been looking after my 911 since 2018. Their ceramic coating is pure art—literally looks wet in the Washington rain. Best detailers in Renton, hands down.",
    rating: 5,
    avatarSeed: "christopher"
  },
  {
    id: 2,
    author: "Michelle R.",
    vehicle: "Tesla Model S Plaid",
    quote: "Amazing team! They fixed a tricky alignment drift that two other shops failed to solve. Pure electronic and mechanical expertise. Transparent pricing and elite customer service.",
    rating: 5,
    avatarSeed: "michelle"
  },
  {
    id: 3,
    author: "David L.",
    vehicle: "Mercedes-AMG E63",
    quote: "Brought my AMG for a car dent repair and ceramic coating. The dent is absolutely invisible now. True mechanical craftsmanship and paint preservation experts.",
    rating: 5,
    avatarSeed: "david"
  },
  {
    id: 4,
    author: "Samantha W.",
    vehicle: "Audi Q7",
    quote: "The 150-point fitness check saved me thousands! They spotted a hidden coolant leak before I bought the car. I ended up getting my repair done here and they were amazing.",
    rating: 5,
    avatarSeed: "samantha"
  },
  {
    id: 5,
    author: "Marcus T.",
    vehicle: "BMW M4 Competition",
    quote: "Extremely meticulous. The expert engine balancing made my M4 ride buttery smooth again. These guys understand high-end cars and build lasting client trust since 2004.",
    rating: 5,
    avatarSeed: "marcus"
  }
];

export const BRAND_PARTNERS = [
  { 
    id: "porsche",
    name: "Porsche", 
    logoText: "PORSCHE",
    estPartner: "Est. Partner 2005",
    carsServiced: "340+ Vehicles Perfected",
    specialty: "911 GT3 & Carrera Paint Mastery",
    details: "Certified multi-stage paint correction, signature 9H dual-tier quartz glass coating cures, and custom self-healing clear PPF applications for track-ready preservation.",
    highlightMetric: "99.8% Specular Gloss"
  },
  { 
    id: "audi",
    name: "Audi", 
    logoText: "Audi",
    estPartner: "Est. Partner 2007",
    carsServiced: "420+ Vehicles Perfected",
    specialty: "R/RS Series Diagnostic & Coating",
    details: "High-speed brake thermal rotor checks, advanced multi-axis suspension balancing, and hydrophobic polymer nano-coatings tailored for Pacific Northwest winters.",
    highlightMetric: "5-Yr Dual Coating Warranty"
  },
  { 
    id: "bmw",
    name: "BMW", 
    logoText: "BMW",
    estPartner: "Est. Partner 2004",
    carsServiced: "680+ Vehicles Perfected",
    specialty: "M-Power Mechanical & Nano-Cure",
    details: "Computerized crankshaft balancing diagnostic routines, multi-bucket deionized clay prep, and full-chassis steering response recalibration for maximum Seattle highway precision.",
    highlightMetric: "150-Pt Master Certified"
  },
  { 
    id: "mercedes",
    name: "Mercedes", 
    logoText: "MERCEDES-BENZ",
    estPartner: "Est. Partner 2006",
    carsServiced: "510+ Vehicles Perfected",
    specialty: "AMG Performance Coatings & Leather Care",
    details: "Exclusive leather rehydrogenation formula, luxury cabin deep steam purification, and multi-layer hydrophobic seal guards applied to paintwork and alloy wheel barrels.",
    highlightMetric: "9H Nano-Quartz Certified"
  },
  { 
    id: "tesla",
    name: "Tesla", 
    logoText: "TESLA",
    estPartner: "Est. Partner 2013",
    carsServiced: "390+ Vehicles Perfected",
    specialty: "Plaid Paintwork Correction & Seal",
    details: "Meticulous factory orange-peel elimination, paintwork thickness verification, and specialized hydrophobic glass coatings that keep water clear of camera safety arrays.",
    highlightMetric: "Rain-Shed Cam Optimization"
  },
  { 
    id: "lexus",
    name: "Lexus", 
    logoText: "LEXUS",
    estPartner: "Est. Partner 2008",
    carsServiced: "450+ Vehicles Perfected",
    specialty: "F-Sport Quartz Seal & Balancing",
    details: "Self-healing clear coat preservation, engine mount dynamic vibration diagnostics, and multi-bucket luxury foam conditioning with spotless deionized water rinse.",
    highlightMetric: "100% Spot-Free Guarantee"
  },
  { 
    id: "ferrari",
    name: "Ferrari", 
    logoText: "FERRARI",
    estPartner: "Est. Partner 2009",
    carsServiced: "95+ Vehicles Perfected",
    specialty: "Exotic Hypercar Revitalization",
    details: "Ultra-thin electronic paint-depth scanning, wet-look multi-layer gloss bake cycles, rare leather feeding, and protective aerodynamic undercarriage heat shield coating.",
    highlightMetric: "Specular Gloss Score: 100/100"
  },
  { 
    id: "landrover",
    name: "Land Rover", 
    logoText: "LAND ROVER",
    estPartner: "Est. Partner 2010",
    carsServiced: "210+ Vehicles Perfected",
    specialty: "Range Rover Heavy-Duty Hydrophobic Prep",
    details: "Off-road undercarriage mud-repulsion formula, advanced multi-stage wet clay paint scrubbing, and industrial-strength silicon dioxide polymer chassis shields.",
    highlightMetric: "Heavy Duty Armor Guard"
  }
];

export const FAQS = [
  {
    question: "Do you offer warranties on your detailing and mechanical repairs?",
    answer: "Yes, absolutely. All premium detailing packages, including our Nano-Ceramic coatings, come with a written longevity guarantee of up to 5 years. All mechanical repairs and engine tuning services include our 12-month / 12,000-mile worry-free local warranty."
  },
  {
    question: "How long does a Ceramic Coating or Paint Correction project take?",
    answer: "Typically, premium ceramic coating and comprehensive paint correction takes 1 to 2 days. This is because we meticulously wash, clay, multi-stage machine polish (paint correction) to eliminate swirls, and carefully hand-apply and oven-cure each ceramic layer for unmatched molecular bonding."
  },
  {
    question: "Can I book a same-day alignment or battery check?",
    answer: "Yes, we always reserve a few diagnostic slots each day for urgent issues like battery failures, wheel alignment, or basic fitness certifications. We recommend utilizing our fast booking form or clicking the WhatsApp floating link to secure today's availability."
  },
  {
    question: "Why has Adas Concepts been Renton's favorite choice since 2004?",
    answer: "We combine high-end German mechanical standards with world-class detailing materials. Our technicians are certified master engineers who love cars—offering custom-tailored care, absolute transparency, and active communication representing premium workmanship."
  }
];
