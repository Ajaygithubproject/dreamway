import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const testimonials = [
    {
      name: "Arjun Patel",
      role: "Construction Manager",
      country: "UAE",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      text: "Dream Way Consultancy made my dream come true. They helped me secure a construction manager position in Dubai with an excellent salary package. The entire process was transparent and professional.",
      rating: 5
    },
    {
      name: "Sunita Rao",
      role: "Hotel Manager",
      country: "Singapore",
      image: "https://images.pexels.com/photos/3807741/pexels-photo-3807741.jpeg",
      text: "I was nervous about working abroad, but the team at Dream Way provided incredible support. From visa processing to interview preparation, they were with me every step of the way.",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      role: "Software Engineer",
      country: "Qatar",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      text: "Professional, honest, and reliable. They found me a perfect IT role in Qatar that matched my skills perfectly. I highly recommend their services to anyone looking for international opportunities.",
      rating: 5
    },
    {
      name: "Meera Singh",
      role: "Registered Nurse",
      country: "Oman",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg",
      text: "The healthcare placement process was smooth and efficient. They understood my requirements and found me a position that offered both professional growth and excellent benefits.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what professionals who've successfully
            found their dream jobs abroad have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600 font-medium">{testimonial.country}</p>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">({testimonial.rating}/5)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Take the first step towards your international career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;