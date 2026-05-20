import React from "react";
import { Service } from "../data";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  key?: string;
  service: Service;
  onSelect: (serviceId: string) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div 
      id={`service-card-${service.id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-600/50 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-red-950/20"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-red-600/5 blur-2xl transition duration-500 group-hover:bg-red-600/10 group-hover:blur-xl" />

      <div>
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-neutral-800/85 p-3 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
          <Icon className="h-6 w-6 stroke-[2]" />
        </div>

        <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-red-500">
          {service.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          {service.description}
        </p>

        <ul className="mt-4 space-y-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-neutral-400 font-medium">
              <span className="mr-1.5 h-1 w-1 rounded-full bg-red-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-800/60">
        <button
          onClick={() => onSelect(service.id)}
          className="flex w-full items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-neutral-400 transition-all duration-300 group-hover:text-red-500"
        >
          <span>Instantly Plan & Book</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
}
