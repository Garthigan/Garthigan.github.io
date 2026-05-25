import { motion } from "framer-motion";
import { publications, experience, awards, leadership } from "../constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const typeStyle: Record<string, string> = {
  conference: "bg-blue-50 text-blue-700 border-blue-200",
  workshop: "bg-violet-50 text-violet-700 border-violet-200",
  journal: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const Research = () => {
  const researchExperience = experience.filter((e) => e.type === "research");

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">Research</h1>
            <p className="text-lg text-muted-foreground">
              Publications, research projects, and academic contributions in
              computer vision, deep learning, and multimodal AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Publications */}
            <motion.div {...fadeUp(0.05)}>
              <h2 className="heading-md mb-2">Publications</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Peer-reviewed conference and workshop papers.
              </p>
              <div className="space-y-5">
                {publications.map((pub, i) => (
                  <Card
                    key={pub.id}
                    className="hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Publication number */}
                          <p className="text-xs text-muted-foreground font-medium mb-1">
                            [{i + 1}]
                          </p>
                          {/* Title */}
                          <h3 className="font-semibold text-base leading-snug mb-2">
                            {pub.title}
                          </h3>
                          {/* Authors */}
                          <p className="text-sm text-muted-foreground mb-3">
                            {pub.authors}
                          </p>
                          {/* Venue row */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeStyle[pub.type]}`}
                            >
                              {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                            </span>
                            <span className="text-sm font-medium text-foreground/80">
                              {pub.conference}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {pub.location} &mdash; {pub.date}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Research Experience */}
            <motion.div {...fadeUp(0.1)}>
              <h2 className="heading-md mb-2">Research Experience</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Academic research positions and supervised research projects.
              </p>
              <div className="space-y-5">
                {researchExperience.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-base leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {item.company}
                          </p>
                        </div>
                        <Badge variant="outline" className="shrink-0 self-start text-xs">
                          {item.date}
                        </Badge>
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {item.description.map((point, j) => (
                          <li key={j} className="flex gap-2 text-sm text-foreground/80">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {item.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, j) => (
                            <Badge key={j} variant="secondary" className="text-xs font-normal">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Awards and Recognitions */}
            <motion.div {...fadeUp(0.15)}>
              <h2 className="heading-md mb-2">Awards and Recognitions</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Academic, professional, and extracurricular distinctions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-snug">{award.title}</p>
                      {award.organization && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {award.organization}
                        </p>
                      )}
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs">
                      {award.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership and Service */}
            <motion.div {...fadeUp(0.2)}>
              <h2 className="heading-md mb-2">Leadership and Service</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Organisational roles and community contributions.
              </p>
              <div className="space-y-4">
                {leadership.map((item, i) => (
                  <Card key={i} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <span className="font-semibold text-sm">{item.role}</span>
                          <span className="text-muted-foreground text-sm"> — {item.organization}</span>
                        </div>
                        <Badge variant="outline" className="shrink-0 self-start text-xs">
                          {item.duration}
                        </Badge>
                      </div>
                      <ul className="space-y-1">
                        {item.description.map((point, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
