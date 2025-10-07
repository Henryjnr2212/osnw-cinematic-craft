import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Target } from "lucide-react";

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = ["React", "TailwindCSS", "Framer Motion", "TypeScript"];
  
  return (
    <section id="showcase" className="py-32 gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            See the Vision in Motion
          </h2>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Panel */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">AI Therapist</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">AI-Powered</span>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">Voice Tech</span>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">Multilingual</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                An emotional support AI assistant that speaks your language and understands your needs. 
                Built to provide comfort and guidance in multiple languages.
              </p>
            </motion.div>

            {/* Center Video */}
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-elegant aspect-video bg-card border border-border">
                {/* Placeholder for video - replace with actual embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-secondary/50 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-foreground border-y-[10px] border-y-transparent ml-1" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Video showcase placeholder
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      Replace with YouTube embed or MP4
                    </p>
                  </div>
                </div>
                
                {/* Uncomment and add your video URL */}
                {/* <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Project Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
              </div>
            </motion.div>

            {/* Right Panel */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-foreground" />
                  <h4 className="font-semibold">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-foreground" />
                  <h4 className="font-semibold">Project Goal</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Create an accessible, empathetic AI companion that breaks language barriers 
                  and provides emotional support to users worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
