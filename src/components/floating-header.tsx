import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/north-east-yoga-logo.webp";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function FloatingHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Floating logo — top left */}
      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="group absolute left-4 top-4 z-30 sm:left-6 sm:top-6"
        aria-label="North East Yoga and Meditation Centre — home"
      >
        <img
          src={logoImg}
          alt="North East Yoga and Meditation Centre logo"
          className="h-16 w-16 rounded-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-20 sm:w-20"
          width={320}
          height={320}
          decoding="async"
          fetchPriority="high"
        />
      </Link>

      {/* Floating hamburger — top right */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Dropdown menu */}
      {open && (
        <nav className="absolute right-4 top-[calc(4rem+0.5rem)] z-40 w-48 origin-top-right rounded-2xl border border-white/15 bg-black/40 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-md sm:right-6 sm:top-[calc(5rem+0.5rem)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium tracking-wide text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              activeProps={{ className: "bg-white/20 text-white" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
