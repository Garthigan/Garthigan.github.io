import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../constants/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Experience = () => {
  const researchItems = experience.filter((e) => e.type === "research");
  const industryItems = experience.filter((e) => e.type === "industry");
  const teachingItems = experience.filter((e) => e.type === "teaching");

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">Experience</h1>
            <p className="text-lg text-muted-foreground">
              Academic, industry, and teaching experience in machine learning,
              computer vision, and AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Research Experience */}
            {researchItems.length > 0 && (
              <motion.div {...fadeUp(0.05)}>
                <h2 className="heading-md mb-8">Research</h2>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20" />
                  <div className="space-y-8">
                    {researchItems.map((item, i) => (
                      <TimelineItem key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Industry Experience */}
            {industryItems.length > 0 && (
              <motion.div {...fadeUp(0.1)}>
                <h2 className="heading-md mb-8">Industry</h2>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20" />
                  <div className="space-y-8">
                    {industryItems.map((item, i) => (
                      <TimelineItem key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Teaching Experience */}
            {teachingItems.length > 0 && (
              <motion.div {...fadeUp(0.15)}>
                <h2 className="heading-md mb-8">Teaching</h2>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20" />
                  <div className="space-y-8">
                    {teachingItems.map((item, i) => (
                      <TimelineItem key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
