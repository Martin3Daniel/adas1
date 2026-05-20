import React, { useState, useEffect } from "react";
import { SERVICES } from "../data";
import { CheckCircle2, Calendar, Phone, User, Clock, Trash2 } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  datetime: string;
  notes?: string;
  createdOn: string;
}

interface BookingFormProps {
  selectedServiceId: string;
  onServiceChange: (val: string) => void;
}

export default function BookingForm({ selectedServiceId, onServiceChange }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastBooking, setLastBooking] = useState<Appointment | null>(null);
  const [allBookings, setAllBookings] = useState<Appointment[]>([]);

  // Load existing bookings
  useEffect(() => {
    const raw = localStorage.getItem("adas_bookings");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Appointment[];
        setAllBookings(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !selectedServiceId || !datetime) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const uniqueId = `ADAS-${Math.floor(1000 + Math.random() * 9000)}`;
      const newBooking: Appointment = {
        id: uniqueId,
        name,
        phone,
        serviceId: selectedServiceId,
        datetime,
        notes,
        createdOn: new Date().toLocaleDateString(),
      };

      const updated = [newBooking, ...allBookings];
      localStorage.setItem("adas_bookings", JSON.stringify(updated));
      setAllBookings(updated);
      setLastBooking(newBooking);
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset fields
      setName("");
      setPhone("");
      setDatetime("");
      setNotes("");
    }, 1200);
  };

  const deleteBooking = (id: string) => {
    const filtered = allBookings.filter((b) => b.id !== id);
    localStorage.setItem("adas_bookings", JSON.stringify(filtered));
    setAllBookings(filtered);
    if (lastBooking?.id === id) {
      setLastBooking(null);
    }
  };

  const getServiceName = (id: string) => {
    return SERVICES.find((s) => s.id === id)?.name || "Premium Custom Detailing";
  };

  // Build a WhatsApp message URL to instantly send details
  const getWhatsAppLink = (booking: Appointment) => {
    const text = `Hello Adas Concepts! I noticed your website and scheduled an appointment:\n\n*Reservation ID:* ${booking.id}\n*Name:* ${booking.name}\n*Phone:* ${booking.phone}\n*Service Requested:* ${getServiceName(booking.serviceId)}\n*Preferred Time:* ${booking.datetime.replace("T", " ")}\n${booking.notes ? `*Extra requests:* ${booking.notes}\n` : ""}\nPlease confirm my booking at Renton, WA!`;
    return `https://wa.me/14255550190?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="booking-planner-root" className="w-full">
      {showSuccess && lastBooking ? (
        <div className="rounded-none border border-emerald-500/30 bg-neutral-950 p-8 text-center shadow-xl backdrop-blur-md">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-none bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">Appointment Requested!</h3>
          <p className="mt-2 text-xs uppercase tracking-wider text-neutral-400">
            Your slot has been logged in our master workshop calendar.
          </p>
          
          {/* Ticket Detail Box */}
          <div className="my-6 rounded-none border border-white/10 bg-black/40 p-6 text-left">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">TICKET REFERENCE</span>
              <span className="font-mono text-sm font-black text-red-500 italic">{lastBooking.id}</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                <span className="text-neutral-500">CLIENT NAME</span>
                <span className="font-bold text-white">{lastBooking.name}</span>
              </div>
              <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                <span className="text-neutral-500">SERVICE REQUIRED</span>
                <span className="font-bold text-red-500">{getServiceName(lastBooking.serviceId)}</span>
              </div>
              <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                <span className="text-neutral-500">DESIRED DATE & TIME</span>
                <span className="font-bold text-white">
                  {new Date(lastBooking.datetime).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppLink(lastBooking)}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-none bg-emerald-600 px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500"
            >
              Confirm via WhatsApp
            </a>
            <button
              onClick={() => setShowSuccess(false)}
              className="flex flex-1 items-center justify-center rounded-none border border-white/10 bg-neutral-900 px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-neutral-800"
            >
              Book Another Service
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 rounded-none border border-white/15 bg-neutral-900 p-6 shadow-2xl">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">Book Appointment</h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
              Select details. We respond within 15 minutes during operating hours.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold" htmlFor="book-name">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <input
                  id="book-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-none bg-black/50 border border-white/10 py-3 pr-4 pl-11 text-sm text-white placeholder-neutral-600 focus:border-red-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold" htmlFor="book-phone">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <input
                  id="book-phone"
                  type="tel"
                  required
                  placeholder="e.g. (425) 555-0190"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-none bg-black/50 border border-white/10 py-3 pr-4 pl-11 text-sm text-white placeholder-neutral-600 focus:border-red-700 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Service Required */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold" htmlFor="book-service">
              Service Required *
            </label>
            <select
              id="book-service"
              required
              value={selectedServiceId}
              onChange={(e) => onServiceChange(e.target.value)}
              className="w-full rounded-none bg-black/50 border border-white/10 py-3 px-4 text-sm text-white focus:border-red-700 focus:outline-none appearance-none"
            >
              <option value="" className="bg-neutral-950">--- Choose Service ---</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-neutral-950 text-white">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Preferred Date & Time */}
            <div className="sm:col-span-2 flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold" htmlFor="book-time">
                Preferred Date & Time *
              </label>
              <div className="relative">
                <Calendar className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <input
                  id="book-time"
                  type="datetime-local"
                  required
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                  className="w-full rounded-none bg-black/50 border border-white/10 py-3 pr-4 pl-11 text-sm text-white focus:border-red-700 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Special notes */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold" htmlFor="book-notes">
              Add Specific Details / Car Model (Optional)
            </label>
            <textarea
              id="book-notes"
              rows={2}
              placeholder="e.g. 2021 Porsche 911, Ceramic coating requests..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-none bg-black/50 border border-white/10 p-3 text-sm text-white placeholder-neutral-600 focus:border-red-700 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 py-4 text-xs font-black uppercase tracking-widest text-white transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Checking Workshop Capacity...</span>
              </>
            ) : (
              <span>Confirm Appointment</span>
            )}
          </button>
        </form>
      )}

      {/* Persisted Active Bookings Display to elevate trust & client experience */}
      {allBookings.length > 0 && (
        <div className="mt-8 rounded-none border border-white/5 bg-neutral-900/60 p-6">
          <h4 className="font-display text-[10px] font-bold text-white uppercase tracking-widest mb-4 flex items-center">
            <span className="mr-2 h-2 w-2 bg-emerald-500 animate-pulse inline-block" />
            Your Scheduled Check-ins ({allBookings.length})
          </h4>
          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {allBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between gap-4 rounded-none border border-white/5 bg-black/40 p-3.5">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-red-500">{booking.id}</span>
                    <h5 className="truncate text-xs font-bold text-white uppercase tracking-wider">{booking.name}</h5>
                  </div>
                  <p className="mt-1 truncate text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {getServiceName(booking.serviceId)}
                  </p>
                  <span className="mt-0.5 inline-flex items-center text-[9px] text-neutral-500 font-mono">
                    <Calendar className="mr-1 h-3 w-3 text-red-700" />
                    {new Date(booking.datetime).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={getWhatsAppLink(booking)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-none bg-emerald-600/10 p-2 text-[9px] font-bold uppercase tracking-widest text-emerald-400 transition border border-emerald-600/20 hover:bg-emerald-600 hover:text-white"
                    title="Send via WhatsApp"
                  >
                    Confirm Whatsapp
                  </a>
                  <button
                    onClick={() => deleteBooking(booking.id)}
                    className="rounded-none p-2 text-neutral-500 transition border border-white/5 bg-neutral-900/50 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                    title="Cancel Booking"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
