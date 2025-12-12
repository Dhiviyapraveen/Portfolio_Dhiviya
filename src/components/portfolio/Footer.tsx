import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Dhiviyapraveen", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhiviyachandrasekaran/", label: "LinkedIn" },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">

          {/* Social Icons - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Copyright - Centered Below */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm text-center"
          >
            © {new Date().getFullYear()} Dhiviya — All rights reserved.
          </motion.p>

        </div>
      </div>
    </footer>
  );
};
