import { Link } from "wouter";
import { Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Work() {
  const { toggleTheme } = useTheme();

  const experiences = [
    {
      company: "Rootly AI (YC S21)",
      year: "2025",
      title: "Software + Product Engineer Intern",
      location: "Toronto, Ontario, Canada",
      description: "shipping features for Rootly's AI-powered incident management platform for enterprise clients like NVIDIA, LinkedIn, and Canva",
      url: "https://rootly.com/",
    },
    {
      company: "PointClickCare",
      year: "2025",
      title: "Software Engineer (AI/ML) Co-op",
      location: "Toronto, Ontario, Canada",
      description: "maintained ML pipeline, automated workflows, and improved reliability and visibility of internal services",
      url: "https://pointclickcare.com/",
    },
    {
      company: "WAT.ai",
      year: "2025",
      title: "Machine Learning Engineer",
      location: "Waterloo, Ontario, Canada",
      description: "building MindMirror - an AI driven journaling and wellness app",
      url: "https://watai.ca/",
    },
    {
      company: "Hostalky",
      year: "2024",
      title: "AI Engineer Intern",
      location: "Toronto, Ontario, Canada",
      description: "built note scanning, speech-to-text, and other AI features to streamline healthcare workflows",
      url: "https://www.hostalky.com/",
    },
    {
      company: "SterilWize",
      year: "2024",
      title: "Computer Engineer Intern",
      location: "Waterloo, Ontario, Canada",
      description: "built a data acquisition system using Raspberry Pi and a custom PCB design to automate data logging from sterilizers; hired as youngest member of team",
      url: "https://sterilwize.com/",
    },
    {
      company: "Xccelerata",
      year: "2023",
      title: "Software Engineer Intern",
      location: "Toronto, Ontario, Canada",
      description: "developed an image recognition algorithm (patent pending) and an RFID tracking system; worked across several startups in the VC portfolio; hired as youngest member of team",
      url: "https://www.xccelerata.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-8 right-8 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          <Moon className="w-5 h-5" />
        </button>        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-12 tracking-tight">work</h1>

        {/* Navigation */}
        <nav className="flex gap-3 text-base mb-12 flex-wrap">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            home
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">work</span>
          <span className="text-muted-foreground">/</span>
          <Link href="/startups-projects" className="text-muted-foreground hover:text-foreground transition-colors">
            startups & projects
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/fun-facts" className="text-muted-foreground hover:text-foreground transition-colors">
            fun facts & photos
          </Link>
        </nav>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <h2 className="text-base font-bold text-foreground">
                  {exp.company}
                </h2>
                <span className="text-sm text-muted-foreground">{exp.year}</span>
              </div>
              <h3 className="text-sm font-medium mb-3">{exp.title}</h3>
              <p className="text-sm text-foreground flex items-start gap-2">
                <span className="text-muted-foreground">→</span>
                {exp.description}
              </p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-border">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="mailto:s7bahl@uwaterloo.ca" className="hover:text-foreground transition-colors">
              email
            </a>
            <a href="https://www.linkedin.com/in/sahej-bahl/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              linkedin
            </a>
            <a href="https://x.com/SahejBahl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              x
            </a>
            <a href="https://www.instagram.com/sahej.eng" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              instagram
            </a>
            <a href="https://github.com/SahejBahl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
