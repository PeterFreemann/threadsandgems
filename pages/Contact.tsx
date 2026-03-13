'use client'

import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '../components/Header';

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-neutral-50">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase">
                Let's Connect
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              Get in
              <span className="block font-extralight italic text-amber-200">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We'd love to hear from you. Whether you have questions about our fragrances, 
              need personalized recommendations, or want to learn more about our craft.
            </p>
          </div>
        </div>

        {/* Minimal floating elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-2 h-2 bg-amber-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-20 animate-float-delayed">
          <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-3 h-3 border border-white/30 rotate-45 opacity-50"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                Send a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 tracking-tight">
                Start a <em className="font-light italic">Conversation</em>
              </h2>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  className="group bg-stone-900 text-white px-10 py-4 rounded-none font-medium text-base hover:bg-stone-800 transition-all duration-500 flex items-center space-x-3 tracking-wide uppercase"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-12 animate-on-scroll">
              <div>
                <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                  Contact Details
                </span>
                <h3 className="text-3xl font-light text-stone-900 mb-8 tracking-tight">
                  Visit Our <em className="font-light italic">Boutique</em>
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-stone-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-2 tracking-wide uppercase text-sm">Address</h4>
                      <p className="text-stone-600 font-light leading-relaxed">
                        123 Bond Street<br />
                        London, W1S 4PX<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-stone-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-2 tracking-wide uppercase text-sm">Phone</h4>
                      <p className="text-stone-600 font-light">+44 20 7123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-stone-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-2 tracking-wide uppercase text-sm">Email</h4>
                      <p className="text-stone-600 font-light">hello@Delightfulscents.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-stone-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-2 tracking-wide uppercase text-sm">Hours</h4>
                      <p className="text-stone-600 font-light leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Location
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              Find <em className="font-light italic">Us</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Located in the heart of London's luxury district, our boutique offers an intimate fragrance experience.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white rounded-none shadow-xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-stone-700" />
                  </div>
                  <h3 className="text-xl font-light text-stone-900 mb-2 tracking-wide">Interactive Map</h3>
                  <p className="text-stone-600 font-light">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
              Stay in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Join Our <em className="font-light italic">Community</em>
            </h2>
            <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
              Subscribe to receive updates on new arrivals, exclusive events, and fragrance insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
              />
              <button className="bg-white text-stone-900 px-8 py-4 rounded-none font-medium hover:bg-stone-100 transition-all duration-300 tracking-wide uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style> */}
    </div>
  );
};

export default Contact;