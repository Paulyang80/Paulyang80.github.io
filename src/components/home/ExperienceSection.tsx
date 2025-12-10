import { RESUME_DATA } from "@/data/resume";
import { Download } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="h-px bg-white/10 flex-grow hidden sm:block"></div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1igF_AdzoFwarnZpm26BtXmFkgNDTdAp-?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Download size={16} />
          <span>Resume</span>
        </a>
      </div>

      <div className="space-y-12">
        {RESUME_DATA.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
            
            <div className="md:grid md:grid-cols-[150px_1fr] md:gap-12">
              <div className="mb-4 md:mb-0">
                <div className="text-sm font-medium text-gray-400 font-mono sticky top-24">
                  {job.period}
                </div>
              </div>

              <div className="relative group">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute -left-[54px] top-1.5 w-3 h-3 rounded-full bg-gray-700 border-2 border-background group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>

                <div className="glass-panel rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-secondary font-medium mb-4">
                    {job.company}
                  </div>
                  {job.location && (
                    <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
                      {job.location}
                    </div>
                  )}
                  
                  {job.description.length > 0 && (
                    <ul className="space-y-2">
                       {job.description.map((desc, i) => (
                        <li key={i} className="text-gray-300/90 leading-relaxed text-sm flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                       ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
