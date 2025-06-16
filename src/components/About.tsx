import React from 'react';
import { Shield, Award, Users, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Dream Way Consultancy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a trusted overseas recruitment agency helping individuals secure jobs in 
            countries like UAE, Saudi Arabia, Qatar, Oman, Singapore, Malaysia, and Europe. 
            We guide you from job search to final placement with honest, transparent support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Dream Way Consultancy?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Transparent & Ethical
                  </h4>
                  <p className="text-gray-600">
                    No fake promises, only real results. We maintain complete transparency 
                    throughout the process and follow ethical recruitment practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Trusted Partnerships
                  </h4>
                  <p className="text-gray-600">
                    We have established partnerships with verified employers across multiple 
                    countries, ensuring genuine job opportunities for our candidates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Complete Support
                  </h4>
                  <p className="text-gray-600">
                    From documentation to visa processing, from interview preparation to 
                    final placement - we support you every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Global Reach
                  </h4>
                  <p className="text-gray-600">
                    Job opportunities across GCC countries, Europe, and Asia with roles 
                    in construction, hospitality, healthcare, IT, and skilled trades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Professional team meeting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;