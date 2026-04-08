import { useEffect, useState } from 'react';
import { ExternalLink, Github, Eye, Shield, Brain, Users, Award, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all text-white hover:bg-black/40"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all text-white hover:bg-black/40"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject]: any = useState(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 16,
      title: "Bikemate",
      category: "Mobile Development",
      description: "Mobile application for cyclists — ride tracking, bike maintenance, and cycling community features",
      longDescription: "Bikemate is a mobile application designed for cyclists, offering ride tracking, bike maintenance reminders, route planning, and community features. Built for iOS and Android to help riders stay on top of their bikes and connect with other cyclists.",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Mobile Development", "Ride Tracking", "Bike Maintenance", "Cross-Platform"],
      achievements: [
        "Cross-platform mobile app (iOS & Android)",
        "Ride tracking and route features",
        "Bike maintenance reminders",
        "Cycling community integration"
      ],
      status: "In Progress",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/bikemate",
      demoMediaUrl: "https://drive.google.com/drive/folders/11GY6fGIDLdNohFm-pjfuJI9PcLQz3Gmm?usp=drive_link",
      images: ["/bikemate splash.png", "/bikemate.png", "/bikemate (1).png", "/bikemate (2).png", "/bikemate (3).png"]
    },
    {
      id: 17,
      title: "Cook Pilot",
      category: "Full-Stack Development",
      description: "Recipe and cooking companion app with meal planning and step-by-step guidance",
      longDescription: "A modern recipe and cooking companion built with TypeScript, helping users discover recipes, plan meals, and follow step-by-step cooking guidance. Deployed with a polished, responsive interface for home cooks.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "React", "Recipe App", "Meal Planning", "Vercel"],
      achievements: [
        "Recipe discovery and meal planning",
        "Step-by-step cooking guidance",
        "Modern responsive interface",
        "Deployed on Vercel"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/cook-pilot",
      images: ["/cook pilot splash.png", "/cook pilot.png", "/cook pilot 2.png", "/cook pilot 3.png", "/cook pilot 4.png"]
    },
    {
      id: 3,
      title: "Effective Data Hiding Scheme Using ML",
      category: "Cybersecurity & ML",
      description: "Advanced LSB-based image steganography system with encryption for secure data hiding",
      longDescription: "Designed and implemented a sophisticated image steganography system that uses Least Significant Bit (LSB) manipulation combined with machine learning techniques for enhanced security. The system ensures imperceptible data hiding while maintaining image quality through advanced encryption methods.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Python", "OpenCV", "Machine Learning", "Cryptography", "Image Processing", "LSB Steganography"],
      achievements: [
        "Achieved PSNR ~30dB for quality assurance",
        "SSIM ~1 for structural similarity",
        "Secure, imperceptible data hiding mechanism",
        "Advanced encryption implementation"
      ],
      status: "Completed",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/Major_Project",
      images: ["/data hiding1.png", "/data hiding2.png"]
    },
    {
      id: 5,
      title: "FlavourFlow",
      category: "Full-Stack Development",
      description: "Modern food ordering and management system built with TypeScript and advanced frontend technologies",
      longDescription: "A comprehensive food ordering platform built with TypeScript for robust type safety and modern React patterns. Features include real-time order tracking, menu management, analytics, and intuitive user interface.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "React", "Food Ordering", "Order Management", "Modern Frontend"],
      achievements: [
        "Real-time order tracking system",
        "Menu management and analytics",
        "Intuitive user interface",
        "Type-safe implementation"
      ],
      status: "Completed",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/vibe-order-dash",
      images: ["/flavourflow1.jpeg", "/flavourflow2.jpeg", "/flavourflow3.jpeg", "/flavourflow4.jpeg", "/flavourflow5.jpeg"]
    },
    {
      id: 6,
      title: "Aura Calendar",
      category: "UI/UX Design",
      description: "Beautiful and functional calendar application with modern design principles",
      longDescription: "A sophisticated calendar application featuring modern UI/UX design, built with TypeScript for type safety and maintainability. The application provides an elegant user experience with intuitive navigation and visual appeal.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "React", "Calendar UI", "UX Design", "Modern Design"],
      achievements: [
        "Modern and intuitive calendar interface",
        "Type-safe implementation",
        "Excellent user experience",
        "Beautiful design aesthetics"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/aura-calender",
      images: ["/aura calender.png", "/aura calender1.png"]
    },
    {
      id: 15,
      title: "Skin Gleam AI",
      category: "Healthcare AI & Dermatology",
      description: "AI-powered skincare analysis and recommendation system",
      longDescription: "An intelligent skincare analysis platform using AI and machine learning to provide personalized skincare recommendations and skin condition analysis using advanced computer vision techniques.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "AI", "Computer Vision", "Healthcare", "Machine Learning"],
      achievements: [
        "AI-powered skin analysis",
        "Personalized recommendations",
        "Advanced computer vision integration",
        "Healthcare-focused AI implementation"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/skin-gleam-ai",
      images: ["/derma lens1.jpeg", "/derma lens2.jpeg", "/derma lens3.jpeg"]
    },
    {
      id: 1,
      title: "Malpractice Detection in Exams",
      category: "Computer Vision & AI",
      description: "Advanced AI system analyzing exam hall footage and multi-modal data to detect cheating behaviors",
      longDescription: "Our system analyzes exam hall footage and multi-modal data using advanced algorithms to detect cheating by identifying unauthorized objects and multiple persons. It adapts to evolving cheating tactics in real time while ensuring transparency, privacy, and ethical standards.",
      icon: <Eye className="w-6 h-6" />,
      technologies: ["Computer Vision", "Multi-modal AI", "Real-time Processing", "Object Detection", "Python", "Privacy Tech"],
      achievements: [
        "Real-time cheating detection system",
        "Multi-modal data analysis capability",
        "Unauthorized object identification",
        "Privacy-preserving design with ethical standards"
      ],
      status: "Completed",
      year: "2024",
      color: "primary",
      images: ["/malpractice-detection1.png", "/malpractice-detection2.png", "/malpractice-detection3.png"]
    },
    {
      id: 2,
      title: "Brain Stroke Detection System",
      category: "Healthcare AI",
      description: "ML-based diagnosis system using SVM, Decision Tree, AdaBoost, and Passive-Aggressive algorithms",
      longDescription: "We proposed a machine learning-based diagnosis method for identifying brain stroke using four advanced algorithms: SVM, Decision Tree, AdaBooster, and Passive-Aggressive. Led a 5-member team to develop this comprehensive diagnostic system for early stroke detection.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "SVM", "Decision Trees", "AdaBoost", "Passive-Aggressive", "Medical AI"],
      achievements: [
        "Project Lead managing 5-member team",
        "4 ML algorithms implementation (SVM, DT, AdaBoost, Passive-Aggressive)",
        "Medical symptom-based stroke prediction",
        "High accuracy diagnostic system"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/brain-stroke-ml-project",
      images: ["/brain-stroke1.png", "/brain-stroke2.png", "/brain-stroke3.png", "/brain-stroke4.png"]
    },
    {
      id: 4,
      title: "Continuous Remote Alcohol Monitoring (CRAM)",
      category: "IoT & Monitoring",
      description: "Best Project Award winner - IoT-based system for continuous alcohol monitoring",
      longDescription: "Developed an innovative IoT-based system for continuous remote alcohol monitoring, combining hardware sensors with intelligent software algorithms. This project won the Best Project Award for its innovative approach to public safety and health monitoring.",
      icon: <Award className="w-6 h-6" />,
      technologies: ["IoT", "Sensors", "Real-time Monitoring", "Python", "Hardware Integration"],
      achievements: [
        "Best Project Award winner",
        "Continuous monitoring capability",
        "Real-time data transmission",
        "Innovative IoT implementation"
      ],
      status: "Award Winner",
      year: "2024",
      color: "accent",
      images: ["/cram-iot1.png", "/cram-iot2.png", "/cram-iot3.png"]
    },
    {
      id: 7,
      title: "Inventory Optimization System",
      category: "Data Science & AI",
      description: "Python-based system for optimizing inventory management using machine learning",
      longDescription: "An intelligent inventory optimization system leveraging Python and machine learning algorithms to optimize stock levels, reduce costs, and improve supply chain efficiency.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "Machine Learning", "Data Science", "Inventory Management", "Optimization"],
      achievements: [
        "Cost reduction through intelligent optimization",
        "Predictive inventory management",
        "Supply chain efficiency improvement",
        "ML-driven decision making"
      ],
      status: "Completed",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/inventory-optimization",
      images: ["/inventory-opt1.png", "/inventory-opt2.png", "/inventory-opt3.png", "/inventory-opt4.png"]
    },
    {
      id: 14,
      title: "Balloon Insight",
      category: "Data Analytics & Visualization",
      description: "Advanced data insight and visualization platform built with TypeScript",
      longDescription: "A sophisticated data insight platform that provides advanced analytics and visualization capabilities. Built with TypeScript for robust type safety and scalable architecture.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["TypeScript", "Data Analytics", "Visualization", "Advanced Analytics"],
      achievements: [
        "Advanced data visualization",
        "Type-safe analytics implementation",
        "Scalable architecture",
        "Interactive insights platform"
      ],
      status: "In Progress",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/balloon-insight",
      images: ["/balloon-insight1.png", "/balloon-insight2.png", "/balloon-insight3.png", "/balloon-insight4.png", "/balloon-insight5.png"]
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0A141F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI/ML, full-stack development, and creative design
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="relative project-card glass-card rounded-3xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {project.images && project.images.length > 0 ? (
                <div className="relative w-full h-52 overflow-hidden">
                  <ImageCarousel images={project.images} title={project.title} />
                </div>
              ) : (
                <div className="h-52 bg-gradient-to-br from-[#D4A373]/20 to-[#0D1B2A] flex items-center justify-center">
                  <div className="scale-[3] opacity-20">{project.icon}</div>
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                    project.status === "Award Winner"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-[#D4A373]/10 text-[#D4A373]"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{project.year}</span>
                </div>

                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#D4A373] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>

                <p className="text-xs uppercase tracking-widest mb-3 text-[#D4A373]">
                  {project.category}
                </p>

                <p className="text-[#94A3B8] text-sm mb-5 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs rounded-full bg-[#132336] px-2 py-1 text-[#94A3B8]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs rounded-full bg-[#132336] px-2 py-1 text-[#D4A373]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm text-[#D4A373] font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                >
                  ✕
                </button>

                <div className="flex flex-col h-full">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <div className="w-full h-80 bg-black">
                      <ImageCarousel images={selectedProject.images} title={selectedProject.title} />
                    </div>
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-[#D4A373]/20 to-black flex items-center justify-center">
                      <div className="scale-[3] opacity-20">{selectedProject.icon}</div>
                    </div>
                  )}

                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-[#D4A373]/10 text-[#D4A373]">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white mb-1">{selectedProject.title}</h3>
                        <p className="font-black uppercase tracking-[0.3em] text-[10px] text-[#D4A373]">
                          {selectedProject.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/70 text-lg leading-relaxed mb-8">{selectedProject.longDescription}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                          <Award size={16} className="text-[#D4A373]" /> Key Results
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex gap-3 text-white/50 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] mt-1.5 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                          <Brain size={16} className="text-[#D4A373]" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech: string, idx: number) => (
                            <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-bold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                      {selectedProject.demoMediaUrl && (
                        <a href={selectedProject.demoMediaUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] h-12 rounded-xl bg-[#D4A373] text-black font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all">
                          LIVE DEMO <ExternalLink size={14} />
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] h-12 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                          VIEW ON GITHUB <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "15+", label: "Projects", color: "text-[#D4A373]" },
            { value: "12+", label: "AI Integrations", color: "text-[#D4A373]" },
            { value: "5+", label: "Mobile Apps", color: "text-[#D4A373]" },
            { value: "1", label: "Award Winner", color: "text-[#D4A373]" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 text-center"
            >
              <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs uppercase font-bold tracking-widest text-[#94A3B8]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;