import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-accent/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-space font-bold gradient-primary bg-clip-text text-transparent">
            alanbao.org
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "modern" : "ghost"}
                  size="sm"
                  asChild
                  className="transition-smooth"
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <Icon size={16} />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "modern" : "ghost"}
                  size="icon"
                  asChild
                  className="transition-smooth"
                >
                  <Link to={item.path}>
                    <Icon size={18} />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;