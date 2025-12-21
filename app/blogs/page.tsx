"use client";
import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  tags: string[];
  slug: string;
}

const BlogListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Boston University",
      excerpt: "Learn what it takes to get into Boston University, from grades and scores to the traits that set applicants apart.",
      category: "Admission Requirements",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      author: {
        name: "Sophia Lin",
        avatar: "/sophiaL.png"
      },
      image: "/bostonUniversity.png",
      tags: ["Boston University", "CDS", "T20", "Admissions"],
      slug: "boston-university"
    },
    /*{
      id: 2,
      title: "Harvard University",
      excerpt: "Learn what it takes to get into Harvard University, from grades and scores to the traits that set applicants apart.",
      category: "Admission Requirements",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      author: {
        name: "Sophia Abanador",
        avatar: "/sophiaA.png"
      },
      image: "/harvard.svg",
      tags: ["Harvard", "CDS", "Ivy League", "Admissions"],
      slug: "harvard-university"
    },
    {
      id: 3,
      title: "Top Extracurriculars That Stand Out on College Applications",
      excerpt: "Not all extracurriculars are created equal, here’s how they stack up when it comes to impressing college admissions.",
      category: "Applying to College",
      date: "Oct 10, 2025",
      readTime: "6 min read",
      author: {
        name: "Sophia Abanador",
        avatar: "/sophiaA.png"
      },
      image: "/extracurricularPhoto.webp",
      tags: ["Extracurriculars", "Application Tips", "College Prep"],
      slug: "top-extracurriculars-that-stand-out-on-college-applications"
    },
    {
      id: 4,
      title: "New York University",
      excerpt: "Learn what it takes to get into NYU, from grades and scores to the traits that set applicants apart.",
      category: "Admission Requirements",
      date: "Oct 8, 2025",
      readTime: "7 min read",
      author: {
        name: "Ariel Mason",
        avatar: "/ariel.png"
      },
      image: "/nyu.svg",
      tags: ["New York University", "CDS", "T20", "Admissions"],
      slug: "new-york-university"
    },
    {
      id: 5,
      title: "Barnard College",
      excerpt: "Learn what it takes to get into Barnard College, from grades and scores to the traits that set applicants apart.",
      category: "Admission Requirements",
      date: "Oct 12, 2025",
      readTime: "5 min read",
      author: {
        name: "Ariel Mason",
        avatar: "/ariel.png"
      },
      image: "/barnard.svg",
      tags: ["Barnard", "CDS", "T20", "Admissions"],
      slug: "barnard-college"
    },
    {
      id: 6,
      title: "Stanford university",
      excerpt: "Learn what it takes to get into Stanford University, from grades and scores to the traits that set applicants apart.",
      category: "Admission Requirements",
      date: "Oct 12, 2025",
      readTime: "5 min read",
      author: {
        name: "Sophia Abanador",
        avatar: "/sophiaA.png"
      },
      image: "/stanford.png",
      tags: ["Stanford University", "CDS", "T20", "Admissions"],
      slug: "stanford-university"
    },
    */
    {
      id: 2,
      title:"From Video Games to Quantitative Trading: A Yale CS Student's Journey",
      excerpt:"A student's journey of discovering their passion and pursuing it through their studies.",
      category: "Insider Insights",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      author: {
        name: "Sophia Abanador",
        avatar: "/sophiaA.png"
      },
      image: "/danny1.png",
      tags: ["Extracurriculars", "Application Tips", "College Prep"],
      slug: "From-Video-Games-to-Quantitative-Trading:-A-Yale-CS-Students-Journey"
    }
  ];

  const categories = ['All', 'Admission Requirements', 'Insider Insights', 'Applying to College'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="scroll-smooth relative w-full min-h-screen pt-8 overflow-x-hidden bg-gradient-to-br from-stone-50 to-stone-100">
    <span>
      <link href="https://api.fontshare.com/v2/css?f[]=sentient@401&display=swap" rel="stylesheet"></link>
    </span>
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors no-underline mb-4"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Home</span>
        </Link>
          <h1 className="text-4xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'Sentient', serif" }}>Blogs</h1>
          <p className="text-[#d4a574] text-lg">College tips, real student insights, and step-by-step admission advice</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-stone-600 text-white shadow-lg shadow-stone-200'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer block no-underline"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-stone-200 flex items-center justify-center p-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-sm text-stone-600 px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
              </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors line-clamp-2" style={{ fontFamily: "'Sentient', serif" }}>
                  {post.title}
                </h2>
                <p className="text-[#d4a574] mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-stone-700">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-stone-600 font-semibold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">No articles found</h3>
            <p className="text-stone-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

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
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-stone-900" style={{ fontFamily: "'Sentient', serif" }}>
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
};

export default BlogListingPage;
