export function UIGallery() {
  const galleryItems = [
    {
      title: 'Login Screen',
      description: 'Modern authentication UI',
      gradient: 'from-blue-400 to-purple-600',
      icon: '🔐'
    },
    {
      title: 'Dashboard Cards',
      description: 'Analytics components',
      gradient: 'from-green-400 to-blue-600',
      icon: '📊'
    },
    {
      title: 'Button Components',
      description: 'Reusable UI elements',
      gradient: 'from-pink-400 to-red-600',
      icon: '🎯'
    },
    {
      title: 'Landing Hero',
      description: 'Website header section',
      gradient: 'from-purple-400 to-pink-600',
      icon: '🚀'
    },
    {
      title: 'Navigation Menu',
      description: 'Responsive nav bar',
      gradient: 'from-yellow-400 to-orange-600',
      icon: '📱'
    },
    {
      title: 'Product Cards',
      description: 'E-commerce design',
      gradient: 'from-teal-400 to-green-600',
      icon: '🛍️'
    },
    {
      title: 'Form Layout',
      description: 'Input field designs',
      gradient: 'from-indigo-400 to-blue-600',
      icon: '📝'
    },
    {
      title: 'Profile Page',
      description: 'User profile interface',
      gradient: 'from-rose-400 to-pink-600',
      icon: '👤'
    },
    {
      title: 'Promotional Poster',
      description: 'Marketing graphics',
      gradient: 'from-cyan-400 to-blue-600',
      icon: '🎨'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <span className="text-purple-700">Visual Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            UI Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of various UI components, screens, and design work demonstrating attention to detail and visual design skills
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Image placeholder with gradient */}
              <div className={`h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
              
              {/* Glass card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-3xl shadow-xl max-w-2xl">
            <p className="text-gray-700 leading-relaxed">
              Each piece represents a commitment to clean design, thoughtful user experience, and pixel-perfect implementation. From HTML/CSS layouts to complete design systems in Figma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
