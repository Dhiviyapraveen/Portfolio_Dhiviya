import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Hostel Care",
    description:
      "A service management platform for hostel students to request and track internal services like maintenance, cleaning, and room support. Includes real-time status updates and smooth coordination with staff.",
    technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT Auth"],
    github: "https://github.com/Dhiviyapraveen/Hostel_Maintenance.git",
    live: "#",
    featured: true,
  },
  {
    title: "Crowdfunding Platform for Short Films",
    description:
      "Web-based platform allowing short-film creators to present concepts and receive community support. Interactive project showcase with media previews and progress tracking.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    github: "https://github.com/Dhiviyapraveen/CrowdFunding.git",
    live: "#",
    featured: true,
  },
  {
    title: "EduQuest AI",
    description:
      "Interactive AI learning assistant that explains concepts, generates quizzes, and evaluates student understanding in real-time. Lightweight Streamlit UI for smooth interaction.",
    technologies: ["Python", "Streamlit", "NLP", "OpenAI API", "Pandas"],
    github: "https://github.com/Dhiviyapraveen/EduQuest-AI.git",
    live: "#",
    featured: true,
  },
  {
    title: "InfluX",
    description:
      "Data science workflow analyzing influencer performance via data cleaning, EDA, and visualization. Dashboards created in Power BI and Tableau for insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau"],
    github: "https://github.com/Dhiviyapraveen/influX-Insights.git",
    live: "#",
    featured: true,
  },
  {
    title: "PolicyLens",
    description:
      "Tool that summarizes government policies using NLP, improving clarity for students and researchers. Processes lengthy texts into concise insights with clean UI.",
    technologies: ["Python", "Streamlit", "NLP Models", "Transformers", "Git"],
    github: "https://github.com/Dhiviyapraveen/policyLens.git",
    live: "#",
    featured: true,
  },
  {
    title: "TrashSense AI",
    description:
      "Supervised ML model that classifies waste types using image processing techniques, enhancing waste segregation efficiency with accurate automated predictions.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "OpenCV"],
    github: "https://github.com/Dhiviyapraveen/GarbageClassifier.git",
    live: "#",
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best MERN and AI/ML projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={32} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
