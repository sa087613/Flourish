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
    title: "Boston University",
    excerpt: "Learn what it takes to get into Boston University, from grades and scores to the traits that set applicants apart.",
    category: "Admission Requirements",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    author: {
      name: "Sophia Lin",
      avatar: "/sophiaL.png",
      bio: "Manages content quality and workflow, keeping the blog consistent, clear, and research-driven."
    },
    image: "/bostonUniversityName.svg",
    tags: ["Boston University", "CDS", "T20", "Admissions"],
    content: [
      "Boston University is a highly selective private research university, admitting approximately 12–13% of applicants in recent admission cycles. For the Class of 2029, BU received over 76,000 applications, reflecting its growing national and international appeal. BU follows a holistic admissions process, meaning that academic performance, extracurricular involvement, essays, recommendations, and personal qualities are all considered together when evaluating applicants.",
      
      "Academic Requirements", 
      "Boston University places significant weight on academic achievement and rigor.",
      "Grades/GPA: The average GPA of enrolled first-year students is approximately 3.87 (unweighted), indicating that most admitted students earned primarily A grades throughout high school.",
      "Course Rigor: Admitted students typically complete a rigorous curriculum, including AP, IB, honors, or dual-enrollment courses when available. BU values students who challenge themselves academically.",
      "Standardized Tests: Boston University is test-optional. Among students who submitted scores, the average SAT score is around 1460–1470, and the average ACT score is approximately 32.",
      "Class Rank: Class rank is not required, but a majority of admitted students rank in the top 10–15% of their graduating class when rank is reported.",
      
      "Extracurricular Activities", 
      "Boston University evaluates extracurricular involvement with an emphasis on quality, leadership, and sustained commitment rather than sheer quantity.",
      "— Successful applicants often demonstrate long-term involvement in a few meaningful activities.",
      "— Leadership roles, research experience, employment, athletics, arts, community service, and entrepreneurial projects are all valued.",
      "— BU looks for students who show initiative, impact, and growth, particularly those who contribute meaningfully to their school or local community.",
      
      "Writing",
      "Essays are a critical component of the BU application.",
      "— Applicants must submit a Common Application personal statement, which allows admissions officers to understand the applicant’s background, perspective, and personal values.",
      "— Boston University also requires supplemental essays, often focused on the student’s interest in BU and how they would engage with its academic and social environment.",
      "— With thousands of applicants having similar academic profiles, essays often play a key role in differentiating candidates.",
      
      "Letters of Recommendation",
      "Boston University requires: one counselor recommendation and one teacher recommendation. These letters help contextualize the student’s academic performance and character, especially within the competitive applicant pool.",
      
      "Interviews", 
      "Boston University does not conduct admissions interviews. All applicants are evaluated equally without an interview component, and the absence of an interview does not disadvantage any applicant.",
      
      "Special Circumstances", 
      "Financial Aid: Boston University offers need-based financial aid but practices need-aware admissions, meaning financial need may be considered during the admissions process. International Students: International applicants make up a significant portion of the student body, with students from over 65 countries represented. Non-native English speakers may be required to submit TOEFL or IELTSscores unless they qualify for an exemption.",
      
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
          {article.content.map((paragraph, index) => {
            // Check if this is a list item (starts with —)
            if (paragraph.startsWith("— ")) { 
              return (
                <p key={index} className="text-stone-700 leading-relaxed mb-4 text-lg flex items-start gap-3 ml-6">
                  <span className="text-stone-400">—</span>
                  <span>{paragraph.substring(2)}</span>
                </p>
              );
            }
            
            // Check if this is a subtitle
            const isSubtitle = paragraph.includes("Requirements") || 
                             paragraph.includes("Activities") || 
                             paragraph.includes("Writing") || 
                             paragraph.includes("Recommendation") ||
                             paragraph.includes("Interviews") ||
                             paragraph.includes("Circumstances");
            
            // Check if paragraph starts with a bolded item
            const boldPattern = /^(Grades\/GPA:|Course Rigor:|Standardized Tests:|Class Rank:|Financial Aid:|International Students:)/;
            const hasBoldStart = boldPattern.test(paragraph);
            
            if (isSubtitle) {
              return (
                <h2 key={index} className="text-2xl font-bold text-stone-900 mt-10 mb-4" style={{ fontFamily: "'Sentient', serif" }}>
                  {paragraph}
                </h2>
              );
            } else if (hasBoldStart) {
              const parts = paragraph.split(/^([^:]+:)/);
              return (
                <p key={index} className="text-stone-700 leading-relaxed mb-6 text-lg">
                  <strong className="font-semibold text-stone-900">{parts[1]}</strong> {parts[2]}
                </p>
              );
            } else {
              return (
                <p key={index} className="text-stone-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              );
            }
          })}
            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                <a 
                href="https://www.bu.edu/asir/files/2025/03/cds-2025.pdf" 
                className="text-[#CC0000] hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                Boston University Common Data Set (CDS)
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