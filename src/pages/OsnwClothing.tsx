import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const OsnwClothing = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OSNW Clothing</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Timeless streetwear built for the modern soul.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">E-commerce</span>
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">Branding</span>
            <span className="px-4 py-2 text-sm font-medium bg-secondary rounded-full">UI/UX</span>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-elegant aspect-video bg-card border border-border mb-12">
            {/* Video placeholder - replace with actual embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary/50 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-foreground border-y-[10px] border-y-transparent ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">
                  OSNW Clothing showcase video
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
              title="OSNW Clothing Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              OSNW Clothing represents the perfect blend of timeless design and modern streetwear culture. 
              This e-commerce platform showcases a carefully curated collection of apparel that speaks to 
              the modern soul seeking authenticity in fashion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The project focuses on creating a seamless shopping experience with an emphasis on visual 
              storytelling and brand identity. Every element, from product photography to user interface, 
              has been crafted to reflect the OSNW ethos of timeless style.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default OsnwClothing;
