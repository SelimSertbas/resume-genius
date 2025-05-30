
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, User, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResumeFormProps {
  resumeData: any;
  onDataUpdate: (data: any) => void;
}

const ResumeForm = ({ resumeData, onDataUpdate }: ResumeFormProps) => {
  const updatePersonalInfo = (field: string, value: string) => {
    onDataUpdate({
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  const addExperience = () => {
    onDataUpdate({
      experience: [
        ...resumeData.experience,
        { company: '', position: '', duration: '', description: '' }
      ]
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    onDataUpdate({ experience: newExperience });
  };

  const addEducation = () => {
    onDataUpdate({
      education: [
        ...resumeData.education,
        { school: '', degree: '', year: '' }
      ]
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onDataUpdate({ education: newEducation });
  };

  const updateSkills = (value: string) => {
    const skills = value.split(',').map(skill => skill.trim()).filter(skill => skill);
    onDataUpdate({ skills });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={resumeData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  placeholder="City, State"
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                placeholder="Brief overview of your professional background and key skills..."
                rows={4}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Work Experience
              </div>
              <Button
                onClick={addExperience}
                size="sm"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {resumeData.experience.map((exp: any, index: number) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(index, 'company', e.target.value)}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(index, 'position', e.target.value)}
                      placeholder="Job Title"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label>Duration</Label>
                  <Input
                    value={exp.duration}
                    onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                    placeholder="Jan 2020 - Present"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
            {resumeData.experience.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No work experience added yet. Click "Add" to get started.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Education
              </div>
              <Button
                onClick={addEducation}
                size="sm"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {resumeData.education.map((edu: any, index: number) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>School/University</Label>
                    <Input
                      value={edu.school}
                      onChange={(e) => updateEducation(index, 'school', e.target.value)}
                      placeholder="University Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      placeholder="Bachelor of Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Input
                      value={edu.year}
                      onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      placeholder="2020"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            {resumeData.education.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No education added yet. Click "Add" to get started.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Check className="mr-2 h-5 w-5" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div>
              <Label htmlFor="skills">Skills (separate with commas)</Label>
              <Textarea
                id="skills"
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateSkills(e.target.value)}
                placeholder="JavaScript, React, Node.js, Python, SQL..."
                rows={3}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResumeForm;
