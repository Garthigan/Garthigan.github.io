import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/data";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              Open-source implementations and applied machine learning projects
              spanning computer vision, edge AI, and NLP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
