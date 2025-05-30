
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

export type TemplateType = 'modern' | 'minimalist' | 'elegant' | 'creative';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const templates = [
  {
    id: 'modern' as TemplateType,
    name: 'Modern Professional',
    description: 'Clean design with colorful accents',
    preview: 'Blue & emerald gradient header'
  },
  {
    id: 'minimalist' as TemplateType,
    name: 'Minimalist',
    description: 'Simple and clean layout',
    preview: 'Black & white professional'
  },
  {
    id: 'elegant' as TemplateType,
    name: 'Elegant Classic',
    description: 'Sophisticated and timeless',
    preview: 'Purple accent professional'
  },
  {
    id: 'creative' as TemplateType,
    name: 'Creative Bold',
    description: 'Stand out with vibrant design',
    preview: 'Orange & teal creative layout'
  }
];

const TemplateSelector = ({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 mb-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">Choose Template</h3>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer border-2 rounded-lg p-4 transition-all duration-200 ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-slate-800">{template.name}</h4>
              {selectedTemplate === template.id && (
                <Check className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <p className="text-sm text-slate-600 mb-2">{template.description}</p>
            <div className="h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">{template.preview}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default TemplateSelector;
