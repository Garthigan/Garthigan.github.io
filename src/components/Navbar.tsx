import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { id: "hero",         label: "Home" },
  { id: "publications", label: "Research" },
  { id: "experience",   label: "Experience" },
  { id: "projects",     label: "Projects" },
  { id: "education",    label: "Education" },
  { id: "contact",      label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState("hero");

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Wordmark */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            Garthigan<span className="text-accent">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link text-sm transition-colors ${
                  activeId === id ? "active-nav-link text-accent" : ""
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/assets/GARTHIGAN_UPDATED.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen bg-white/95 backdrop-blur-md">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full text-left block px-3 py-3 text-base rounded-md ${
                  activeId === id
                    ? "text-accent font-medium bg-accent/5"
                    : "hover:text-accent hover:bg-muted/50"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/assets/GARTHIGAN_UPDATED.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-3 text-base hover:text-accent"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
