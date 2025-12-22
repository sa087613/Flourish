"use client";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizable-navbar";
import { useState } from "react";
import { ArrowRight, BookOpen, Users, Target, Sparkles, Menu, X } from 'lucide-react';
import AnimatedLogo from '@/components/animatedLogo';
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

const navItems = [
    { name: "Our Mission", link:"#ourmission" },
    { name: "FAQ's", link: "#faqs" },
    { name: "Meet the Team", link: "/team" },
  ];
const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Trusted Resource",
      description: "Bringing together verified facts and real experiences to help you make confident, informed decisions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with fellow students, share experiences, and learn from those who've been there."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Achievement",
      description: "Delivering clear, research-based insights to help you cut through the noise and focus on what truly matters."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Success Stories",
      description: "Learn from real students who've successfully navigated the admission process."
    }
  ];
const stats = [
    { number: "50+", label: "Students Helped" },
    { number: "25+", label: "Universities" },
    { number: "100%", label: "Verified Insider Interviews" },
    { number: "10+", label: "Current Student Contributors" }
  ];
interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "What is Flourish?",
    answer:
      "Flourish is a platform that helps students explore colleges with ease. We provide concise blogs on college stats, insider insights from current students, and step-by-step guidance on the admission process.",
  },
  {
    question: "What kind of content does Flourish offer?",
    answer:
      "We publish blogs, guides, and tutorials covering topics such as college rankings, admission requirements, application tips, financial aid, and student experiences.",
  },
  {
    question: "How is Flourish different from other college websites?",
    answer:
      "Unlike general college websites, Flourish focuses on concise, actionable advice, insider insights from current students, and practical steps to simplify your college search and application process.",
  },
  {
    question: "How often is Flourish updated?",
    answer:
      "We update our content regularly to reflect changes in college admissions, test requirements, and student experiences.",
  },
];
const logos = [
  { name: "Next.js", src: "/next.png" },
  { name: "Vercel", src: "/vercel.svg" },
  { name: "AceternityAI", src: "/logo-dark.png" },
  { name: "TailwindCSS", src: "/tailwindCSS.svg" },
];

export default function Home() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default
const toggleIndex = (index: number) => {
  setOpenIndex((current) => (current === index ? null : index));
}
  return (
    <div className="scroll-smooth relative w-full min-h-screen pt-8 overflow-x-hidden bg-gradient-to-br from-stone-50 to-stone-100">
    {/*Navbar*/}
    <div>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="/contact">Contact</NavbarButton>
            <NavbarButton variant="primary" href="/blogs">Blogs</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-stone-600"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full" 
              >
                Contact
              </NavbarButton>
              <NavbarButton
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full" 
              >
                Blogs
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
    {/*Hero Section*/}
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Your College Journey Starts Here
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight" style={{ fontFamily: "'Story Script', serif" }}>
              Navigate College Admissions with Confidence
            </h1>
            <p className="text-xl text-[#d4a574] mb-8 leading-relaxed">
              Expert guidance, proven strategies, and a supportive community to help you get into your dream college.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/blogs" 
                className="inline-flex items-center justify-center gap-2 bg-stone-600 text-white px-8 py-4 rounded-xl hover:bg-stone-700 transition-all hover:scale-105 no-underline font-semibold text-lg"
              >
                Start Reading
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration 
          <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=800&fit=crop" 
                alt="Picture of smth" 
                className="w-full h-full object-cover opacity-90"
              />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-stone-200">
              <p className="text-4xl font-bold text-stone-600" style={{ fontFamily: "'Sentient', serif" }}>25+</p>
              <p className="text-sm text-stone-600 font-medium">Universities</p>
            </div>
          */}
          <div className="relative">
          <CardContainer className="inter-var" containerClassName="relative z-10 -mt-5">
          <CardBody className="bg-gray-50 relative group/card shadow-2xl w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-stone-900" style={{ fontFamily: "'Story Script', serif" }}
          >
          Harvard University
          </CardItem>
          <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-[#d4a574]"
           >
          Learn what it takes to get into Harvard, from grades and scores to the traits that set applicants apart.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
          <div className="mb-12 rounded-2xl overflow-hidden bg-stone-200 max-w-xl mx-auto p-4">
          <img
             src="/harvard.svg"
             className="w-full h-64 object-contain"
            />
        </div>
          </CardItem>
          <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="/blogs"
            className="px-4 py-2 rounded-xl text-xs font-normal text-stone-600"
          >
            Read More →
          </CardItem>
          </div>
          </CardBody>
          </CardContainer>
          </div>
        </div>
    </section>
    {/* Stats Section */}
    <section className="bg-white border-y border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-stone-600 mb-2" style={{ fontFamily: "'Story Script', serif" }}>
                  {stat.number}
                </p>
                <p className="text-stone-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
    {/* Features Section */}
    <section id="features" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Story Script', serif" }}>
            Why Choose Flourish?
          </h2>
          <p className="text-xl text-[#d4a574] max-w-2xl mx-auto">
            We provide everything you need to succeed in your college admission journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-stone-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 mb-6 group-hover:bg-stone-600 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3" style={{ fontFamily: "'Story Script', serif" }}>
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </section>
    <section className="w-full bg-stone-700 py-16 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-sm uppercase tracking-widest text-white mb-10">
          Constructed with these frameworks
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* About Section */}
    <section id="ourmission" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden aspect-square">
              <AnimatedLogo />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Story Script', serif" }}>
                Your Success Is Our Mission
              </h2>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                At Flourish, we understand that the college admission process can be overwhelming. That&apos;s why we&apos;ve created a comprehensive platform that combines expert guidance with peer support.
              </p>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Our team of experienced counselors has helped thousands of students gain admission to their dream schools. We provide personalized strategies, insider insights, and the tools you need to stand out.
              </p>
              <a 
                href="/team" 
                className="inline-flex items-center gap-2 text-stone-600 font-semibold text-lg hover:gap-4 transition-all no-underline"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
    </section>
    {/*FAQ's*/}
    <div id="faqs" className="relative z-10 min-w-3/4 max-w-[85rem] px-4 py-20 md:py-32sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-extrabold md:text-4xl md:leading-tight text-stone-700" style={{ fontFamily: "'Story Script', serif" }}>
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-[#d4a574]">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="divide-y divide-neutral-300">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`pt-6 pb-3 ${isOpen ? "active" : ""}`}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start  rounded-lg transition  focus:outline-none text-stone-600 hover:text-stone-700 focus:text-stone-400" 
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${idx}`}
                    id={`faq-heading-${idx}`}
                  >
                    {item.question}
                    <svg
                      className={`block shrink-0 w-5 h-5  group-hover:text-stone-900 text-black-700 ${
                        isOpen ? "hidden" : "block" 
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    <svg
                      className={`block shrink-0 w-5 h-5  group-hover:text-stone-600 text-stone-700 ${
                        isOpen ? "block" : "hidden"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-content-${idx}`}
                      className="text-stone-700"
                      role="region"
                      aria-labelledby={`faq-heading-${idx}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    {/* CTA Section */}
    <section className="max-w-7xl mx-auto px-6 py-0 md:py-8">
        <div className="bg-gradient-to-br from-stone-600 to-stone-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Story Script', serif" }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-stone-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully navigated the college admission process with Flourish.
            </p>
            <a 
              href="/blogs" 
              className="inline-flex items-center gap-2 bg-white text-stone-600 px-8 py-4 rounded-xl hover:bg-stone-50 transition-all hover:scale-105 no-underline font-semibold text-lg"
            >
              Start Reading
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
    </section>
    {/* Footer */}
    <footer className="relative z-10 rounded-lg shadow-sm bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/flourish.svg"
              className="h-8"
              alt="Flourish Logo"
            />
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-stone-900" style={{ fontFamily: "'Story Script', serif" }}>
              Flourish
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-stone-600">
            <li>
              <a href="#ourmission" className="hover:underline me-4 md:me-6">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline me-4 md:me-6">
                FAQ&apos;s
              </a>
            </li>
            <li>
              <a href="/team" className="hover:underline me-4 md:me-6">
                Meet the Team
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">
          © 2025{" "}
          <a>
            Flourish
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    </div>
  );
}
