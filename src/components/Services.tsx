import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Plane, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const services = [
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "Secure verified positions across GCC, Europe, and Asia in construction, hospitality, healthcare, IT, and skilled trades.",
      color: "blue",
      features: ["Verified employer partnerships", "Multiple industry sectors", "Competitive salary packages"]
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with visa processing, passport applications, and all required paperwork.",
      color: "green",
      features: ["Visa processing", "Document verification", "Legal compliance"]
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Professional coaching and resume enhancement to help you succeed in international job interviews.",
      color: "purple",
      features: ["Resume optimization", "Mock interviews", "Communication training"]
    },
    {
      icon: Plane,
      title: "Travel Assistance",
      description: "End-to-end support including flight bookings, accommodation, and arrival logistics.",
      color: "orange",
      features: ["Flight arrangements", "Accommodation booking", "Airport assistance"]
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Ensuring all placements follow legal requirements and protecting your rights as an international worker.",
      color: "red",
      features: ["Contract verification", "Rights protection", "Legal compliance"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Continuous support throughout your journey, from application to successful placement and beyond.",
      color: "teal",
      features: ["Round-the-clock assistance", "Emergency support", "Post-placement guidance"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support for your international career journey. From job search to final placement,
            we provide end-to-end assistance to make your dream job abroad a reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your International Career?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of professionals who have found their dream jobs abroad with our help.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;