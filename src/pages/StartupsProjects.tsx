import { Link } from "wouter";
import { Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function StartupsProjects() {
  const { toggleTheme } = useTheme();

  const projects = [
    {
      title: "HitSmart",
      description: "HitSmart helps athletes take control of their concussion recovery and get back to feeling like themselves - smarter, safer, and stronger.",
      url: "https://hitsmart.app/",
      image: "/1.webp",
    },
    {
      title: "FitTrackAI",
      description: "Developed an AI fitness app for real-time form tracking and rep counting using MediaPipe and NumPy",
      url: "https://www.youtube.com/watch?v=85Nl4hZOjdg",
      image: "/4.webp",
    },
    {
      title: "EnvironAI",
      description: "Co-founded my first startup EnvironAI at 13 years old, a waste-sorting app using AI for 93% accurate item classification, integrated with a chatbot for disposal guidance backed by DMZ",
      url: "https://dmz.torontomu.ca/",
      image: "/3.webp",
    },
    {
      title: "Blind-Sighted",
      description: "Developed a diabetic retinopathy scanner using ML to assess retinal images, providing on-site analysis for early disease detection—finalist at Turner Hacks",
      url: "#",
      image: "/5.webp",
    },
    {
      title: "MotiveMattes",
      description: "Developed a productivity app for students, leading backend development, backed by DMZ",
      url: "https://dmz.torontomu.ca/",
      image: "/2.webp",
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
        </button>

        {/* Page title */}
        <h1 className="text-4xl font-bold mb-12 tracking-tight">startups & projects</h1>

        {/* Navigation */}
        <nav className="flex gap-3 text-base mb-12 flex-wrap">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
            work
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">startups & projects</span>
          <span className="text-muted-foreground">/</span>
          <Link href="/fun-facts" className="text-muted-foreground hover:text-foreground transition-colors">
            fun facts & photos
          </Link>
        </nav>

        {/* Project cards with images */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Project Content */}
                <div>
                  <h2 className="text-base font-bold mb-2 text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-sm text-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
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
