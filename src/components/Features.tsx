
import { motion } from 'framer-motion';
import { Check, Download, FileText, User, Zap, Shield, Smartphone, Eye } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Eye,
      title: "Real-Time Preview",
      description: "See your changes instantly as you type. What you see is exactly what you get - no formatting surprises.",
      color: "from-blue-500 to-blue-600",
      delay: 0
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create professional resumes in under 5 minutes. Our streamlined process eliminates unnecessary steps.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "ATS-Optimized",
      description: "All templates pass Applicant Tracking Systems, ensuring your resume reaches human recruiters.",
      color: "from-purple-500 to-purple-600",
      delay: 0.2
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Build and edit your resume on any device. Responsive design ensures perfect functionality everywhere.",
      color: "from-pink-500 to-pink-600",
      delay: 0.3
    }
  ];

  const additionalFeatures = [
    "Professional templates designed by career experts",
    "Instant PDF download with pixel-perfect formatting",
    "No account required - start building immediately",
    "Auto-save functionality protects your work",
    "Multiple export formats available",
    "SEO-optimized for online applications",
    "Privacy-focused - your data stays secure",
    "Regular template updates and new features"
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Resume Genius?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We've eliminated the frustration of traditional resume builders with our innovative, user-first approach
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-800 mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              Everything You Need to Succeed
            </h3>
            <div className="grid gap-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors duration-200">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-200">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Feature showcase mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full -translate-y-16 translate-x-16" />
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800">Live Resume Preview</h4>
                </div>
                
                {/* Mock resume sections */}
                <div className="space-y-4">
                  <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-slate-100 rounded w-1/2 animate-pulse"></div>
                  
                  <div className="mt-6">
                    <div className="h-3 bg-blue-200 rounded w-1/3 mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded"></div>
                      <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="h-3 bg-emerald-200 rounded w-1/4 mb-2"></div>
                    <div className="flex space-x-2">
                      <div className="h-6 bg-emerald-100 rounded-full px-3 flex items-center">
                        <span className="text-xs text-emerald-700">JavaScript</span>
                      </div>
                      <div className="h-6 bg-blue-100 rounded-full px-3 flex items-center">
                        <span className="text-xs text-blue-700">React</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
