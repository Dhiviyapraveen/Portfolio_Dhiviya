import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      description:
        "Building scalable web applications using React, Node.js, Express, MongoDB, and TypeScript.",
    },
    {
      icon: Palette,
      title: "AI & Data Intelligence",
      description:
        "Creating NLP tools, ML models, and analytics systems using Python, Transformers, and Scikit-learn.",
    },
    {
      icon: Rocket,
      title: "Cloud & DevOps",
      description:
        "Working with AWS, Docker, Kubernetes, CI/CD pipelines, microservices, and system automation.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey as a developer and the passion that drives everything I build.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Card with full image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-card border border-border relative">
              {/* Image filling the card */}
              <img
                src="/imagee.jpg" // replace with your public folder image
                alt="My Photo"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient and text */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
                <p className="text-lg font-medium text-white">
                  Full-Stack Developer & AI Enthusiast
                </p>
                <p className="text-muted-foreground">Coimbatore, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate about building impactful digital and AI-driven solutions
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I’m a full-stack developer with strong experience in cloud, DevOps, and AI/ML. 
              My work spans across scalable web apps, automation pipelines, intelligent systems, 
              and modern UI/UX-driven experiences.
              Outside of development, I explore emerging technologies, participate in hackathons, 
              work on open-source, and share knowledge with the tech community. 
              Continuous learning and innovation are what keep me moving forward.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
