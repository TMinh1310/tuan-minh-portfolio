import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Bot, User } from "lucide-react";

interface ChatMessage {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined responses about Pham Tuan Minh
  const responses = {
    greeting: [
      "Hello! I'm Minh's AI assistant. I can tell you about his experience in analog IC design, projects, and skills. What would you like to know?",
      "Hi there! I'm here to help you learn more about Pham Tuan Minh's work in electronics engineering. Feel free to ask about his projects or experience!",
      "Welcome! I can provide information about Minh's background in analog IC design, his education at HUST, and his technical projects. How can I help?"
    ],
    education: [
      "Minh is studying Electronics and Communication Engineering at Hanoi University of Science and Technology with a GPA of 3.45/4.0. He received a Scholarship for Academic Excellence in Semester 2023.2 and excels in subjects like Verilog Design, Analog Electronics, and C/C++ Programming.",
      "He's currently pursuing his engineering degree at HUST, focusing on analog IC design. His strong academic performance includes A grades in key subjects like Semiconductor Electronics and Digital System Design."
    ],
    experience: [
      "Minh has valuable experience as an Analog IC Design Intern at VIETA Solutions Vietnam Co., Ltd (Mar-Jun 2025), where he worked on power management circuits using Cadence Virtuoso. He's also been involved in IC LAB Design research at HUST since 2023 under Dr. Nguyen Vu Thang.",
      "His professional experience includes hands-on work with industry-standard analog design flow, circuit simulation, and optimization of key performance metrics like gain, power, and area."
    ],
    projects: [
      "Minh has worked on several impressive projects: a Buck Converter Design (his thesis project), a Folded Cascode Op-Amp achieving >40 dB gain, a UART Communication System on FPGA, a Semiconductor Q&A Chatbot using Rasa, and an IoT Door Locking System with Arduino & ESP32.",
      "His projects showcase expertise in both analog and digital design, from power management circuits to embedded systems and AI applications."
    ],
    skills: [
      "Minh's technical skills include advanced proficiency in Cadence Virtuoso, C/C++, and Verilog. He also works with ModelSim, Arduino IDE, and Python. His specialization areas cover analog IC design, power management, circuit simulation, and embedded systems.",
      "He has strong presentation and documentation skills, with VSTEP B2 English proficiency, making him effective in international collaborations."
    ],
    contact: [
      "You can reach Minh at minh.pt131003@gmail.com or call him at 0332 219 748. He's located in Hoang Mai district, Hanoi, Vietnam. You can also connect with him on LinkedIn at linkedin.com/in/pham-tuan-minh-304928322.",
      "For professional inquiries about analog IC design, internships, or collaboration opportunities, feel free to contact him via email or LinkedIn."
    ],
    default: [
      "I'd be happy to tell you more about Minh's experience in analog IC design, his education, projects, or technical skills. What specific area interests you?",
      "I can provide information about Minh's work in electronics engineering, his academic achievements, or his technical projects. What would you like to know more about?",
      "Feel free to ask about Minh's background in semiconductor design, his experience with Cadence Virtuoso, his projects, or anything else you'd like to know!"
    ]
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    
    if (lowerInput.includes("education") || lowerInput.includes("university") || lowerInput.includes("study") || lowerInput.includes("gpa") || lowerInput.includes("hust")) {
      return responses.education[Math.floor(Math.random() * responses.education.length)];
    }
    
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job") || lowerInput.includes("intern")) {
      return responses.experience[Math.floor(Math.random() * responses.experience.length)];
    }
    
    if (lowerInput.includes("project") || lowerInput.includes("buck") || lowerInput.includes("uart") || lowerInput.includes("opamp") || lowerInput.includes("chatbot")) {
      return responses.projects[Math.floor(Math.random() * responses.projects.length)];
    }
    
    if (lowerInput.includes("skill") || lowerInput.includes("cadence") || lowerInput.includes("verilog") || lowerInput.includes("programming") || lowerInput.includes("tool")) {
      return responses.skills[Math.floor(Math.random() * responses.skills.length)];
    }
    
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("linkedin") || lowerInput.includes("reach")) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat opens
      setMessages([{
        id: "welcome",
        type: "bot",
        content: "Hello! I'm Minh's AI assistant. I can tell you about his experience in analog IC design, projects, education, and skills. What would you like to know?",
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: getResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] bg-gradient-card border-border/50 shadow-floating animate-scale-in">
        <CardHeader className="pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <span>AI Assistant</span>
            </CardTitle>
            <Button variant="outline" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex flex-col h-[500px]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    message.type === "user" 
                      ? "bg-primary/10" 
                      : "bg-secondary/10"
                  }`}>
                    {message.type === "user" ? (
                      <User className="h-4 w-4 text-primary" />
                    ) : (
                      <Bot className="h-4 w-4 text-secondary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Bot className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border/50">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Minh's experience, projects, or skills..."
                className="flex-1 border-border/50"
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                className="bg-gradient-primary hover:shadow-glow"
                disabled={isTyping || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}