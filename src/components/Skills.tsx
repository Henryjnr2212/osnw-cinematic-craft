import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Cpu, FileCode } from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "TailwindCSS", icon: Palette },
  { name: "Node.js", icon: Database },
  { name: "JavaScript", icon: Cpu },
  { name: "Visual Studio Code", icon: FileCode },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills & Tools</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="gradient-card p-6 rounded-lg border border-border hover:border-foreground/20 transition-smooth text-center group hover:scale-105 cursor-pointer"
                >
                  <Icon className="h-10 w-10 mx-auto mb-4 text-muted-foreground group-hover:text-foreground transition-smooth" />
                  <p className="font-medium text-sm">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
