'use client';

import React, { useEffect } from 'react';
import { Award, Users, Globe, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import AboutImg from '../images/clothscontact.jpg'

const GOLD = '#C9A84C';
const DARK = '#2C1810';

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

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
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
              Our
              <span className="block font-extralight italic text-amber-200">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Born from a deep love of Nigerian culture and fashion, Threads & Gems brings the
              vibrancy of Lagos to wardrobes around the world — one stitch at a time.
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

      {/* ── Mission ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 tracking-tight">
                Celebrating <em className="font-light italic">African Heritage</em>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                At Threads & Gems, fashion is more than fabric — it's identity, pride, and
                belonging. Our mission is to bring authentic Ankara prints and Nigerian native
                wear to every occasion, from everyday elegance to grand owambes.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                Every piece we curate is a love letter to Nigerian craftsmanship. We work closely
                with skilled artisans who carry generations of tradition in every cut, every
                stitch, and every bold print.
              </p>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-100 transform rotate-3 opacity-20" />
              <img
                src={AboutImg.src}
                alt="Nigerian fashion craftsmanship"
                className="relative shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
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
              Every decision we make is rooted in these core values — honouring where we come
              from while dressing the world in African excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Award className="w-7 h-7 text-stone-700" />,
                title: 'Authenticity',
                description: 'Genuine Ankara prints and native materials sourced directly from Nigerian markets.',
              },
              {
                icon: <Users className="w-7 h-7 text-stone-700" />,
                title: 'Community',
                description: 'Supporting local artisans and building a global family united by culture and style.',
              },
              {
                icon: <Globe className="w-7 h-7 text-stone-700" />,
                title: 'Heritage',
                description: 'Preserving and celebrating the rich traditions of Nigerian fashion for generations to come.',
              },
              {
                icon: <Heart className="w-7 h-7 text-stone-700" />,
                title: 'Passion',
                description: 'Every piece is chosen with love and a deep pride in African culture and identity.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4 tracking-wide">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Timeline ── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              How It Started
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              Rooted in <em className="font-light italic">Lagos</em>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Our journey from a shared love of Nigerian fashion to a brand worn across the globe.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                year: '2018',
                title: 'The Spark',
                description:
                  'It started with a single Ankara set — made for a family owambe — that drew more compliments than the party itself. The seed was planted.',
              },
              {
                year: '2020',
                title: 'Threads & Gems is Born',
                description:
                  'What began as a passion project became a brand. We launched our first curated collection of Ankara and native wear, shipped to customers across the UK and Nigeria.',
              },
              {
                year: '2022',
                title: 'Growing the Family',
                description:
                  'We partnered with artisans in Lagos and Aba to expand our range — bringing in Aso-Oke, Agbada sets, and hand-embroidered kaftans to our growing community.',
              },
              {
                year: 'Today',
                title: 'Culture, Worn Proudly',
                description:
                  'Threads & Gems dresses people for the moments that matter — from owambes to graduations, everyday wear to global stages. The story is still being written.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll flex gap-10 items-start"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="shrink-0 text-right w-20">
                  <span
                    className="text-sm font-semibold tracking-widest uppercase"
                    style={{ color: GOLD }}
                  >
                    {item.year}
                  </span>
                </div>
                <div className="relative pl-10 border-l-2 border-stone-200 pb-4">
                  <div
                    className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white"
                    style={{ backgroundColor: GOLD }}
                  />
                  <h3 className="text-xl font-medium text-stone-900 mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-gradient-to-r from-stone-900 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-stone-200 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wider uppercase mb-8">
              Wear Your Roots
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Find Your <em className="font-light italic">Perfect Piece</em>
            </h2>
            <p className="text-lg text-white/70 mb-12 font-light leading-relaxed">
              Ready to wear your culture proudly? Browse our full collection of Ankara and
              Nigerian native wear.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/shop"
                className="group bg-white text-stone-900 px-10 py-4 rounded-none font-medium text-base hover:bg-stone-100 transition-all duration-500 flex items-center space-x-3 tracking-wide uppercase"
              >
                <span>Shop the Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/50 text-white px-10 py-4 rounded-none font-medium text-base hover:bg-white hover:text-stone-900 transition-all duration-500 tracking-wide uppercase"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;