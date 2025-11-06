# Portfolio Website

A personal portfolio website built with React, TypeScript, and Vite.

## Setup Instructions

### 1. Install Node.js (if not already installed)

You can install Node.js using one of these methods:

**Option A: Using Homebrew**
```bash
# Fix homebrew permissions first (if needed)
sudo chown -R $(whoami) /opt/homebrew

# Then install Node.js
brew install node
```

**Option B: Download directly**
Download and install from [nodejs.org](https://nodejs.org/)

### 2. Install Dependencies

```bash
cd "/Users/sahejbahl/Downloads/Replicate Website with Adjusted Formatting and Removed Tags"
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

## Project Structure

```
├── public/              # Static assets (images)
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts (Theme)
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Features

- ✨ Modern, clean design
- 🌓 Dark/Light mode toggle
- 🎨 Smooth animations and hover effects
- ✨ Custom cursor glow effect
- 📱 Fully responsive
- ⚡ Built with Vite for fast development

## Pages

- **Home**: Introduction and overview
- **Work**: Professional experience
- **Startups & Projects**: Personal projects and ventures
- **Fun Facts & Photos**: Personal interests and photo gallery

