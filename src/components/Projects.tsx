import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Zap, Cpu, Wifi, MessageCircle } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Buck Converter Design",
      subtitle: "Thesis Project",
      period: "Mar 2025 – Jul 2025",
      icon: Zap,
      color: "primary",
      description: "Designed and simulated a low-voltage Buck DC-DC converter in Cadence Virtuoso with comprehensive analysis of switching behavior and efficiency optimization.",
      achievements: [
        "Full responsibility for design and simulation",
        "Defined specifications including output voltage and efficiency targets",
        "Performed steady-state waveform simulations",
        "Documented detailed thesis with waveform analysis"
      ],
      technologies: ["Cadence Virtuoso", "Power Electronics", "Circuit Design", "Simulation"],
      status: "In Progress"
    },
    {
      title: "Folded Cascode Operational Amplifier",
      subtitle: "Analog IC Design",
      period: "Aug 2024 – Oct 2024",
      icon: Cpu,
      color: "secondary",
      description: "Designed and optimized a high-performance folded cascode op-amp targeting high gain, wide bandwidth, and low power consumption.",
      achievements: [
        "Achieved open-loop gain >40 dB",
        "Achieved GBW >10 MHz under target loading",
        "Analyzed stability with phase margin checks",
        "Optimized for low power consumption"
      ],
      technologies: ["Cadence Virtuoso", "Analog Design", "Op-Amp Design", "Circuit Analysis"],
      status: "Completed"
    },
    {
      title: "UART Communication System",
      subtitle: "FPGA Implementation",
      period: "Apr 2024 – Jul 2024",
      icon: Code,
      color: "accent",
      description: "Implemented a complete UART communication system in Verilog HDL with configurable parameters and real-time FPGA deployment.",
      achievements: [
        "Designed Tx, Rx, and Frame Check submodules",
        "Configurable baud rates and parity options",
        "Verified using ModelSim testbenches",
        "Successfully deployed on FPGA board"
      ],
      technologies: ["Verilog HDL", "FPGA", "ModelSim", "Digital Design"],
      status: "Completed"
    },
    {
      title: "Semiconductor Q&A Chatbot",
      subtitle: "AI-Powered Assistant",
      period: "Feb 2024 – Apr 2024",
      icon: MessageCircle,
      color: "secondary",
      description: "Developed an intelligent chatbot using Rasa framework to answer technical questions about semiconductor devices and concepts.",
      achievements: [
        "Created training dataset with 100+ intents",
        "Implemented story flows using YAML files",
        "Integrated fallback mechanism",
        "Used NLP confidence scoring for response variation"
      ],
      technologies: ["Rasa", "NLP", "YAML", "Python", "Machine Learning"],
      status: "Completed"
    },
    {
      title: "Door Locking System",
      subtitle: "IoT Security Project",
      period: "Sep 2023 – Dec 2023",
      icon: Wifi,
      color: "accent",
      description: "Built a comprehensive door access control system using Arduino and ESP32 with mobile app integration for remote control.",
      achievements: [
        "Designed UART communication protocol",
        "Implemented on Arduino Uno and ESP32",
        "Developed mobile application interface",
        "Wi-Fi remote access control capability"
      ],
      technologies: ["Arduino", "ESP32", "UART", "Wi-Fi", "Mobile App"],
      status: "Completed"
    }
  ];

  const getIconComponent = (IconComponent: any, color: string) => {
    const colorClasses = {
      primary: "text-primary",
      secondary: "text-secondary", 
      accent: "text-accent"
    };
    return <IconComponent className={`h-6 w-6 ${colorClasses[color as keyof typeof colorClasses]}`} />;
  };

  const getStatusColor = (status: string) => {
    return status === "In Progress" ? "bg-primary/10 text-primary" : "bg-success/10 text-success";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in analog IC design, digital systems, and embedded applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-scale-in h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-card rounded-lg group-hover:shadow-glow transition-all duration-300">
                    {getIconComponent(project.icon, project.color)}
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {project.subtitle} • {project.period}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-border/50 hover:bg-primary/10 hover:border-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}