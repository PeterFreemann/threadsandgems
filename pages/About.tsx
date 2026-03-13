'use client';

import React, { useEffect } from 'react';
import { Award, Users, Globe, Heart, ArrowRight } from 'lucide-react';
import Header from '../components/Header';

const About = () => {
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
                British Perfumery
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              Our
              <span className="block font-extralight italic text-amber-200">
                Story
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Founded in the heart of London, Delightful Scents represents the pinnacle of British perfumery. 
              We blend traditional craftsmanship with modern innovation to create fragrances that capture the essence of luxury.
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

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 tracking-tight">
                Crafting <em className="font-light italic">Memories</em>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                At Delightful Scents, we believe that fragrance is more than just a scent – it's a form of self-expression, 
                a memory maker, and a confidence booster. Our mission is to create exceptional fragrances that tell 
                your unique story and enhance your daily experiences.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                Every bottle we create is a testament to our commitment to quality, sustainability, and the artistry 
                of perfumery. We source the finest ingredients from around the world and work with master perfumers 
                who have dedicated their lives to this craft.
              </p>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-100 rounded-none transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Perfume creation process"
                className="relative rounded-none shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              The Principles That <em className="font-light italic">Guide Us</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every decision we make is rooted in these core values that define who we are and what we stand for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center"><Award className="w-7 h-7 text-stone-700" /></div>,
                title: "Excellence",
                description: "We never compromise on quality, from ingredients to packaging"
              },
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center"><Users className="w-7 h-7 text-stone-700" /></div>,
                title: "Community",
                description: "Building lasting relationships with our customers and partners"
              },
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center"><Globe className="w-7 h-7 text-stone-700" /></div>,
                title: "Sustainability",
                description: "Committed to ethical sourcing and environmental responsibility"
              },
              {
                icon: <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-amber-100 rounded-full flex items-center justify-center"><Heart className="w-7 h-7 text-stone-700" /></div>,
                title: "Passion",
                description: "Every fragrance is created with love and dedication to the craft"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              The Passionate <em className="font-light italic">Artisans</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the dedicated individuals who bring their expertise and passion to every bottle we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Isabella Richardson",
                role: "Master Perfumer",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "With over 20 years of experience in Grasse, Isabella brings unparalleled expertise to our creations."
              },
              {
                name: "James Mitchell",
                role: "Creative Director",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "James leads our creative vision, ensuring each fragrance tells a compelling and unique story."
              },
              {
                name: "Sophie Chen",
                role: "Sustainability Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Sophie ensures our practices align with our commitment to environmental responsibility."
              }
            ].map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll group bg-stone-50 rounded-none overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-stone-900 mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 font-medium mb-6 tracking-wide uppercase text-sm">
                    {member.role}
                  </p>
                  <p className="text-stone-600 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
              Experience Luxury
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Discover Your <em className="font-light italic">Perfect Fragrance</em>
            </h2>
            <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
              Ready to find your signature scent? Explore our curated collection of luxury fragrances.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-stone-900 px-10 py-4 rounded-none font-medium text-base hover:bg-stone-100 transition-all duration-500 flex items-center space-x-3 tracking-wide uppercase">
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border border-white/50 text-white px-10 py-4 rounded-none font-medium text-base hover:bg-white hover:text-stone-900 transition-all duration-500 tracking-wide uppercase">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;