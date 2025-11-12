import { Link } from "wouter";
import { Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { toggleTheme } = useTheme();

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

        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-12 tracking-tight">hey, i'm sahej.</h1>

        {/* Navigation */}
        <nav className="flex gap-3 text-base mb-12 flex-wrap">
          <span className="text-foreground font-medium">home</span>
          <span className="text-muted-foreground">/</span>
          <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
            work
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/startups-projects" className="text-muted-foreground hover:text-foreground transition-colors">
            startups & projects
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/fun-facts" className="text-muted-foreground hover:text-foreground transition-colors">
            fun facts & photos
          </Link>
        </nav>
           {/* Introduction */}
        <div className="space-y-6 text-base leading-relaxed mb-32">
          <p>
            I study Computer Engineering at the University of Waterloo.
          </p>
          <p>
            Currently, I'm working as a Software + Product Engineering intern at <a href="https://rootly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Rootly AI (YC S21)</a>, doing open-source AI research with <a href="https://cohere.com/research" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cohere Labs</a> and building healthcare-focused LLMs at <a href="https://www.hostalky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Hostalky</a>, building <a href="https://hitsmart.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">HitSmart</a>, and creating <a href="https://www.instagram.com/sahej.eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">content</a>.
          </p>
          <p>
            My journey started when I was 13, I co-founded EnvironAI (backed by <a href="https://dmz.torontomu.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DMZ</a>), a waste-sorting app using AI for item classification, integrated with a chatbot and making recycling easier. That project made me fall in love with startups and building, and since then, I've worked on or for 9 startups, shipping real products across AI, health, and education.
          </p>
          <p>
            Outside of work, I enjoy staying active through sports, hiking, and the gym - and I'm always planning my next adventure, having traveled to over 30 countries (and counting).
          </p>
          <p className="mt-8">
            You can reach me at s7bahl[at]uwaterloo[dot]ca
          </p>
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
