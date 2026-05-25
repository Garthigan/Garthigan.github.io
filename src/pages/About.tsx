import { motion } from "framer-motion";
import { aboutMe, skills, education, certifications } from "../constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">About</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutMe.summary}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Research Interests */}
            <motion.div {...fadeUp(0.05)}>
              <h2 className="heading-md mb-6">Research Interests</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {aboutMe.researchInterests.map((interest, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-foreground/80">{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div {...fadeUp(0.1)}>
              <h2 className="heading-md mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <Card key={i} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-semibold text-base">{edu.degree}</h3>
                            {edu.status === "Reading" && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                Current
                              </span>
                            )}
                          </div>
                          {"department" in edu && (
                            <p className="text-sm text-muted-foreground">{edu.department}</p>
                          )}
                          <p className="text-sm font-medium mt-1">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mt-1">{edu.specialization}</p>
                          {"coursework" in edu && edu.coursework && (
                            <div className="mt-3">
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                Relevant Coursework
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {edu.coursework.map((c, ci) => (
                                  <Badge key={ci} variant="secondary" className="text-xs font-normal">
                                    {c}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <Badge variant="outline" className="shrink-0 self-start">
                          {edu.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div {...fadeUp(0.15)}>
              <h2 className="heading-md mb-6">Technical Skills</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill, i) => (
                  <Card key={i} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        {skill.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, j) => (
                          <Badge key={j} variant="secondary" className="font-normal">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeUp(0.2)}>
              <h2 className="heading-md mb-6">Certifications</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <Card key={i} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-medium text-sm leading-snug">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div {...fadeUp(0.25)}>
              <h2 className="heading-md mb-6">Outside Research</h2>
              <div className="flex flex-wrap gap-2">
                {aboutMe.personalInterests.map((interest, i) => (
                  <Badge key={i} variant="outline" className="text-sm font-normal px-3 py-1">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
