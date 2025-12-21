import React from "react"
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';


export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Sophia Abanador",
      photoUrl: "sophiaAProfile.jpg",
      role: "Founder, Editor-in-Chief",
      bio: "High school student in Middletown, CT, aspiring to pursue a career in finance and software engineering. Passions include coding, business, and finance, with active involvement in Robotics, where I serve as the Head Programmer, and the Mayoral Youth Cabinet. I also currently hold the positions of president in both the National Honor Society and the DECA chapter at Middletown High School. Enjoys working on coding projects and seeking opportunities to help the community. Striving for internships to gain hands-on experience in fields such as, but not limited to, finance, consulting, and tech.",
    },
    {
      name: "Sophia Lin",
      photoUrl: "sophiaLProfile.jpeg",
      role: "Managing Editor",
      bio: "Driven high school student from Middletown, CT, with a strong passion for pediatrics and improving children’s health and well-being. Actively involved in the PreMed Club and gaining practical experience at MidState Medical Center, I strive to combine academic learning with community service. I currently hold leadership roles as Vice President of Administration for the DECA chapter and Business Editor of Blueprints, where I focus on organization and outreach. Committed to making a difference, I enjoy volunteering at hospitals and youth programs while seeking opportunities to deepen my knowledge of medicine and patient care.",
    },
    {
      name: "Ariel Mason",
      photoUrl: "arielProfile.JPG",
      role: "Acquisitions Editor",
      bio: "Motivated high school student from Middletown, CT, aspiring to build a career in medicine as a dermatologist. I’m fascinated by the science behind skin health and passionate about promoting confidence and wellness through healthcare. As president of the PreMed Club and vice president of Community and Fundraising for the DECA chapter at Middletown High School, I enjoy combining leadership with service. My experiences in Wesleyan University’s Research Summer Program and volunteering at local clinics have strengthened my curiosity for medical research and patient care. I’m eager to continue exploring the medical field through hands-on learning, shadowing, and community initiatives.",
    }
  ];

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
          <h1 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "'Homemade Apple', serif" }}>Our Team</h1>
          <p className="mt-2 text-[#d4a574]">Meet the people behind our success</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Photo Section 
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-white flex items-center justify-center">
              <div className="text-center">
                <img
                    src=""
                    className="w-full h-full object-cover"
                    alt="Flourish Logo"
                  />
              </div>
            </div>
          </div>
        </div>
        */}
        
        {/* Team Members Grid */}
        <div>
          <h2 className="text-2xl font-bold text-stone-900 mb-8" style={{ fontFamily: "'Homemade Apple', serif" }}>Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
              <div className="aspect-square bg-[#d4a574] flex items-center justify-center overflow-hidden">
                  {member.photoUrl ? (
                  <img 
                  src={member.photoUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover"
              />
                ) : (
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-stone-600">
                  {member.name.charAt(0)}
                  </span>
               </div>
                )}
              </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[#d4a574] font-medium mt-1">{member.role}</p>
                  <p className="text-stone-600 mt-3 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>        
  );
}
