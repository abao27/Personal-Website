import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ucbassist from "@/assets/UCBAssist.jpeg";
import project2 from "@/assets/project-2.jpg";
import sudoku from "@/assets/sudoku.png";
import coindungeon from "@/assets/coindungeon.png"
import taxtools from "@/assets/taxtools.png"
import snake from "@/assets/snake.png"


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Image Editor",
      description: "An image-editing software derived from computer vision mathematics. Currently backend only.",
      image: project2,
      technologies: ["Python", "OpenCV", "Sci-kit Learn", "Scipy", "Numpy"],
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "UC Berkeley Assist Tool",
      description: "A webapp that helps UC Berkeley students research transferable community college courses.",
      image: ucbassist,
      technologies: ["Python", "React", "Javascript", "Selenium"],
      url: "https://github.com/abao27/UCB-Assist-Tool",
      featured: true
    },
    {
      id: 3,
      title: "Coin Dungeon*",
      description: "A mini-game with the objective of collecting all coins in a randomly-generated labyrinth.",
      image: coindungeon,
      technologies: ["Java", "edu.princeton.cs.algs4"],
      url: "#",
      featured: false
    },
    {
      id: 4,
      title: "Taxtools*",
      description: "A webapp that visualizes tax data and can simulate a user's savings and retirement.",
      image: taxtools,
      technologies: ["Javascript", "Svelte", "Microsoft Excel"],
      url: "#",
      featured: false
    },
    {
      id: 5,
      title: "Terminal Snake*",
      description: "The classic snake game that is playable in your terminal, coded in C.",
      image: snake,
      technologies: ["C"],
      url: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto">
              A collection of projects highlighting my skills in software development,
              artificial intelligence, applied mathematics, and more.

              Note: still updating this page so project links are not live yet
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-space font-semibold mb-8 animate-slide-up">
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group animate-slide-up"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <Button size="sm" variant="glass" className="flex-1">
                          <Eye size={16} />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-space font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="modern" className="flex-1">
                        <ExternalLink size={16} />
                        View Project
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h2 className="text-2xl font-space font-semibold mb-8 animate-slide-up">
              All Projects
            </h2>

            <p className="text-muted-foreground max-w-2xl mb-6">
              *Note: some projects may not have a Github repository or demo due to school or club policy.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group animate-slide-up"
                  style={{animationDelay: `${0.4 + index * 0.05}s`}}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-space font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="modern" className="flex-1">
                        <Eye size={14} />
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <Card className="p-8 shadow-card gradient-subtle border-2 border-accent/20">
              <h2 className="text-2xl font-space font-semibold mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;