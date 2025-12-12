import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Runner-Up – Coding Carnival 2025",
    organization: "Sri Eshwar College of Engineering",
    description: "Secured 1st Runner-Up among 3200+ participants on Engineers’ Day.",
  },
  {
    icon: Medal,
    title: "Finalist – ACDC, PALS Hackathon 2025",
    organization: "PALS",
    description: "Top finalist with Rs.15,000 prize money in hackathon.",
  },
  {
    icon: Award,
    title: "3rd Prize – Freshathon 2024",
    organization: "Sri Eshwar College of Engineering",
    description: "Awarded 3rd place for delivering an innovative first-year project.",
  },
  {
    icon: Medal,
    title: "Finalist – Self-E Hackathon 2023",
    organization: "Sri Eshwar College of Engineering",
    description: "Achieved 9th position in a college-level innovation hackathon.",
  },
  

];

const stats = [
  { value: "8+", label: "Major Projects" },
  { value: "4", label: "Hackathon Achievements" },
  { value: "280+", label: "Coding Problems Solved" },
  { value: "1st", label: "Runner-Up 2025" },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my milestones, recognitions, and competitive accomplishments.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-card border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card group"
            >
              <div className="shrink-0 p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <achievement.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                <p className="text-sm text-primary mb-2">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
