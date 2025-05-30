import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pdf } from '@react-pdf/renderer';
import { toast } from 'sonner';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import TemplateSelector, { TemplateType } from '@/components/TemplateSelector';
import PDFTemplate from '@/components/PDFTemplate';

interface ResumeBuilderProps {
  onBack: () => void;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
}

const ResumeBuilder = ({ onBack }: ResumeBuilderProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const handleDataUpdate = (newData: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  };

  const handleDownload = async () => {
    try {
      toast.loading('Generating PDF...', { id: 'pdf-download' });
      
      const doc = <PDFTemplate resumeData={resumeData} template={selectedTemplate} />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.personalInfo.fullName || 'Resume'}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('Resume downloaded successfully!', { id: 'pdf-download' });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error('Failed to generate PDF. Please try again.', { id: 'pdf-download' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            whileHover={{ x: -2 }}
          >
            ← Back to Home
          </motion.button>
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-slate-800">Resume Builder</span>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            <ResumeForm resumeData={resumeData} onDataUpdate={handleDataUpdate} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-8"
          >
            <ResumePreview 
              resumeData={resumeData} 
              template={selectedTemplate}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
