import { Code, Palette, FileCode, Layers } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full shadow-lg">
              <span className="text-blue-600">👋 Hello, I&apos;m</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Chetna Singhal
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Frontend Developer & UX/UI Designer
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              I design simple, clean, and user-friendly digital experiences.
            </p>
            
            {/* Skills icons */}
            <div className="flex flex-wrap gap-4 pt-6">
              {[
                { icon: FileCode, label: 'HTML' },
                { icon: Layers, label: 'CSS' },
                { icon: Palette, label: 'Figma' },
                { icon: Code, label: 'Canva' }
              ].map((skill, index) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-md border border-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <skill.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{skill.label}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Right content - abstract shape */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHNoYXBlc3xlbnwxfHx8fDE3NjUyODQyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract geometric design"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl backdrop-blur-sm"></div>
              
              {/* Floating glass card */}
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl">
                <p className="text-sm text-gray-600">Available for projects</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800">Currently open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
