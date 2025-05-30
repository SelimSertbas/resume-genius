
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { TemplateType } from '@/components/TemplateSelector';

interface PDFTemplateProps {
  resumeData: any;
  template: TemplateType;
}

const getTemplateColors = (template: TemplateType) => {
  switch (template) {
    case 'modern':
      return {
        headerBg: '#2563eb',
        accent: '#059669',
        skillsBg: '#2563eb'
      };
    case 'minimalist':
      return {
        headerBg: '#1e293b',
        accent: '#475569',
        skillsBg: '#475569'
      };
    case 'elegant':
      return {
        headerBg: '#7c3aed',
        accent: '#6366f1',
        skillsBg: '#7c3aed'
      };
    case 'creative':
      return {
        headerBg: '#f97316',
        accent: '#14b8a6',
        skillsBg: '#f97316'
      };
    default:
      return {
        headerBg: '#2563eb',
        accent: '#059669',
        skillsBg: '#2563eb'
      };
  }
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    color: 'white',
  },
  headerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerInfo: {
    fontSize: 10,
    opacity: 0.9,
    marginBottom: 2,
  },
  content: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 2,
    color: '#1e293b',
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  duration: {
    fontSize: 9,
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    padding: 4,
    borderRadius: 2,
  },
  description: {
    fontSize: 9,
    color: '#475569',
    lineHeight: 1.4,
  },
  educationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  school: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skill: {
    color: 'white',
    fontSize: 9,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.5,
  }
});

const PDFTemplate = ({ resumeData, template }: PDFTemplateProps) => {
  const colors = getTemplateColors(template);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.headerBg }]}>
          <Text style={styles.headerName}>
            {resumeData.personalInfo.fullName || 'Your Name'}
          </Text>
          {resumeData.personalInfo.email && (
            <Text style={styles.headerInfo}>{resumeData.personalInfo.email}</Text>
          )}
          {resumeData.personalInfo.phone && (
            <Text style={styles.headerInfo}>{resumeData.personalInfo.phone}</Text>
          )}
          {resumeData.personalInfo.location && (
            <Text style={styles.headerInfo}>{resumeData.personalInfo.location}</Text>
          )}
        </View>

        <View style={styles.content}>
          {/* Summary */}
          {resumeData.personalInfo.summary && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { borderBottomColor: colors.accent }]}>
                Professional Summary
              </Text>
              <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { borderBottomColor: colors.accent }]}>
                Work Experience
              </Text>
              {resumeData.experience.map((exp: any, index: number) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <View>
                      <Text style={styles.jobTitle}>
                        {exp.position || 'Position Title'}
                      </Text>
                      <Text style={[styles.company, { color: colors.accent }]}>
                        {exp.company || 'Company Name'}
                      </Text>
                    </View>
                    <Text style={styles.duration}>
                      {exp.duration || 'Duration'}
                    </Text>
                  </View>
                  {exp.description && (
                    <Text style={styles.description}>{exp.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { borderBottomColor: colors.accent }]}>
                Education
              </Text>
              {resumeData.education.map((edu: any, index: number) => (
                <View key={index} style={styles.educationItem}>
                  <View>
                    <Text style={styles.degree}>
                      {edu.degree || 'Degree'}
                    </Text>
                    <Text style={[styles.school, { color: colors.accent }]}>
                      {edu.school || 'School Name'}
                    </Text>
                  </View>
                  <Text style={styles.duration}>
                    {edu.year || 'Year'}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { borderBottomColor: colors.accent }]}>
                Skills
              </Text>
              <View style={styles.skillsContainer}>
                {resumeData.skills.map((skill: string, index: number) => (
                  <Text
                    key={index}
                    style={[styles.skill, { backgroundColor: colors.skillsBg }]}
                  >
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default PDFTemplate;
