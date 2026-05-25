import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExperienceItem } from "@/constants/data";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const typeLabel: Record<ExperienceItem["type"], string> = {
  research: "Research",
  industry: "Industry",
  teaching: "Teaching",
};

const typeColor: Record<ExperienceItem["type"], string> = {
  research: "bg-blue-50 text-blue-700 border-blue-200",
  industry: "bg-emerald-50 text-emerald-700 border-emerald-200",
  teaching: "bg-violet-50 text-violet-700 border-violet-200",
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 24 : -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-5">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-semibold text-base leading-snug">
                  {item.title}
                </h3>
                <span
                  className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${typeColor[item.type]}`}
                >
                  {typeLabel[item.type]}
                </span>
              </div>

              {/* Company and date */}
              <p className="text-sm text-muted-foreground mb-1">
                {item.company}
              </p>
              <p className="text-xs text-accent font-medium mb-4">{item.date}</p>

              {/* Description list */}
              <ul className="space-y-1 mb-4 list-none">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden md:block w-6 relative">
        <div className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-sm ring-2 ring-accent/20" />
      </div>

      <div className="md:w-1/2" />
    </div>
  );
};

export default TimelineItem;
