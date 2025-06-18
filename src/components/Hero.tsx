import React from 'react';
import { ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Professional business environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={elementRef}
            className={`text-white transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Trusted by 2,500+ Professionals</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Dream Job
              <span className="text-yellow-400"> Abroad</span>
              <br />
              Starts Here
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Dream Way Consultancy is your trusted partner for overseas employment. 
              We connect skilled professionals with verified employers across GCC, Europe, and Asia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                View Success Stories
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm text-gray-300">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-gray-300">Verified Jobs</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="International workforce"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-xl shadow-lg">

                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-bold text-gray-900">Verified Jobs Only</div>
                    <div className="text-sm text-gray-600">No fake promises</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
