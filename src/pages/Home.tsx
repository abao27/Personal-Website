import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Introductions */}
            <div className="animate-fade-in">
              <h1 className="text-8xl md:text9xl font-space font-bold text-white mb-10 leading-tight">
                Hello, I'm{" "}
                <span className="gradient-accent bg-clip-text text-transparent inline-block text-float">
                  Alan
                </span>
              </h1>
              
              <p className="text-xl md:text-5lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Welcome to my webpage - where ideas become code
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button variant="hero" size="lg" asChild className="animate-slide-up">
                  <Link to="/portfolio" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                
                <a href="/Resume.docx.pdf" download>
                  <Button variant="glass" size="lg" className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <Download size={20} />
                    Download Resume
                  </Button>
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
       <div className="absolute bottom-0 left-0 right-0 z-10">
          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a href="https://github.com/abao27" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="icon" className="rounded-full">
                <Github size={20} />
              </Button>
            </a>
            <a href="https://linkedin.com/in/alan-bao" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="icon" className="rounded-full">
                <Linkedin size={20} />
              </Button>
            </a>
          </div>
          <div className="container mx-auto px-6 py-4">
            <div className="text-right">
              <p className="text-xs text-white/70">
                React • TypeScript • Node.js • Python
              </p>
            </div>
          </div>
        </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-warm/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default Home;