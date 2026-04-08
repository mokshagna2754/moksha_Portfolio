import { motion } from 'framer-motion';
import { Code2, Zap, Brain, Cog } from 'lucide-react';

const FreelancingServices = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Build modern, responsive websites tailored to your business needs. From corporate sites to e-commerce platforms.",
      offerings: [
        "Business websites",
        "Portfolio sites",
        "E-commerce platforms",
        "Progressive Web Apps"
      ],
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400"
    },
    {
      id: 2,
      title: "Automation & Workflows",
      description: "Streamline your business processes with intelligent automation using n8n, Zapier, and custom integrations.",
      offerings: [
        "n8n workflows",
        "API integrations",
        "Process automation",
        "Bot development"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500/20 to-yellow-600/5",
      borderColor: "border-yellow-500/30",
      accentColor: "text-yellow-400"
    },
    {
      id: 3,
      title: "AI & Data Solutions",
      description: "Harness the power of machine learning and artificial intelligence for data-driven insights and predictions.",
      offerings: [
        "ML model development",
        "Data analysis",
        "AI pipelines",
        "Computer vision"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400"
    },
    {
      id: 4,
      title: "Custom Software Development",
      description: "Develop enterprise-grade applications built with cutting-edge technologies and best practices.",
      offerings: [
        "Full-stack applications",
        "Desktop software",
        "Mobile applications",
        "Backend systems"
      ],
      icon: <Cog className="w-8 h-8" />,
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      accentColor: "text-emerald-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0A141F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Freelancing <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Comprehensive solutions across web development, automation, AI, and custom software engineering tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative glass-card rounded-3xl overflow-hidden border ${service.borderColor} p-8 backdrop-blur-md transition-all duration-300`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} border ${service.borderColor} flex items-center justify-center mb-6 ${service.accentColor}`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-3 group-hover:text-[#D4A373] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Offerings */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold mb-3">
                    Offerings
                  </p>
                  <ul className="space-y-2">
                    {service.offerings.map((offering, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-sm text-[#BCC7D0]"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E8C299]`} />
                        {offering}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Call to action */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4A373] hover:text-[#E8C299] transition-colors"
                >
                  Learn more
                  <span className="text-lg">→</span>
                </motion.button>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A373] to-[#E8C299] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#94A3B8] mb-6 text-lg">
            Have a project in mind?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E8C299] text-[#0A141F] font-bold text-lg hover:shadow-lg hover:shadow-[#D4A373]/50 transition-all"
          >
            Get in Touch
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancingServices;