"use client";
import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from 'lucide-react';

interface BlogArticle {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  image: string;
  tags: string[];
  content: string[];
}

const BlogArticlePage = () => {
  // This would normally come from your API/database based on the slug
  const article: BlogArticle = {
    title: "Stanford University",
    excerpt: "Learn what it takes to get into Stanford University, from grades and scores to the traits that set applicants apart.",
    category: "Admission Requirements",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    author: {
      name: "Sophia Abandor",
      avatar: "/sophiaA.png",
      bio: "Leads Flourish’s vision and sets the editorial tone, ensuring every post helps students make informed college choices."
    },
    image: "/stanfordName.svg",
    tags: ["Stanford University", "CDS", "T20", "Admissions"],
    content: [
      "Harvard University stands as one of the most prestigious institutions in the world, attracting tens of thousands of applicants each year while maintaining an acceptance rate below 5%. Understanding what it takes to gain admission requires looking beyond just numbers.",
      
      "Academic excellence forms the foundation of any competitive Harvard application. The middle 50% of admitted students typically score between 1460-1580 on the SAT and 33-35 on the ACT. However, these scores alone don't guarantee admission – they simply ensure you're academically qualified to compete.",
      
      "What truly sets successful applicants apart is their demonstrated passion and impact in their chosen fields. Harvard looks for students who have pushed themselves beyond standard coursework, whether through advanced research, entrepreneurial ventures, artistic achievements, or community leadership.",
      
      "The Common Data Set (CDS) reveals that Harvard considers several factors as 'very important' in their admissions process: rigor of secondary school record, class rank, academic GPA, standardized test scores, application essay, recommendations, extracurricular activities, and character/personal qualities.",
      
      "Letters of recommendation carry significant weight in the Harvard admissions process. The most compelling recommendations come from teachers who can speak to your intellectual curiosity, collaborative spirit, and potential to contribute to the Harvard community. These should provide specific examples and anecdotes rather than generic praise.",
      
      "Your personal essay offers a unique opportunity to showcase your voice, values, and perspective. Harvard readers are looking for authenticity, self-awareness, and evidence of personal growth. The most successful essays often focus on meaningful experiences that have shaped your worldview or revealed something important about your character.",
      
      "Extracurricular involvement quality matters far more than quantity. Harvard values depth of commitment and demonstrated leadership or impact in a few areas over superficial participation in many activities. Whether you've led a successful nonprofit, conducted original research, or mastered a craft, show how you've made a difference.",
      
      "The interview, while not required, provides an additional opportunity to demonstrate your fit with Harvard's community. Interviewers look for intellectual vitality, maturity, and genuine interest in what Harvard offers. Come prepared with thoughtful questions and be ready to discuss your passions authentically.",
      
      "Harvard practices need-blind admissions for domestic students and meets 100% of demonstrated financial need without loans. This means your ability to pay should never be a barrier to applying. The financial aid office works with families to create affordable packages.",
      
      "Finally, remember that Harvard builds a diverse class each year. There's no single formula for admission – the admissions committee seeks students who will contribute unique perspectives, experiences, and talents to create a vibrant learning community. Your authentic self is your greatest asset."
    ]
  };

  return (
    <div className="scroll-smooth relative w-full min-h-screen pt-8 overflow-x-hidden bg-gradient-to-br from-stone-50 to-stone-100">
      <span>
        <link href="https://api.fontshare.com/v2/css?f[]=sentient@401&display=swap" rel="stylesheet"></link>
      </span>

      {/* Header/Navigation */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors no-underline"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blogs</span>
          </a>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-stone-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl font-bold text-stone-900 mb-6 leading-tight" 
          style={{ fontFamily: "'Sentient', serif" }}
        >
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-[#d4a574] mb-8 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Meta Info & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-stone-900">{article.author.name}</p>
                <div className="flex items-center gap-3 text-sm text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-stone-100 rounded-lg transition-colors" title="Share">
              <Share2 className="w-5 h-5 text-stone-600" />
            </button>
            <button className="p-2 hover:bg-stone-100 rounded-lg transition-colors" title="Bookmark">
              <Bookmark className="w-5 h-5 text-stone-600" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-stone-200 max-w-xl mx-auto p-4">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-contain"
        />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-stone-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                <a 
                href="https://drive.google.com/file/d/12MjIqdzzHiECf6hfRlbU3RmmIy14hl1H/view" 
                className="text-[#820000] hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                Stanford Common Data Set (CDS)
                </a>.
            </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-sm font-semibold text-stone-900 mb-4">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-stone-100 text-stone-700 px-4 py-2 rounded-lg text-sm hover:bg-stone-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-stone-200">
          <div className="flex items-start gap-6">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-20 h-20 rounded-full flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-stone-600" />
                <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'Sentient', serif" }}>
                  About {article.author.name}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div className="mt-12 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 bg-stone-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-700 transition-colors no-underline"
          >
            Explore More Articles
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </a>
        </div>
      </article>

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

export default BlogArticlePage;