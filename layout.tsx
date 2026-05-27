@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  /* Updated to Redis Orange (#FF5722) with pure dark background (#000000) */
  --background: #000000;
  --foreground: #ffffff;
  --card: #0a0a0a;
  --card-foreground: #ffffff;
  --popover: #0a0a0a;
  --popover-foreground: #ffffff;
  --primary: #ff5722;
  --primary-foreground: #000000;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #404040;
  --muted-foreground: #a0a0a0;
  --accent: #ff5722;
  --accent-foreground: #ff5722;
  --destructive: #ff3333;
  --destructive-foreground: #ffffff;
  --border: #1a1a1a;
  --input: #0a0a0a;
  --ring: #ff5722;
  --chart-1: #ff5722;
  --chart-2: #ff7043;
  --chart-3: #ff8a65;
  --chart-4: #ff9800;
  --chart-5: #ffb74d;
  --radius: 0.75rem;
  --sidebar: #0a0a0a;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #ff5722;
  --sidebar-primary-foreground: #000000;
  --sidebar-accent: #1a1a1a;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #1a1a1a;
  --sidebar-ring: #ff5722;
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  --card: #0a0a0a;
  --card-foreground: #ffffff;
  --popover: #0a0a0a;
  --popover-foreground: #ffffff;
  --primary: #ff5722;
  --primary-foreground: #000000;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #404040;
  --muted-foreground: #a0a0a0;
  --accent: #ff5722;
  --accent-foreground: #ff5722;
  --destructive: #ff3333;
  --destructive-foreground: #ffffff;
  --border: #1a1a1a;
  --input: #0a0a0a;
  --ring: #ff5722;
  --chart-1: #ff5722;
  --chart-2: #ff7043;
  --chart-3: #ff8a65;
  --chart-4: #ff9800;
  --chart-5: #ffb74d;
  --sidebar: #0a0a0a;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #ff5722;
  --sidebar-primary-foreground: #000000;
  --sidebar-accent: #1a1a1a;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #1a1a1a;
  --sidebar-ring: #ff5722;
}

@theme inline {
  --font-sans: "Geist", "Geist Fallback";
  --font-mono: "Geist Mono", "Geist Mono Fallback";
  --font-display: "Space Grotesk", "Geist", sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: calc(var(--radius) - 1px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 2px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-display;
  }
}

@layer utilities {
  .font-display {
    font-family: "Space Grotesk", "Geist", system-ui, sans-serif;
    font-weight: 700;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes glow {
    0%,
    100% {
      box-shadow: 0 0 20px rgba(255, 87, 34, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 87, 34, 0.7);
    }
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .animate-shimmer {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }

  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  @keyframes border-glow {
    0%, 100% {
      border-color: rgba(255, 87, 34, 0.2);
    }
    50% {
      border-color: rgba(255, 87, 34, 0.5);
    }
  }

  .animate-border-glow {
    animation: border-glow 2s ease-in-out infinite;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--accent) 0%, #ff8a65 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-stroke-accent {
    color: transparent;
    -webkit-text-stroke: 1px #ff5722;
  }

  .glass {
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .glow-border {
    position: relative;
  }

  .glow-border::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 87, 34, 0.3) 25%,
      rgba(255, 87, 34, 0.5) 50%,
      rgba(255, 87, 34, 0.3) 75%,
      transparent 100%
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glow-border:hover::before {
    opacity: 1;
  }
}

@layer components {
  .btn-primary-custom {
    @apply bg-gradient-to-br from-accent to-[#D4580E] text-white py-4 px-9 text-[11px] tracking-[2px] font-bold uppercase no-underline transition-all duration-300;
    box-shadow: 0 0 30px rgba(255, 87, 34, 0.35);
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 14px));
  }
  
  .btn-primary-custom:hover {
    @apply shadow-[0_0_50px_rgba(255,87,34,0.55)] -translate-y-0.5;
  }

  .btn-secondary-custom {
    @apply border border-white/20 text-white py-4 px-9 text-[11px] tracking-[2px] font-bold uppercase no-underline transition-all duration-300;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 14px));
  }

  .btn-secondary-custom:hover {
    @apply border-accent text-accent;
    box-shadow: 0 0 20px rgba(255, 87, 34, 0.15);
  }

  .glow-accent {
    box-shadow: 0 0 30px rgba(255, 87, 34, 0.35);
  }

  .clip-path-fancy {
    clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 2px;
}

/* Noise overlay */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  z-index: 9999;
}
