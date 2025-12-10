import { PROJECTS_DATA } from "@/data/projects";
import { Github, ExternalLink, Folder } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-gradient">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col hover:bg-white/5 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <Folder size={24} />
              </div>
              <div className="flex gap-3 text-gray-400">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h2 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
