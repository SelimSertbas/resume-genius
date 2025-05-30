
import { motion } from 'framer-motion';
import { FileText, Edit3, Download, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GetStartedProps {
  onStartBuilding: () => void;
}

const GetStarted = ({ onStartBuilding }: GetStartedProps) => {
  const steps = [
    {
      icon: FileText,
      title: "Choose Your Template",
      description: "Select from our collection of professional, ATS-friendly templates designed by experts.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Edit3,
      title: "Fill in Your Details",
      description: "Use our intuitive form to add your experience, skills, and education with real-time preview.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Download,
      title: "Download & Apply",
      description: "Get your pixel-perfect PDF resume instantly and start applying to your dream jobs.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    "ATS-friendly templates that pass applicant tracking systems",
    "Real-time preview shows exactly what recruiters will see",
    "Professional designs created by career experts",
    "Instant PDF download with perfect formatting",
    "No sign-up required - start building immediately",
    "Mobile-friendly interface works on any device"
  ];

  return (
    <section id="get-started" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Create your professional resume in minutes, not hours. Our streamlined process ensures you get results fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full text-sm font-bold mb-4">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Why Choose Resume Genius?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-slate-600 mb-8">
              Join thousands of professionals who've successfully created their resumes with Resume Genius.
            </p>
            
            <Button
              onClick={onStartBuilding}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <FileText className="mr-2 h-5 w-5" />
              Start Building Your Resume
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <p className="text-sm text-slate-500 mt-4">
              No account required • Free to use • Instant download
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
