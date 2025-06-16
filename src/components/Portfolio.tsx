import React from 'react';
import { MapPin, Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountAnimation } from '../hooks/useCountAnimation';

const Portfolio: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  
  const placementsCount = useCountAnimation(2500, 2000, isVisible);
  const countriesCount = useCountAnimation(15, 2000, isVisible);
  const companiesCount = useCountAnimation(200, 2000, isVisible);
  const satisfactionCount = useCountAnimation(98, 2000, isVisible);

  const successStories = [
    {
      name: "Rajesh Kumar",
      role: "Senior Electrician",
      country: "UAE",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      story: "Secured a high-paying position in Dubai with complete visa and accommodation support.",
      salary: "$2,800/month"
    },
    {
      name: "Priya Sharma",
      role: "Staff Nurse",
      country: "Singapore",
      image: "https://images.pexels.com/photos/3807741/pexels-photo-3807741.jpeg",
      story: "Found her dream healthcare job in Singapore with family visa assistance.",
      salary: "$3,200/month"
    },
    {
      name: "Mohammed Ali",
      role: "Welding Engineer",
      country: "Qatar",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      story: "Landed a project manager role in Qatar's construction sector.",
      salary: "$4,500/month"
    }
  ];

  const countries = [
    { name: "UAE", jobs: 850, flag: "🇦🇪" },
    { name: "Saudi Arabia", jobs: 650, flag: "🇸🇦" },
    { name: "Qatar", jobs: 420, flag: "🇶🇦" },
    { name: "Oman", jobs: 280, flag: "🇴🇲" },
    { name: "Singapore", jobs: 190, flag: "🇸🇬" },
    { name: "Malaysia", jobs: 110, flag: "🇲🇾" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Success Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 15 years of experience helping professionals achieve their international career goals.
            Here's what we've accomplished together.
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{placementsCount.toLocaleString()}+</div>
            <div className="text-gray-600">Successful Placements</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{countriesCount}+</div>
            <div className="text-gray-600">Countries</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{companiesCount}+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{satisfactionCount}%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {story.salary}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                    <span className="text-2xl">{countries.find(c => c.name === story.country)?.flag}</span>
                  </div>
                  
                  <div className="text-blue-600 font-semibold mb-2">{story.role}</div>
                  <div className="text-gray-600 mb-4">{story.country}</div>
                  
                  <p className="text-gray-700 leading-relaxed">"{story.story}"</p>
                  
                  <div className="flex items-center mt-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Overview */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Job Opportunities by Country</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{country.flag}</span>
                    <h4 className="text-xl font-semibold text-gray-900">{country.name}</h4>
                  </div>
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Jobs</span>
                  <span className="text-2xl font-bold text-blue-600">{country.jobs}</span>
                </div>
                
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(country.jobs / 850) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;