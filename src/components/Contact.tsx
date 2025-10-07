import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Have an idea or project? Let's bring it to life.
            </p>
          </div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a 
                href="mailto:henryquainoo2212@gmail.com"
                className="group flex items-center gap-4 gradient-card p-6 rounded-lg border border-border hover:border-foreground/20 transition-smooth shadow-elegant hover:shadow-glow"
              >
                <div className="p-3 rounded-full bg-secondary">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold group-hover:text-foreground transition-smooth">henryquainoo2212@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+233556626526"
                className="group flex items-center gap-4 gradient-card p-6 rounded-lg border border-border hover:border-foreground/20 transition-smooth shadow-elegant hover:shadow-glow"
              >
                <div className="p-3 rounded-full bg-secondary">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Phone / WhatsApp</p>
                  <p className="font-semibold group-hover:text-foreground transition-smooth">+233 55 662 6526</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
