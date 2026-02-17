import { Link } from "wouter";
import { Moon, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function FunFacts() {
  const { toggleTheme } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const funFacts = [
    "Have played many competitive sports since i was 8 years old with soccer being my favourite (competed at a national level)",
    "Won ROPSSAA (regional) championship in volleyball and rugby, highschool athlete of the year award, Soccer & Volleyball MVP/captain, basketball DPOY",
    "Generated 5 figure revenue in high school starting a business selling exclusive streetwear; gained 5k+ Instagram followers and worked with high-profile clients like pro soccer player Jahkeele Marshall-Rutty and influencer Alessya Farrugia",
    "I LOVE to travel - adventured in 30+ countries",
    "I was born in Connecticut (USA), but currently located in Toronto (Canada)",
    "Currently coaching a competitive volleyball team",
  ];

  const photos = [
    "/DF53DD5F-9D66-4E14-A03E-BF76E3D83AD8.webp",
    "/IMG_2666.webp",
    "/noaza-171.jpg",
    "/IMG_5968.webp",
    "/IMG_0328.webp",
    "/IMG_3220.webp",
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
        <h1 className="text-4xl font-bold mb-12 tracking-tight">fun facts & photos</h1>

        {/* Navigation */}
        <nav className="flex gap-3 text-base mb-12">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
            work
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/startups-projects" className="text-muted-foreground hover:text-foreground transition-colors">
            startups & projects
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">fun facts & photos</span>
        </nav>

        {/* Fun Facts Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Fun Facts</h2>
          <ul className="space-y-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="text-sm text-foreground flex gap-3">
                <span className="text-muted-foreground flex-shrink-0 leading-[1.5]">•</span>
                <span className="leading-[1.5]">{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Photo Preview Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Photo preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

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
