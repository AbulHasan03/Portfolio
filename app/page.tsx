'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Wordle Clone",
      category: "Web Development",
      description: "A full-stack word-guessing game inspired by Wordle. Features daily word challenges, color-coded feedback system, on-screen keyboard with letter tracking, and smooth tile animations. Built with Flask backend to prevent cheating and ensure synchronized daily words across all players.",
      tech: ["Python", "Flask", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/AbulHasan03/wordle-clone",
      live: "https://wordle-clone-qz9x.onrender.com/", // Update this when deployed
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      year: "2025"
    },

    {
      id: 2,
      title: "Coming Soon",
      category: "Future Project",
      description: "More exciting projects on the way. Stay tuned for updates as I continue building and learning.",
      tech: ["TBD"],
      gradient: "from-slate-600 via-slate-500 to-slate-400",
      year: "2025",
      placeholder: true
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Animated gradient orb that follows cursor */}
      <div 
        className="fixed w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(16,185,129,0.2) 50%, transparent 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="min-h-screen flex items-center justify-center px-6 md:px-12">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="inline-block">
                    <span className="text-emerald-400 font-light text-sm tracking-[0.3em] uppercase">
                      Developer & Designer
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                    <span className="block text-zinc-400">Hello, I'm</span>
                    <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-extralight" style={{ fontFamily: 'Georgia, serif' }}>
                      Abul Hasan
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
                    A passionate developer crafting thoughtful digital experiences through code and design.
                  </p>
                </div>

                <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <a href="https://github.com/AbulHasan03" target="_blank" rel="noopener noreferrer" 
                     className="group p-3 rounded-full border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                  <a href="https://linkedin.com/in/abul-k-hasan" target="_blank" rel="noopener noreferrer"
                     className="group p-3 rounded-full border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                  <a href="mailto:abul.k.hasan03@gmail.com"
                     className="group p-3 rounded-full border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-zinc-800/50 backdrop-blur-sm p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative h-full flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-emerald-500/20" strokeWidth={0.5} />
                  </div>
                  {/* Floating decorative elements */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-8 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
                <div className="w-1 h-2 bg-emerald-400 rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section className="min-h-screen px-6 md:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-emerald-400 font-light text-sm tracking-[0.3em] uppercase">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mt-4 text-zinc-100" style={{ fontFamily: 'Georgia, serif' }}>
                Selected Works
              </h2>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                  }}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className={`relative border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 ${
                    activeProject === project.id ? 'shadow-2xl shadow-emerald-500/10 border-emerald-500/30' : ''
                  } ${project.placeholder ? 'opacity-50' : ''}`}>
                    {/* Project gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 md:p-12">
                      <div className="grid md:grid-cols-12 gap-8 items-start">
                        {/* Left: Project info */}
                        <div className="md:col-span-7 space-y-6">
                          <div>
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-xs font-light tracking-[0.2em] uppercase text-zinc-500">
                                {project.category}
                              </span>
                              <span className="text-xs font-light text-zinc-600">
                                {project.year}
                              </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-lg font-light">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm font-light hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right: Links and visual */}
                        <div className="md:col-span-5 flex flex-col items-end gap-6">
                          {!project.placeholder && (
                            <div className="flex gap-3 w-full md:w-auto">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 md:flex-none px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-300 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                >
                                  <Github className="w-4 h-4" />
                                  <span className="text-sm font-light">Code</span>
                                </a>
                              )}
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 md:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn font-medium"
                                >
                                  <span className="text-sm">Live Demo</span>
                                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                              )}
                            </div>
                          )}

                          {/* Decorative element */}
                          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center mt-auto">
                            <div className={`text-6xl font-extralight text-transparent bg-clip-text bg-gradient-to-br ${project.gradient}`}>
                              {String(project.id).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Add project prompt */}
            <div className="mt-16 text-center">
              <p className="text-zinc-500 font-light">
                More projects coming soon...
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-zinc-500 font-light">
                © {new Date().getFullYear()} Abul Hasan
              </div>
              <div className="flex gap-6">
                <a href="mailto:abul.k.hasan03@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors font-light">
                  Get in touch
                </a>
                <a href="/portfolio/Abul Hasan - Resume.pdf" className="text-zinc-400 hover:text-emerald-400 transition-colors font-light">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}