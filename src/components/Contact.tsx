import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:henryquainoo2212@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-foreground transition-smooth"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-foreground transition-smooth"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border focus:border-foreground transition-smooth resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              
              <Button 
                type="button"
                variant="outline" 
                size="lg"
                className="flex-1"
                onClick={() => window.location.href = "mailto:henryquainoo2212@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                Direct Email
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
