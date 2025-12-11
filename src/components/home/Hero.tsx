import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { CityBackground } from "@/components/home/CityBackground";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <CityBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 pointer-events-auto">
          Hi, I&apos;m <span className="text-gradient">Po-Wei Yang</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed pointer-events-auto">
          Full Stack Developer & Research Assistant
          <br />
          Specializing in <span className="text-primary">LLM</span>, <span className="text-secondary">Diffusion Model</span>, and <span className="text-accent">AI Applications</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <Link
            href="/experience"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Experience & Resume <ArrowRight size={18} />
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Paulyang80"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:paulyang80@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
