import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  
  {
    title: "DevOps Intern",
    company: "RAMPeX Technologies",
    period: "2025",
    description:
      "Gained hands-on experience in CI/CD, containerization, and cloud deployment pipelines. Worked with Docker, Kubernetes, and version control automation.",
    technologies: ["CI/CD", "Docker", "Kubernetes", "Git", "GitHub Actions"],
  },

  {
    title: "AI & Data Projects Developer",
    company: "Personal / Academic Work",
    period: "2025 – Present",
    description:
      "Built AI/ML systems including TrashSense AI, InfluX analytics, and PolicyLens. Worked with NLP, ML pipelines, and analytics dashboards using Python and modern frameworks.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "RAMPeX Technologies",
    period: "2024",
    description:
      "Worked on full-stack development using the MERN stack. Built UI components, implemented REST APIs, and assisted in backend features and database workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A look into my professional journey and the contributions I’ve made.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 shadow-glow z-10" />

              <div className="flex-1 ml-16 md:ml-0" />

              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
