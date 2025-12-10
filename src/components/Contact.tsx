import { Mail, Linkedin, Github, Heart } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <span className="text-white/90">Let&apos;s Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Get In Touch
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        {/* Contact Card */}
        <div className="p-8 md:p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl mb-12">
          <h3 className="text-2xl text-white mb-8">Chetna Singhal</h3>
          
          <div className="space-y-6">
            {/* Email */}
            <a 
              href="mailto:chetna@example.com" 
              className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all hover:scale-105 group"
            >
              <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white">chetna@example.com</span>
            </a>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/chetnasinghal" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all hover:scale-105 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/chetnasinghal" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all hover:scale-105 group"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Thank you message */}
        <div className="flex items-center justify-center gap-2 text-white/70">
          <span>Thank you for viewing my portfolio</span>
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © 2025 Chetna Singhal. Designed & Developed with passion.
          </p>
        </div>
      </div>
    </section>
  );
}
