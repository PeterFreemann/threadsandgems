'use client'

import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '../components/Header';

const GOLD = '#C9A84C';
const DARK = '#2C1810';

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

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 mt-10">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase">
                Ankara & Nigerian Native Wear
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9] tracking-tight">
              Get in
              <span className=" font-extralight italic text-amber-200">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Questions about an order, custom sizing, or just want to talk fashion?
              We'd love to hear from you — the Threads & Gems family is always here.
            </p>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-2 h-2 bg-amber-300 rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float-delayed">
          <div className="w-1 h-1 bg-white rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float">
          <div className="w-3 h-3 border border-white/30 rotate-45 opacity-50" />
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Form */}
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
                    placeholder="Order enquiry, custom sizing, general question…"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-0 py-4 border-0 border-b border-stone-200 bg-transparent focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-900 font-light resize-none"
                    placeholder="Tell us how we can help…"
                  />
                </div>
                <button
                  className="group text-white px-10 py-4 rounded-none font-medium text-base transition-all duration-500 flex items-center space-x-3 tracking-wide uppercase"
                  style={{ backgroundColor: DARK }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = DARK; }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-12 animate-on-scroll">
              <div>
                <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                  Contact Details
                </span>
                <h3 className="text-3xl font-light text-stone-900 mb-8 tracking-tight">
                  Reach the <em className="font-light italic">Team</em>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: <MapPin className="w-5 h-5 text-stone-700" />,
                      label: 'Address',
                      content: (
                        <>
                          Online & UK-Based<br />
                          Orders shipped across the UK & Nigeria
                        </>
                      ),
                    },
                    {
                      icon: <Phone className="w-5 h-5 text-stone-700" />,
                      label: 'Phone / WhatsApp',
                      content: '+44 7700 000000',
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-stone-700" />,
                      label: 'Email',
                      content: 'hello@threadsandgems.co.uk',
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-stone-700" />,
                      label: 'Response Hours',
                      content: (
                        <>
                          Monday – Friday: 9:00 AM – 6:00 PM<br />
                          Saturday: 10:00 AM – 4:00 PM<br />
                          Sunday: Closed
                        </>
                      ),
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-100 to-stone-100"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-stone-900 mb-2 tracking-wide uppercase text-sm">
                          {item.label}
                        </h4>
                        <p className="text-stone-600 font-light leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ nudge */}
              <div
                className="p-8 border-l-4"
                style={{ borderColor: GOLD, backgroundColor: '#fdf8f0' }}
              >
                <h4 className="font-medium text-stone-900 mb-3 tracking-wide uppercase text-sm">
                  Custom Orders & Sizing
                </h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Need a specific size, colour, or occasion piece? We offer custom orders — just
                  drop us a message with your measurements and vision and we'll make it happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
              Stay Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Join the <em className="font-light italic">Threads & Gems Family</em>
            </h2>
            <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
              Be the first to know about new arrivals, exclusive collections, and the latest
              in Ankara and Nigerian native fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-none bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
              />
              <button className="bg-white px-8 py-4 rounded-none font-medium hover:bg-stone-100 transition-all duration-300 tracking-wide uppercase" style={{ color: DARK }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;