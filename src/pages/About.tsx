import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, House, Briefcase } from "lucide-react";

const About = () => {
  const summary = [
    { name: "Prev SWE Intern @ Capital One", icon: Briefcase },
    { name: "University of California, Berkeley", icon: GraduationCap },
    { name: "San Diego, CA", icon: House }
  ];

  const skills = [
    "Full-Stack Development", "Machine Learning", "Computer Vision", "Data Science",
    "Applied Math"
  ]

  const technologies = [
    "Python", "Java", "C", "Golang", "JavaScript", "SQL", "x86", "Matlab",
    "AWS", "Docker", "React.js", "RESTful API", "Django", "Angular", "Pytorch",
    "NLTK", "Lit", "Figma", "Tableau", "Microsoft Office"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">

            {/* Summary Section */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="p-6 flex justify-center">
                <img 
                  src="/me.jpeg"
                  alt="Alan Bao"
                  className="w-45 h-45 object-cover rounded-full shadow-lg"
                />
              </div>

              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6">Alan Bao</h2>
                
                <div className="space-y-6">
                  {summary.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon size={18} className="text-accent" />
                            <span className="font-medium">{info.name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
            
            {/* Bio Section */}
            <div className="animate-slide-up">
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6">My Story</h2>
                
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Hello! I'm Alan, a senior at UC Berkeley studying EECS and Math. I've lived
                    most of my life in sunny San Diego, but have also lived in other states like
                    Virginia and Tennessee. My MBTI is ENFJ-A.
                  </p>
                  
                  <p>
                    My technical interests include software engineering, machine learning, computer
                    vision and cybersecurity. I'm especially passionate about applying computer science
                    and math to solve complex, real-world problems. Most recently, I interned at Capital
                    One as a Software Engineer, where I helped design the foundations for a new graph-based
                    decisioning system for auto loans.
                  </p>
                  
                  <p>
                    When I'm not coding, you may find me running, dancing, cooking, attending concerts
                    or playing puzzle games (i.e. NYT Mini). I enjoy going on adventures, exploring the
                    unknown, and challenging myself. Recently, I decided to start learning German and
                    Cantonese. Above all else, I love meeting people!
                  </p>

                  <p>
                    So if you have any questions, or would like to chat, please feel free to contact me
                    through my contact page.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          
          

          <div className="space-y-8">
            {/* Technologies */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6 text-center">
                  Core Skills
                </h2>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                      style={{animationDelay: `${0.6 + index * 0.05}s`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>


            {/* Technologies */}
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6 text-center">
                  Technologies & Tools
                </h2>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                      style={{animationDelay: `${0.6 + index * 0.05}s`}}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Experience Timeline */}
            <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
              <h2 className="text-2xl font-space font-semibold mb-6 text-center">
                Experience
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Software Engineer Intern",
                    company: "Capital One",
                    period: "June 2025 - August 2025",
                    description:
                      "Deployed a full-stack graph-based decisioning system for auto loans using Java, Rest APIs, AWS, Javascript and Lit framework.",
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Hologic",
                    period: "May 2024 - August 2024",
                    description:
                      "Implemented a text mining/classification pipeline and created topic models using Django, Scrapy webscraping and NLTK.",
                  },
                  {
                    title: "Data Science Research Intern",
                    company: "RR:ID Journal",
                    period: "February 2023 - December 2024",
                    description:
                      "Automated preprint review process using NLTK for an NLP bag-of-words model.",
                  },
                ].map((job, index) => (
                  <div key={index} className="pb-6 border-b-2 last:border-none last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-accent font-medium mb-1">{job.company}</p>
                    <p className="text-foreground/80">{job.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;