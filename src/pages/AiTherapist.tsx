import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const AiTherapist = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Therapist</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A multilingual AI voice assistant for emotional support.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">AI</span>
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">Voice Tech</span>
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">Accessibility</span>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-elegant aspect-video bg-card border border-border mb-12">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/videos/ai-therapist.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI Therapist is an innovative emotional support platform that breaks language barriers 
              to provide compassionate assistance to users worldwide. Powered by advanced AI and voice 
              recognition technology, it offers a safe space for individuals seeking emotional guidance 
              and support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The platform supports multiple languages and uses natural language processing to understand 
              and respond empathetically to users' concerns. It's designed to be accessible, private, and 
              available 24/7 for those who need someone to talk to.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AiTherapist;
