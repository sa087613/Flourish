"use client";
import { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  specialty: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const teamMembers: TeamMember[] = [
    {
      name: "Sophia Abanador",
      role: "Founder, Editor-in-Chief",
      email: "abanadorsophia@gmail.com",
      phone: "+1 (860) 975-5848",
      specialty: "Leads Flourish’s vision and sets the editorial tone, ensuring every post helps students make informed college choices."
    },
    {
      name: "Sophia Lin",
      role: "Managing Editor",
      email: "sophia67lin@gmail.com",
      phone: "+1 (646) 763-5260",
      specialty: "Manages content quality and workflow, keeping the blog consistent, clear, and research-driven."
    },
    {
      name: "Ariel Mason",
      role: "Acquisitions Editor",
      email: "masonariel3@gmail.com",
      phone: "+1 (757) 777-6675",
      specialty: "Sources new content and contributors, bringing fresh ideas and perspectives to Flourish."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message && selectedMember) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelectedMember(null);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="scroll-smooth relative w-full min-h-screen pt-8 overflow-x-hidden bg-gradient-to-br from-stone-50 to-stone-100">
    <span>
      <link href="https://api.fontshare.com/v2/css?f[]=sentient@401&display=swap" rel="stylesheet"></link>
    </span>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors no-underline mb-4"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Home</span>
        </Link>
          <h1 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "'Sentient', serif" }}>Contact Our Team</h1>
          <p className="mt-2 text-[#d4a574]">If you’re a college or an individual interested in contributing to Flourish, please reach out to Sophia Abanador. We’d love to hear from you!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Members Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Sentient', serif" }}>Select Team Member</h2>
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setSelectedMember(member)}
                className={`w-full text-left bg-white rounded-xl shadow-md p-4 transition-all ${
                  selectedMember?.name === member.name
                    ? 'ring-2 ring-stone-700 shadow-lg'
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-stone-700">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-stone-900 truncate">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#d4a574]">{member.role}</p>
                  </div>
                  {selectedMember?.name === member.name && (
                    <svg className="h-5 w-5 text-stone-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Contact Form or Member Info */}
          <div className="lg:col-span-2">
            {selectedMember ? (
              <div className="bg-white rounded-xl shadow-md p-8">
                {/* Selected Member Info */}
                <div className="mb-8 pb-8 border-b border-stone-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-stone-600">
                        {selectedMember.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-stone-900" style={{ fontFamily: "'Sentient', serif" }}>{selectedMember.name}</h2>
                      <p className="text-lg text-stone-600 mt-1">{selectedMember.role}</p>
                      <p className="text-stone-600 mt-2">{selectedMember.specialty}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-stone-600">
                          <svg className="h-4 w-4 mr-2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {selectedMember.email}
                        </div>
                        <div className="flex items-center text-sm text-stone-600">
                          <svg className="h-4 w-4 mr-2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {selectedMember.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <h3 className="text-xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Sentient', serif" }}>
                  Send a message to {selectedMember.name.split(' ')[0]}
                </h3>
                
                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      Your message has been sent to {selectedMember.name}. They&apos;ll get back to you soon!
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-stone-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-stone-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message to {selectedMember.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 text-stone-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">Select a Team Member</h3>
                  <p className="text-[#d4a574]">Choose someone from the list to send them a message</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
