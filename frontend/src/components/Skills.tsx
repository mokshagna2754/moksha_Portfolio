import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Code, Database, Cloud, Cpu, Palette, Smartphone } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("programming");

  const categories = [
    {
      id: "programming",
      label: "Programming",
      icon: Code,
      description: "Clean, scalable full-stack applications with modern JavaScript and Python tooling.",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "Next.js", level: 78 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      id: "aiml",
      label: "AI/ML",
      icon: Cpu,
      description: "Build intelligent systems with ML, NLP, and generative AI workflows.",
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "NLP", level: 78 },
        { name: "Gen AI", level: 85 },
        { name: "LangChain", level: 75 },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      icon: Cloud,
      description: "Deploy scalable applications with modern cloud infrastructure and automation.",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 78 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Vertex AI", level: 78 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      id: "database",
      label: "Data & Analytics",
      icon: Database,
      description: "Design data pipelines, analytics, and database models for fast insights.",
      skills: [
        { name: "SQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "BigQuery", level: 75 },
        { name: "Data Analytics", level: 82 },
      ],
    },
    {
      id: "design",
      label: "UI/UX",
      icon: Palette,
      description: "Create intuitive product experiences with polished interface design.",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Wireframing", level: 88 },
        { name: "Prototyping", level: 82 },
        { name: "Design Systems", level: 80 },
      ],
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: Smartphone,
      description: "Build engaging cross-platform mobile experiences with React Native and Flutter.",
      skills: [
        { name: "React", level: 85 },
        { name: "React Native", level: 78 },
        { name: "Flutter", level: 75 },
      ],
    },
  ];

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory) || categories[0];

  const marqueeSkills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Google Cloud",
    "React",
    "Next.js",
    "Flutter",
    "Figma",
    "Machine Learning",
    "Computer Vision",
    "Docker",
    "Kubernetes",
    "SQL",
    "PostgreSQL",
    "JavaScript",
    "Gen AI",
    "Vertex AI",
    "MongoDB",
    "TypeScript",
    "FastAPI",
    "LangChain",
    "GraphQL",
  ];

  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0A141F]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Skills & <span className="text-gold-gradient">Expertise</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 skill-marquee"
        >
          <Marquee gradient={false} speed={40} pauseOnHover>
            {marqueeSkills.map((skill, index) => (
              <motion.span
                key={`${skill}-${index}`}
                whileHover={{ scale: 1.1, color: '#D4A373' }}
                className="mx-8 text-2xl md:text-3xl font-light text-[#94A3B8]/50 cursor-default transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {skill}
              </motion.span>
            ))}
          </Marquee>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`skill-filter-${cat.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#D4A373] text-[#0D1B2A]"
                  : "bg-[#132336] text-[#94A3B8] hover:bg-[#D4A373]/10 hover:text-[#D4A373]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div
            className="glass-card rounded-[2rem] p-8 xl:p-10"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D4A373]/15 text-[#D4A373]">
                <activeCategoryData.icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#D4A373] font-semibold mb-2">
                  {activeCategoryData.label}
                </p>
                <h3 className="text-3xl lg:text-4xl font-semibold text-[#F8FAFC]">
                  Focused capability
                </h3>
              </div>
            </div>

            <p className="text-[#94A3B8] leading-relaxed mb-8">
              {activeCategoryData.description}
            </p>

            <div className="space-y-4">
              {activeCategoryData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
                  className="rounded-3xl border border-white/5 bg-[#0D1B2A]/70 p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base text-[#F8FAFC] font-medium">{skill.name}</span>
                    <span className="text-sm text-[#D4A373]">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#132336] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #D4A373 0%, #E8C299 100%)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="grid gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-card rounded-3xl p-5 text-left transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "border border-[#D4A373] bg-[#D4A373]/10 shadow-[0_0_40px_rgba(212,163,115,0.12)]"
                    : "bg-[#132336]/90 hover:bg-[#D4A373]/10"
                }`}
                whileHover={{ y: activeCategory === cat.id ? 0 : -2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="h-5 w-5 text-[#D4A373]" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold">
                      {cat.label}
                    </p>
                    <p className="text-sm text-[#94A3B8] mt-1">
                      {cat.skills.slice(0, 3).map((skill) => skill.name).join(" • ")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#BCC7D0] leading-relaxed">
                  {cat.description}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {activeCategoryData.skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-3xl p-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-base font-medium text-[#F8FAFC]">{skill.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] mt-1">Level</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#D4A373]/10 text-[#D4A373] font-semibold">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ perspective: "1000px" }}
        >
          {[
            { value: "40+", label: "Technical Skills" },
            { value: "6+", label: "Programming Languages" },
            { value: "25+", label: "Frameworks & Tools" },
            { value: "4+", label: "Cloud Platforms" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center glass-card rounded-2xl p-6"
              whileHover={{ 
                rotateY: 10, 
                rotateX: -5, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(212, 163, 115, 0.25)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-3xl font-light text-gold-gradient mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-xs text-[#94A3B8]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
