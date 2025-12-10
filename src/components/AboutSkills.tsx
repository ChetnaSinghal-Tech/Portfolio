import { Palette, Pencil, GitBranch, Type, Layout, Figma, Image, Code, Layers } from 'lucide-react';

export function AboutSkills() {
  const designSkills = [
    { icon: Palette, label: 'UI Design' },
    { icon: Pencil, label: 'Wireframing' },
    { icon: GitBranch, label: 'User Flows' },
    { icon: Type, label: 'Typography & Colors' },
    { icon: Layout, label: 'Layout Design' }
  ];

  const tools = [
    { icon: Figma, label: 'Figma' },
    { icon: Image, label: 'Canva' },
    { icon: Code, label: 'HTML' },
    { icon: Layers, label: 'CSS' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Me */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-gray-900">
              About Me
            </h2>
            
            <div className="p-8 bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl">
              <p className="text-gray-700 leading-relaxed">
                I am a beginner UX/UI Designer and Frontend Developer passionate about creating clean, accessible interfaces. I enjoy designing modern screens and building real layouts using HTML and CSS.
                <br /><br />
                I believe in solving problems through thoughtful design and simple user journeys. My goal is to craft digital experiences that are not only visually appealing but also intuitive and user-friendly.
                <br /><br />
                Every project is an opportunity to learn, grow, and push the boundaries of what&apos;s possible in design and development.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-gray-900">
              Skills
            </h2>
            
            {/* Design Skills */}
            <div className="space-y-4">
              <h3 className="text-xl text-gray-800">Design</h3>
              <div className="grid grid-cols-2 gap-4">
                {designSkills.map((skill) => (
                  <div 
                    key={skill.label}
                    className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-xl text-gray-800">Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool.label}
                    className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                      <tool.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
