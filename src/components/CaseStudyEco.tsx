import { Leaf, Users, Target, Wrench } from 'lucide-react';

export function CaseStudyEco() {
  const features = [
    {
      title: 'Problem Statement',
      icon: Target,
      content: 'Many individuals want to adopt sustainable living practices but lack accessible resources, community support, and tracking tools to make meaningful environmental impact.'
    },
    {
      title: 'Solution Overview',
      icon: Leaf,
      content: 'Eco-Connect is a platform that connects eco-conscious users with sustainable products, local communities, and personalized tracking tools to monitor their environmental footprint.'
    },
    {
      title: 'Your Role',
      icon: Users,
      content: 'As UX/UI Designer and Frontend Developer, I created user flows, wireframes, high-fidelity mockups, and implemented the responsive frontend using HTML and CSS.'
    },
    {
      title: 'Tools Used',
      icon: Wrench,
      content: 'Figma for design and prototyping, HTML/CSS for frontend development, and collaborative tools for team coordination during the hackathon.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700">Case Study 1</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Eco-Connect
          </h2>
          <p className="text-xl text-gray-600">
            Sustainable Living Platform
          </p>
          <p className="text-gray-500 mt-2">
            Hackathon Project · Role: UX/UI Designer + Frontend Developer
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-gradient-to-br from-white to-green-50/30 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - UI Screens */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjY1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Eco-Connect Platform"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl shadow-lg">
                <div className="text-3xl mb-2">🌱</div>
                <p className="text-sm text-gray-600">Carbon Footprint Tracking</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl shadow-lg">
                <div className="text-3xl mb-2">🤝</div>
                <p className="text-sm text-gray-600">Community Building</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl shadow-lg">
                <div className="text-3xl mb-2">🛒</div>
                <p className="text-sm text-gray-600">Sustainable Products</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl shadow-lg">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-sm text-gray-600">Impact Dashboard</p>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-xl">
              <h4 className="text-xl mb-2">Key Learning</h4>
              <p>This project taught me the importance of user-centered design in solving real-world problems and how collaborative design thinking can lead to innovative sustainable solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
