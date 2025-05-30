
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Templates = () => {
  const templates = [
    {
      name: "Modern Professional",
      preview: "Perfect for tech and business roles with clean, contemporary design",
      color: "from-blue-500 to-blue-600",
      tags: ["ATS-Friendly", "Tech", "Business"],
      popularity: "Most Popular"
    },
    {
      name: "Creative Bold",
      preview: "Stand out with vibrant colors and creative layouts for design roles",
      color: "from-emerald-500 to-emerald-600",
      tags: ["Creative", "Design", "Marketing"],
      popularity: null
    },
    {
      name: "Classic Elegant",
      preview: "Timeless design that works for traditional industries and executive roles",
      color: "from-purple-500 to-purple-600",
      tags: ["Executive", "Traditional", "Finance"],
      popularity: null
    },
    {
      name: "Minimalist Clean",
      preview: "Simple, focused design that lets your content shine through",
      color: "from-slate-500 to-slate-600",
      tags: ["Minimalist", "Academic", "Simple"],
      popularity: "New"
    }
  ];

  return (
    <section id="templates" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Professional Templates
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our collection of expertly designed, ATS-optimized templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer relative"
            >
              <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden relative">
                {/* Popularity badge */}
                {template.popularity && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                    template.popularity === 'Most Popular' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-emerald-500 text-white'
                  }`}>
                    {template.popularity}
                  </div>
                )}

                {/* Template preview mockup */}
                <div className={`relative h-64 bg-gradient-to-br ${template.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  
                  {/* Mock resume content */}
                  <div className="relative z-10 text-white text-center p-6 w-full">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto"
                      whileHover={{ rotate: 5 }}
                    ></motion.div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/30 rounded w-24 mx-auto"></div>
                      <div className="h-2 bg-white/30 rounded w-20 mx-auto"></div>
                      <div className="h-2 bg-white/30 rounded w-22 mx-auto"></div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="h-1.5 bg-white/20 rounded w-full"></div>
                      <div className="h-1.5 bg-white/20 rounded w-5/6"></div>
                      <div className="h-1.5 bg-white/20 rounded w-4/6"></div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-3">
                      <motion.button
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Template info */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {template.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {template.preview}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Choose Your Template?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            All templates are professionally designed, ATS-optimized, and ready to help you land your dream job.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Browse All Templates
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;
