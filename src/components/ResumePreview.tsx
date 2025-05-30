
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TemplateType } from '@/components/TemplateSelector';

interface ResumePreviewProps {
  resumeData: any;
  template: TemplateType;
}

const ResumePreview = ({ resumeData, template }: ResumePreviewProps) => {
  const getTemplateStyles = (templateType: TemplateType) => {
    switch (templateType) {
      case 'modern':
        return {
          headerBg: 'bg-gradient-to-r from-blue-600 to-emerald-600',
          headerText: 'text-white',
          sectionBorder: 'border-blue-500',
          skillsBg: 'bg-gradient-to-r from-blue-500 to-emerald-500'
        };
      case 'minimalist':
        return {
          headerBg: 'bg-slate-800',
          headerText: 'text-white',
          sectionBorder: 'border-slate-600',
          skillsBg: 'bg-slate-600'
        };
      case 'elegant':
        return {
          headerBg: 'bg-gradient-to-r from-purple-700 to-indigo-700',
          headerText: 'text-white',
          sectionBorder: 'border-purple-500',
          skillsBg: 'bg-gradient-to-r from-purple-500 to-indigo-500'
        };
      case 'creative':
        return {
          headerBg: 'bg-gradient-to-r from-orange-500 to-teal-500',
          headerText: 'text-white',
          sectionBorder: 'border-orange-500',
          skillsBg: 'bg-gradient-to-r from-orange-500 to-teal-500'
        };
      default:
        return {
          headerBg: 'bg-gradient-to-r from-blue-600 to-emerald-600',
          headerText: 'text-white',
          sectionBorder: 'border-blue-500',
          skillsBg: 'bg-gradient-to-r from-blue-500 to-emerald-500'
        };
    }
  };

  const styles = getTemplateStyles(template);

  return (
    <motion.div
      key={template}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-2xl border-0 bg-white overflow-hidden">
        <div className={`${styles.headerBg} ${styles.headerText} p-6`}>
          <h1 className="text-3xl font-bold mb-2">
            {resumeData.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="space-y-1 opacity-90">
            {resumeData.personalInfo.email && (
              <p>{resumeData.personalInfo.email}</p>
            )}
            {resumeData.personalInfo.phone && (
              <p>{resumeData.personalInfo.phone}</p>
            )}
            {resumeData.personalInfo.location && (
              <p>{resumeData.personalInfo.location}</p>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {resumeData.personalInfo.summary && (
            <div>
              <h2 className={`text-xl font-bold text-slate-800 mb-3 border-b-2 ${styles.sectionBorder} pb-1`}>
                Professional Summary
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {resumeData.personalInfo.summary}
              </p>
            </div>
          )}

          {resumeData.experience.length > 0 && (
            <div>
              <h2 className={`text-xl font-bold text-slate-800 mb-3 border-b-2 ${styles.sectionBorder} pb-1`}>
                Work Experience
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp: any, index: number) => (
                  <div key={index} className="pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {exp.position || 'Position Title'}
                        </h3>
                        <p className={`font-medium ${template === 'minimalist' ? 'text-slate-700' : template === 'elegant' ? 'text-purple-600' : template === 'creative' ? 'text-orange-600' : 'text-blue-600'}`}>
                          {exp.company || 'Company Name'}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {exp.duration || 'Duration'}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {resumeData.education.length > 0 && (
            <div>
              <h2 className={`text-xl font-bold text-slate-800 mb-3 border-b-2 ${styles.sectionBorder} pb-1`}>
                Education
              </h2>
              <div className="space-y-3">
                {resumeData.education.map((edu: any, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {edu.degree || 'Degree'}
                      </h3>
                      <p className={`font-medium ${template === 'minimalist' ? 'text-slate-700' : template === 'elegant' ? 'text-purple-600' : template === 'creative' ? 'text-orange-600' : 'text-blue-600'}`}>
                        {edu.school || 'School Name'}
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {edu.year || 'Year'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resumeData.skills.length > 0 && (
            <div>
              <h2 className={`text-xl font-bold text-slate-800 mb-3 border-b-2 ${styles.sectionBorder} pb-1`}>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className={`${styles.skillsBg} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {!resumeData.personalInfo.fullName && 
           resumeData.experience.length === 0 && 
           resumeData.education.length === 0 && 
           resumeData.skills.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Start filling out the form to see your resume preview</p>
              <p className="text-sm">What you see here is exactly what you'll get in your PDF</p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ResumePreview;
