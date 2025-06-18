import React from 'react';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowUp,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Dream Way</h3>
                <p className="text-sm text-gray-400">Consultancy</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for overseas employment. We connect skilled professionals 
              with verified employers across GCC, Europe, and Asia.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919626877940" 
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Job Placement</li>
              <li className="text-gray-400">Visa Processing</li>
              <li className="text-gray-400">Documentation Support</li>
              <li className="text-gray-400">Interview Preparation</li>
              <li className="text-gray-400">Travel Assistance</li>
              <li className="text-gray-400">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Phone & WhatsApp</p>
                  <a href="tel:+919626877940" className="text-white hover:text-blue-400 transition-colors">
                                        +91 96268 77940 <br></br> +91 93633 38128 <br></br> +91 88384 67447

                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:careers.dreamway@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    careers.dreamway@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Office Hours</p>
                  <p className="text-white">Mon-Fri: 9AM-6PM</p>
                  <p className="text-white">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-gray-400">Successful Placements</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-gray-400">Verified Jobs</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-yellow-600 p-3 rounded-full">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dream Way Consultancy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
