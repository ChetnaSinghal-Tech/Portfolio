import { BookOpen, Search, Layout, Lightbulb } from 'lucide-react';

export function CaseStudyOther() {
  const processSteps = [
    {
      icon: Search,
      title: 'Research',
      description: 'Analyzed user needs and competitor platforms to identify key features'
    },
    {
      icon: Layout,
      title: 'Wireframe',
      description: 'Created low-fidelity wireframes to establish layout and user flow'
    },
    {
      icon: BookOpen,
      title: 'UI Design',
      description: 'Developed high-fidelity mockups with cohesive visual design system'
    },
    {
      icon: Lightbulb,
      title: 'Implementation',
      description: 'Built responsive frontend with clean, semantic HTML and CSS'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-700">Case Study 2</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            EduAssist Platform
          </h2>
          <p className="text-xl text-gray-600">
            Educational Resource Management System
          </p>
          <p className="text-gray-500 mt-2">
            Personal Project · Role: UX/UI Designer + Frontend Developer
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Screens */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjQyNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="EduAssist Platform"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {['Dashboard', 'Resources', 'Profile'].map((screen) => (
                <div key={screen} className="p-4 bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-lg text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-2"></div>
                  <p className="text-sm text-gray-700">{screen}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="p-6 bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl">
              <h3 className="text-2xl text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                EduAssist is a comprehensive platform designed to help students and educators manage educational resources efficiently. The platform provides tools for organizing study materials, tracking progress, and facilitating collaboration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My role involved the complete design and development process, from initial research to final implementation, ensuring a user-friendly and accessible interface.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl text-gray-900">Design Process</h3>
              {processSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl shadow-xl">
              <h4 className="text-xl mb-2">Key Learnings</h4>
              <p>This project enhanced my understanding of information architecture and taught me how to design for different user personas while maintaining visual consistency across the platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
