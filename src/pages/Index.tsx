import { useEffect, useState } from "react";
import {
  ArrowRight, BookOpen, FileText, Github, ExternalLink,
  Mail, Phone, MapPin, LinkedinIcon, GithubIcon, TwitterIcon, GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "../components/ContactForm";
import {
  aboutMe, publications, experience, projects,
  education, skills, awards, leadership, certifications,
} from "../constants/data";

// ─── Style maps ──────────────────────────────────────────────────────────────

const pubTypeStyle: Record<string, string> = {
  conference: "bg-blue-50 text-blue-700 border-blue-200",
  workshop:   "bg-violet-50 text-violet-700 border-violet-200",
  journal:    "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const expTypeStyle: Record<string, string> = {
  research: "bg-blue-50 text-blue-700 border-blue-200",
  industry: "bg-emerald-50 text-emerald-700 border-emerald-200",
  teaching: "bg-violet-50 text-violet-700 border-violet-200",
};

// ─── Shared components ────────────────────────────────────────────────────────

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-7">
    <h2 className="heading-lg mb-1">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm max-w-2xl">{subtitle}</p>}
  </div>
);

const linkCls =
  "flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border bg-white " +
  "hover:bg-muted/40 hover:shadow-sm transition-all text-foreground/70 hover:text-foreground";

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroSection = () => {
  const [displayName, setDisplayName] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const full = aboutMe.name;
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) { setDisplayName(full.substring(0, i)); i++; }
      else { clearInterval(t); setTimeout(() => setCursorOn(false), 600); }
    }, 80);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="pt-24 pb-10 border-b border-border/30">
      <div className="section-container">

        {/* Row 1 — photo + info */}
        <div className="grid lg:grid-cols-4 gap-8 items-start mb-8 animate-fade-in">

          {/* Photo column */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
            <div className="w-full max-w-[190px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border/30 mx-auto lg:mx-0">
              <img
                src="/images/1.jpg"
                alt="Garthigan Kumarasamy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Contact */}
            <div className="space-y-1.5 w-full">
              <a href="mailto:garthidata@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors break-all">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                garthidata@gmail.com
              </a>
              <a href="tel:+94765479683"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                +94 76 547 9683
              </a>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Colombo, Sri Lanka
              </span>
            </div>

            {/* Profile links */}
            <div className="flex flex-col gap-1.5 w-full">
              <a href={aboutMe.scholarUrl} target="_blank" rel="noreferrer" className={linkCls}>
                <GraduationCap className="h-3.5 w-3.5" /> Google Scholar
              </a>
              <a href="https://github.com/Garthigan" target="_blank" rel="noreferrer" className={linkCls}>
                <GithubIcon className="h-3.5 w-3.5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/garthigan-kumarasamy-1450891a9/" target="_blank" rel="noreferrer" className={linkCls}>
                <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a href="/assets/GARTHIGAN_UPDATED.pdf" target="_blank" rel="noreferrer" className={linkCls}>
                <FileText className="h-3.5 w-3.5" /> Download CV
              </a>
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-3">
            <h1 className="heading-xl mb-2 leading-tight">
              {displayName}
              {cursorOn && (
                <span className="inline-block w-0.5 h-[0.85em] bg-accent ml-1 align-middle animate-[pulse_0.8s_ease-in-out_infinite]" />
              )}
            </h1>
            <p className="text-xl font-medium text-foreground/70 mb-0.5">{aboutMe.role}</p>
            <p className="text-sm text-muted-foreground">Department of Computer Science and Engineering</p>
            <p className="text-sm text-muted-foreground mb-5">University of Moratuwa, Colombo, Sri Lanka</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">{aboutMe.summary}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="default" className="rounded-md px-6" onClick={() => scrollTo("publications")}>
                <BookOpen className="mr-2 h-4 w-4" /> View Research
              </Button>
              <Button variant="outline" size="default" className="rounded-md px-6" onClick={() => scrollTo("contact")}>
                Contact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Row 2 — research interests + publications | education */}
        <div className="grid lg:grid-cols-5 gap-8 pt-8 border-t border-border/30">

          {/* Left */}
          <div className="lg:col-span-3 space-y-7">

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Research Interests
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {aboutMe.researchInterests.map((r, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Recent Publications
              </h2>
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xs font-mono text-muted-foreground/50 shrink-0 mt-0.5 w-5">[{i + 1}]</span>
                    <div>
                      <p className="text-sm font-medium leading-snug">{pub.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 mb-1.5">{pub.authors}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded border ${pubTypeStyle[pub.type]}`}>
                          {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {pub.conference} &mdash; {pub.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo("publications")}
                className="mt-3 text-sm text-accent hover:underline flex items-center gap-1 font-medium"
              >
                View all publications <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right — education */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                  <div className="flex items-start gap-2 mb-0.5 flex-wrap">
                    <p className="text-sm font-semibold leading-snug flex-1">{edu.degree}</p>
                    {edu.status === "Reading" && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-foreground/80">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{edu.year}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{edu.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── Publications ─────────────────────────────────────────────────────────────

const PublicationsSection = () => (
  <section id="publications" className="py-12">
    <div className="section-container">
      <SectionHeader
        title="Publications"
        subtitle="Peer-reviewed conference and workshop papers in computer vision, robotics, and AI systems."
      />
      <div className="space-y-4 max-w-4xl">
        {publications.map((pub, i) => (
          <Card key={pub.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-sm font-mono text-muted-foreground/50 shrink-0 mt-0.5 w-6">[{i + 1}]</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-snug mb-1.5">{pub.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${pubTypeStyle[pub.type]}`}>
                      {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                    </span>
                    <span className="text-xs font-medium text-foreground/70">{pub.conference}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{pub.location} &mdash; {pub.date}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 shrink-0 mt-0.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ─── Experience ───────────────────────────────────────────────────────────────

const ExperienceCard = ({ item }: { item: typeof experience[0] }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-5">
      <div className="flex items-start gap-2 flex-wrap mb-2">
        <h3 className="font-semibold text-sm leading-snug flex-1">{item.title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${expTypeStyle[item.type]}`}>
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{item.company}</p>
      <p className="text-xs text-accent font-medium mt-0.5 mb-3">{item.date}</p>
      <ul className="space-y-1 mb-3">
        {item.description.map((pt, j) => (
          <li key={j} className="flex gap-2 text-xs text-foreground/80">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
      {item.technologies && (
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((t, j) => (
            <Badge key={j} variant="outline" className="text-xs font-normal">{t}</Badge>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

const ExperienceSection = () => {
  const research = experience.filter((e) => e.type === "research");
  const industry = experience.filter((e) => e.type === "industry");
  const teaching = experience.filter((e) => e.type === "teaching");

  return (
    <section id="experience" className="py-12 bg-muted/20">
      <div className="section-container">
        <SectionHeader title="Experience" subtitle="Academic research, industry engineering, and teaching roles." />
        <div className="space-y-10 max-w-4xl">

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Research</h3>
            <div className="space-y-4">
              {research.map((item) => <ExperienceCard key={item.id} item={item} />)}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Industry</h3>
            <div className="space-y-4">
              {industry.map((item) => <ExperienceCard key={item.id} item={item} />)}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Teaching</h3>
            <div className="space-y-4">
              {teaching.map((item) => <ExperienceCard key={item.id} item={item} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Projects ─────────────────────────────────────────────────────────────────

const ProjectsSection = () => (
  <section id="projects" className="py-12">
    <div className="section-container">
      <SectionHeader title="Projects" subtitle="Open-source implementations and applied machine learning projects." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow group">
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-sm leading-snug mb-1.5">{project.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.slice(0, 4).map((t, j) => (
                  <Badge key={j} variant="secondary" className="text-xs font-normal">{t}</Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs font-normal">+{project.technologies.length - 4}</Badge>
                )}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ─── Education & Skills ───────────────────────────────────────────────────────

const EducationSection = () => (
  <section id="education" className="py-12 bg-muted/20">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-10">

        <div>
          <SectionHeader title="Education" />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-sm leading-snug">{edu.degree}</h3>
                      {edu.status === "Reading" && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          Current
                        </span>
                      )}
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs">{edu.year}</Badge>
                  </div>
                  {"department" in edu && <p className="text-xs text-muted-foreground">{edu.department}</p>}
                  <p className="text-xs font-medium mt-0.5">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{edu.specialization}</p>
                  {"coursework" in edu && edu.coursework && (
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c, ci) => (
                          <Badge key={ci} variant="secondary" className="text-xs font-normal">{c}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Skills" />
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, j) => (
                      <Badge key={j} variant="secondary" className="font-normal text-xs">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── Awards & Leadership ──────────────────────────────────────────────────────

const AwardsSection = () => (
  <section id="awards" className="py-12">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-10">

        <div>
          <SectionHeader title="Awards" />
          <div className="space-y-2.5">
            {awards.map((award, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-snug">{award.title}</p>
                  {award.organization && <p className="text-xs text-muted-foreground mt-0.5">{award.organization}</p>}
                </div>
                <Badge variant="outline" className="shrink-0 text-xs">{award.year}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Leadership" />
          <div className="space-y-3">
            {leadership.map((item, i) => (
              <Card key={i} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
                    <div>
                      <span className="font-semibold text-sm">{item.role}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.organization}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs">{item.duration}</Badge>
                  </div>
                  <ul className="space-y-1">
                    {item.description.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="heading-md mb-4">Certifications</h3>
            <div className="space-y-2.5">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-3.5 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-xs">{cert.year}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── Contact ──────────────────────────────────────────────────────────────────

const ContactSection = () => {
  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, label: "Email", text: "garthidata@gmail.com", href: "mailto:garthidata@gmail.com" },
    { icon: <Phone className="h-4 w-4" />, label: "Phone", text: "+94 76 547 9683", href: "tel:+94765479683" },
    { icon: <MapPin className="h-4 w-4" />, label: "Location", text: "Colombo, Sri Lanka", href: "#hero" },
  ];
  const socialLinks = [
    { icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn", href: "https://www.linkedin.com/in/garthigan-kumarasamy-1450891a9/" },
    { icon: <GithubIcon className="h-4 w-4" />, label: "GitHub", href: "https://github.com/Garthigan" },
    { icon: <TwitterIcon className="h-4 w-4" />, label: "X / Twitter", href: "https://x.com/Garthigan_Kumar" },
  ];

  return (
    <section id="contact" className="py-12 bg-muted/20">
      <div className="section-container">
        <SectionHeader title="Contact" subtitle="Open to research collaborations, academic enquiries, and professional opportunities." />
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">

          <div>
            <div className="space-y-4 mb-6">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Online Profiles</p>
            <div className="flex gap-2.5">
              {socialLinks.map((link, i) => (
                <Button key={i} variant="outline" size="icon" asChild className="rounded-lg w-9 h-9" title={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">{link.icon}</a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-md mb-4">Send a Message</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Index = () => (
  <>
    <HeroSection />
    <PublicationsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <AwardsSection />
    <ContactSection />
  </>
);

export default Index;
