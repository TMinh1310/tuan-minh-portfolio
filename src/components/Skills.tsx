import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Languages, Award } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Wrench,
      color: "primary",
      skills: [
        { name: "Cadence Virtuoso", level: "Advanced" },
        { name: "ModelSim", level: "Intermediate" },
        { name: "Arduino IDE", level: "Advanced" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "secondary",
      skills: [
        { name: "C/C++", level: "Advanced" },
        { name: "Verilog", level: "Advanced" },
        { name: "Python", level: "Intermediate" }
      ]
    },
    {
      title: "Languages",
      icon: Languages,
      color: "accent",
      skills: [
        { name: "English", level: "VSTEP B2 (7.0)" },
        { name: "Vietnamese", level: "Native" }
      ]
    },
    {
      title: "Other Skills",
      icon: Award,
      color: "secondary",
      skills: [
        { name: "Presentation", level: "Advanced" },
        { name: "Documentation", level: "Advanced" },
        { name: "Technical Writing", level: "Advanced" }
      ]
    }
  ];

  const coreSubjects = [
    { name: "Verilog Design", grade: "A", color: "success" },
    { name: "Analog Electronics", grade: "A", color: "success" },
    { name: "Semiconductor Electronics", grade: "A", color: "success" },
    { name: "C/C++ Programming", grade: "A", color: "success" },
    { name: "Digital System Design I", grade: "B+", color: "primary" },
    { name: "Digital System Design II", grade: "A", color: "success" },
    { name: "Circuit Theory", grade: "B", color: "secondary" }
  ];

  const getIconComponent = (IconComponent: any, color: string) => {
    const colorClasses = {
      primary: "text-primary",
      secondary: "text-secondary", 
      accent: "text-accent"
    };
    return <IconComponent className={`h-6 w-6 ${colorClasses[color as keyof typeof colorClasses]}`} />;
  };

  const getLevelColor = (level: string) => {
    if (level.includes("Advanced") || level.includes("A")) return "bg-success/10 text-success border-success/20";
    if (level.includes("Intermediate") || level.includes("B+")) return "bg-primary/10 text-primary border-primary/20";
    if (level.includes("B")) return "bg-secondary/10 text-secondary border-secondary/20";
    return "bg-muted/50 text-muted-foreground border-border";
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and academic achievements in electronics engineering and software development
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Skills Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Technical Skills</h3>
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-card rounded-lg group-hover:shadow-glow transition-all duration-300">
                      {getIconComponent(category.icon, category.color)}
                    </div>
                    <span className="group-hover:text-primary transition-colors">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid gap-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <Badge className={`${getLevelColor(skill.level)} text-xs`}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Performance */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Academic Performance</h3>
            
            {/* Overall GPA Card */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-3xl font-bold gradient-text">3.45/4.0</CardTitle>
                <p className="text-muted-foreground">Overall GPA</p>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Badge className="bg-success/10 text-success border-success/20">
                  Scholarship for Academic Excellence - Semester 2023.2
                </Badge>
              </CardContent>
            </Card>

            {/* Core Subjects */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="group-hover:text-primary transition-colors">Core Subjects</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid gap-3">
                  {coreSubjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{subject.name}</span>
                      <Badge className={`${getLevelColor(subject.grade)} text-xs font-bold`}>
                        {subject.grade}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialization */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="group-hover:text-primary transition-colors">Specialization Areas</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {["Analog IC Design", "Power Management", "Circuit Simulation", "Semiconductor Physics", "Digital System Design", "Embedded Systems"].map((spec, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary/30 hover:bg-primary/10 transition-colors">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}