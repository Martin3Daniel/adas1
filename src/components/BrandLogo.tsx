import React from "react";

interface BrandLogoProps {
  id: string;
  className?: string;
}

export default function BrandLogo({ id, className = "h-6 w-auto" }: BrandLogoProps) {
  switch (id) {
    case "porsche":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
          {/* Outer elegant luxury golden shield */}
          <path d="M4 3 H20 C20 12, 16 18, 12 21 C8 18, 4 12, 4 3 Z" fill="currentColor" className="text-red-700/10" stroke="none" />
          <path d="M4 3 H20 C20 12, 16 18, 12 21 C8 18, 4 12, 4 3 Z" stroke="currentColor" strokeWidth="1.5" />
          {/* Inner horizontal details representing high-integrity motorsport engineering */}
          <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1" />
          <path d="M12 7 V17" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "audi":
      return (
        <svg viewBox="0 0 64 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="10" cy="10" r="8" />
          <circle cx="22" cy="10" r="8" />
          <circle cx="34" cy="10" r="8" />
          <circle cx="46" cy="10" r="8" />
        </svg>
      );
    case "bmw":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="11" />
          <circle cx="12" cy="12" r="8.5" />
          {/* Inner classic quadrants */}
          <path d="M12 3.5 V20.5 M3.5 12 H20.5" stroke="currentColor" strokeWidth="1" />
          <path d="M12 12 H20 A8 8 0 0 0 12 4 Z" fill="currentColor" className="text-red-700/20" stroke="none" />
          <path d="M12 12 H4 A8 8 0 0 0 12 20 Z" fill="currentColor" className="text-red-700/20" stroke="none" />
        </svg>
      );
    case "mercedes":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="11" />
          <path d="M12 12 L12 2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 12 L3.2 17" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 12 L20.8 17" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "tesla":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          {/* Top horizontal Tesla wings */}
          <path d="M4 3.5 C 8 5.5, 16 5.5, 20 3.5 C 16 4.5, 8 4.5, 4 3.5 Z" />
          {/* Main vertical central shield core */}
          <path d="M12 5.5 C13 5.5, 18 6, 18 9 C18 13.5, 14.5 18, 12 20 C9.5 18, 6 13.5, 6 9 C6 6, 11 5.5, 12 5.5 Z M12 7.5 C11 7.5, 8 8, 8 10 C8 13.5, 11.5 16, 12 17.5 C12.5 16, 16 13.5, 16 10 C16 8, 13 7.5, 12 7.5 Z" />
        </svg>
      );
    case "lexus":
      return (
        <svg viewBox="0 0 28 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="14" cy="10" rx="13" ry="9" />
          <path d="M8.5 6.5 V13.5 H19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          <path d="M8.5 10.5 L19.2 6.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "ferrari":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 3 H20 V12 C20 16.5, 16 20, 12 21 C8 20, 4 16.5, 4 12 Z" />
          <circle cx="12" cy="11" r="4.5" className="text-red-700/10" fill="currentColor" stroke="none" />
          {/* Minimal prancing shape representing racetrack authority */}
          <path d="M11 11.5 Q12 8, 12.5 11.5 T13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Mini Italian Flag tricolor accents at the top border */}
          <rect x="5" y="4" width="4.5" height="1.5" fill="#15803d" stroke="none" />
          <rect x="9.5" y="4" width="5.0" height="1.5" fill="#f8fafc" stroke="none" />
          <rect x="14.5" y="4" width="4.5" height="1.5" fill="#b91c1c" stroke="none" />
        </svg>
      );
    case "landrover":
      return (
        <svg viewBox="0 0 44 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="2" width="42" height="16" rx="8" fill="rgba(16, 185, 129, 0.04)" stroke="currentColor" />
          <text x="22" y="12" textAnchor="middle" fontSize="5.5px" fontFamily="monospace" fontWeight="900" letterSpacing="0.5px" fill="currentColor">
            ROVER
          </text>
        </svg>
      );
    default:
      return null;
  }
}
