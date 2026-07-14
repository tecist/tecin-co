"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal-green text-white shadow-lg shadow-signal-green/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-signal-green/40" />
    </a>
  );
}
