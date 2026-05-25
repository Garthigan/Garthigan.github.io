import { ArrowRight, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { aboutMe } from "@/constants/data";
import { useEffect, useState } from "react";

const Hero = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showAccent, setShowAccent] = useState(false);

  useEffect(() => {
    const parts = aboutMe.name.split(" ");
    const first = parts[0];
    const last = parts[1];

    let iFirst = 0;
    let iLast = 0;

    const timerFirst = setInterval(() => {
      if (iFirst <= first.length) {
        setFirstName(first.substring(0, iFirst));
        iFirst++;
      } else {
        clearInterval(timerFirst);
        const timerLast = setInterval(() => {
          if (iLast <= last.length) {
            setLastName(last.substring(0, iLast));
            iLast++;
          } else {
            clearInterval(timerLast);
            setShowAccent(true);
          }
        }, 180);
      }
    }, 180);

    return () => clearInterval(timerFirst);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <div className="max-w-2xl">
            {/* Affiliation badge */}
            <p
              className="subheading text-accent mb-4 animate-fade-in"
              style={{ animationDelay: "0ms" }}
            >
              {aboutMe.affiliation}
            </p>

            {/* Name with typing animation */}
            <h1
              className="heading-xl mb-3 animate-fade-in"
              style={{ animationDelay: "80ms" }}
            >
              {firstName} {lastName}
              {showAccent && <span className="text-accent">.</span>}
            </h1>

            {/* Title */}
            <p
              className="text-xl font-medium text-foreground/70 mb-6 animate-fade-in"
              style={{ animationDelay: "160ms" }}
            >
              {aboutMe.role}
            </p>

            {/* Summary */}
            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              {aboutMe.summary}
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "320ms" }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/research">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Research
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <a href="/assets/GARTHIGAN_UPDATED.pdf" target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/contact">
                  Contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right — profile photo */}
          <div
            className="relative animate-fade-in flex justify-center"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute -inset-6 bg-accent/8 rounded-full blur-2xl" />
              <div className="absolute -inset-3 bg-accent/5 rounded-full" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/1.jpg"
                  alt="Garthigan Kumarasamy"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center -5%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in"
        style={{ animationDelay: "480ms" }}
      >
        <span className="text-xs text-muted-foreground/60 mb-2 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-9 border-2 border-muted-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/40 rounded-full mt-2 animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
