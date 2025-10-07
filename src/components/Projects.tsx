import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "OSNW Clothing",
    description: "Timeless streetwear built for the modern soul.",
    tags: ["E-commerce", "Branding", "UI/UX"],
    link: "/project/osnw-clothing",
  },
  {
    title: "AI Therapist",
    description: "A multilingual AI voice assistant for emotional support.",
    tags: ["AI", "Voice Tech", "Accessibility"],
    link: "/project/ai-therapist",
  },
  {
    title: "Built by OSNW",
    description: "The creative portfolio connecting tech and artistry.",
    tags: ["Portfolio", "Web Design", "React"],
    link: null,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group gradient-card p-8 rounded-lg border border-border hover:border-foreground/20 transition-smooth shadow-elegant hover:shadow-glow cursor-pointer h-full"
                >
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );

              return project.link ? (
                <Link key={project.title} to={project.link}>
                  {CardContent}
                </Link>
              ) : (
                <div key={project.title}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
