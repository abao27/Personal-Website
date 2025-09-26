import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Error",
          description: "Oops! Something went wrong. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alanb@berkeley.edu",
      href: "mailto:alanb@berkeley.edu"
    },
    {
      icon: Linkedin,
      label: "Linkedin",
      value: "linkedin.com/in/alan-bao/",
      href: "https://www.linkedin.com/in/alan-bao/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.app.goo.gl/QSTFSqPBsmB5kLq4A"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Contact Me
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact */}
            <div className="animate-slide-up">
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6">
                  Send Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="transition-smooth focus:shadow-glow"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@domain.com"
                        required
                        className="transition-smooth focus:shadow-glow"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Email subject"
                      required
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="transition-smooth focus:shadow-glow resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {/* Contact Details */}
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
                <h2 className="text-2xl font-space font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-accent transition-smooth font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth border-2 border-accent/20">
                <h3 className="text-xl font-space font-semibold mb-4">
                  Availability
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Available for new projects and work</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently seeking new freelance projects and new grad/entry level full-time opportunities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
