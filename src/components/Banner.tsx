import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Banner() {
  return (
    <div className="max-w-[608px] mx-auto p-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        
        {/* Content */}
        <div className="relative z-10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  Future Vision
                </h1>
                <h2 className="text-xl text-white/80">
                  Next Generation Technology
                </h2>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                Experience the cutting-edge intersection of design and technology. Our platform delivers immersive digital experiences that push the boundaries of what's possible in the modern web.
              </p>
              
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Explore Now
              </Button>
            </div>
            
            {/* 3D Image */}
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl" />
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=center"
                    alt="3D Futuristic Technology"
                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500" />
                  <div className="absolute top-1/2 -left-3 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  );
}