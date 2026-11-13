"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/**
 * Floating WhatsApp button for phones and tablets. It appears once the hero buttons have
 * scrolled away and hides again while the contact section (which has its own) is on screen.
 */
export function StickyWhatsApp() {
  const { t } = useLocale();
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    const io = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting));
    if (contact) io.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  if (!site.whatsapp.startsWith("http")) return null;
  const shown = pastHero && !contactVisible;

  return (
    <a
      href={whatsappLink(t.studio.whatsappPrefill)}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-surface shadow-[0_10px_40px_-10px_rgb(0_0_0/0.8)] transition-all duration-300 lg:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <MessageCircle className="h-4 w-4" />
      {t.studio.whatsappCta}
    </a>
  );
}
