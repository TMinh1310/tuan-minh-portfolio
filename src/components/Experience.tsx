import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Analog IC Design Intern",
      company: "VIETA Solutions Vietnam Co., Ltd",
      period: "Mar 2025 – Jun 2025",
      location: "Hanoi, Vietnam",
      type: "internship",
      description: [
        "Joined the analog IC design team specializing in power management circuits",
        "Conducted schematic design, simulation verification using Cadence Virtuoso",
        "Assisted in debugging analog blocks and optimizing key performance metrics (gain, power, area)",
        "Gained hands-on experience with industry-standard analog design flow"
      ]
    },
    {
      title: "IC LAB Design Research",
      company: "Hanoi University of Science and Technology",
      period: "2023 – Present",
      location: "Hanoi, Vietnam",
      type: "research",
      description: [
        "Supervised by Dr. Nguyen Vu Thang",
        "Practical analog IC design projects",
        "Focused on power management circuits",
        "Joined weekly seminars and design reviews with IC research team"
      ]
    }
  ];

  const activities = [
    {
      title: "Youth Union Member",
      organization: "Hanoi University of Science and Technology",
      period: "2021 – 2024",
      type: "activity"
    },
    {
      title: "Student Assistance Program",
      organization: "Hanoi University of Science and Technology",
      period: "2022 – Present",
      type: "volunteer"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and research in analog IC design and electronics engineering
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-primary font-medium">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2 mt-3 lg:mt-0">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-floating transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                      {activity.title}
                    </h4>
                    <div className="flex items-center gap-2 text-secondary font-medium mb-2">
                      <Building className="h-4 w-4" />
                      {activity.organization}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {activity.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}