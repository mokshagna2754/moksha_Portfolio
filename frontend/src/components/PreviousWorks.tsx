import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PreviousWorks = () => {
  const works = [
    {
      id: 1,
      title: "Savira Aerospace",
      description: "Cutting-edge aerospace solutions and innovation in the aviation industry",
      url: "https://www.saviraaerospace.com/",
      category: "Aerospace",
      industry: "Technology & Manufacturing",
      icon: "🚀",
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400"
    },
    {
      id: 2,
      title: "Eshvaa",
      description: "Premium products and services delivering excellence in every aspect",
      url: "https://www.eshvaa.com/",
      category: "Premium Services",
      industry: "E-commerce & Lifestyle",
      icon: "✨",
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400"
    },
    {
      id: 3,
      title: "Arts & Creations",
      description: "Celebrating creativity and artistic excellence through diverse mediums",
      url: "https://artsandcreations.in/",
      category: "Creative Studio",
      industry: "Arts & Entertainment",
      icon: "🎨",
      color: "from-pink-500/20 to-pink-600/5",
      borderColor: "border-pink-500/30",
      accentColor: "text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="previous-works" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0A141F]">
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
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Previous <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Proud to have contributed to the success of leading organizations across diverse industries
          </p>
        </motion.div>

        {/* Works Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {works.map((work) => (
            <motion.a
              key={work.id}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.02
              }}
              className={`group relative glass-card rounded-3xl overflow-hidden border ${work.borderColor} p-8 backdrop-blur-md transition-all duration-300 cursor-pointer`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${work.color}`} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon Badge */}
                <motion.div
                  className="text-5xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {work.icon}
                </motion.div>

                {/* Category Badge */}
                <span className={`w-fit text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A373]/20 to-[#E8C299]/10 border border-[#D4A373]/30 text-[#D4A373] font-semibold mb-4`}>
                  {work.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#D4A373] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {work.title}
                </h3>

                {/* Industry */}
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] mb-4 font-medium">
                  {work.industry}
                </p>

                {/* Description */}
                <p className="text-[#BCC7D0] text-sm leading-relaxed mb-6 flex-grow">
                  {work.description}
                </p>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-2 text-[#D4A373] font-semibold text-sm mt-auto group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Hover Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  borderColor: ['rgba(212, 163, 115, 0)', 'rgba(212, 163, 115, 0.5)', 'rgba(212, 163, 115, 0)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />

              {/* Arrow icon overlay */}
              <motion.div
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 45 }}
              >
                <ArrowRight className="w-5 h-5 text-[#D4A373]" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass-card rounded-2xl border border-[#D4A373]/20 p-8">
            <p className="text-[#94A3B8] mb-2">
              Looking to showcase your project?
            </p>
            <p className="text-[#F8FAFC] font-semibold">
              I'm always open to new opportunities and collaborations. <span className="text-[#D4A373]">Let's create something amazing together!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousWorks;