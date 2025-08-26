import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about pushing the boundaries of analog IC design and semiconductor technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                A highly motivated Electronic and Communication Engineering student with a strong focus on 
                analog IC design and power management circuits. Seeking opportunities to apply and further 
                develop skills in schematic design, simulation, and verification using industry-standard 
                tools such as Cadence Virtuoso.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eager to contribute to innovative projects in semiconductor and analog design environments.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <p className="text-sm font-medium text-primary">Hanoi University of Science and Technology</p>
                    <p className="text-sm text-muted-foreground">Electronics & Communication Engineering</p>
                    <p className="text-sm text-muted-foreground">GPA: 3.45/4.0 • Sept 2021 – July 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Research Focus</h4>
                    <p className="text-sm text-muted-foreground">IC LAB Design - Supervised by Dr. Nguyen Vu Thang</p>
                    <p className="text-sm text-muted-foreground">Analog IC design projects, power management circuits</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Achievement</h4>
                    <p className="text-sm text-muted-foreground">Scholarship for Academic Excellence</p>
                    <p className="text-sm text-muted-foreground">Semester 2023.2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}