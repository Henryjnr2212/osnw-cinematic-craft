import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 gradient-card relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Henry Quainoo</span>, a Ghanaian creative and web developer passionate about blending old-soul design with modern innovation. 
            Through Built by OSNW, I craft digital experiences that are both timeless and cutting-edge, 
            merging artistry with technology to create something truly special.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
