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
    title: "From Video Games to Quantitative Trading: A Yale CS Student's Journey",
    excerpt: "A student's journey of discovering their passion and pursuing it through their studies.",
    category: "Insider Insights",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    author: {
      name: "Sophia Abanador",
      avatar: "/sophiaA.png",
      bio: "Leads Flourish’s vision and sets the editorial tone, ensuring every post helps students make informed college choices."
    },
    image: "/danny2.jpeg",
    tags: ["Extracurriculars", "Application Tips", "College Prep"],
    content: [
      "Back in middle school, picking a college major felt more like a random assignment than a real-life decision. For this Yale student, it all started in STEM class when their teacher told them to choose a major. Without any real direction, they did what plenty of kids would do—Googled 'highest paying majors.' Computer Science popped up near the top. It sounded pretty fulfilling, and since they spent most of their free time playing video games, the idea of learning programming and maybe even making games someday felt exciting.",
      "By the time high school rolled around, their interests shifted a bit. They got really into business, especially starting their own startups. So when college applications came around, they put down Computer Science & Economics (or Business) as their intended major. But after taking some econ classes at Yale, they realized it just wasn't for them. The good news? Yale doesn't make you officially declare your major until the end of sophomore year, so they had plenty of time to figure things out. Eventually, they landed on Computer Science & Mathematics—a combo that felt right and aligned with where they wanted to go in their careers.",
      
      "Thinking Ahead: Career Goals and Practicality", 
      "For this student, choosing a major wasn't just about following what seemed interesting—it was about setting themselves up for the future. Growing up in a low-income household, they knew they needed to find a stable, well-paying career to help support their family. Their target? Quantitative trading—a field that mixes math, coding, and data analysis. CS & Math seemed like the perfect prep for all those technical interviews and assessments that come with breaking into quant trading.",
      "They'd also thought about going into business, maybe consulting or private equity, but drastic amount of hours that come with those jobs was a dealbreaker. Practicality mattered a lot to them. Job security and salary were huge factors. Sure, they wondered sometimes if CS was getting too crowded or if AI might change everything down the line, but at the end of the day, Computer Science still felt like one of the safest bets out there.",

      "A Glimpse Into Their Yale Experience",
      "Yale has what they call distributional requirements—in short, you've got to take classes in a bunch of different areas like language, writing, and humanities before you can graduate. This semester, their schedule looks like this: Math 1150 (Calc II), CPSC 2010 (Intro to CS), CHNS 1320 (Chinese Level 3), and HIST 0722 (What History Teaches).",
      "Most STEM classes are large lectures because they're requirements for the major. They're theory-heavy rather than hands-on, and you get problem sets to work through every week. In their intro CS class, they're learning a programming language called Racket. Next semester, they'll be jumping into Data Structures and Algorithms, Discrete Math, Multivariable Calculus, and Linear Algebra.",

      "Busting Myths About CS",
      "They've heard all kinds of myths about Computer Science. One of the biggest ones is that it's basically impossible to get an internship or a job in tech right now. But from what they've seen, that's not really true. Plenty of people are still landing internships and jobs—you just need good referrals, a solid resume, and you've got to put in serious time prepping for interviews and online assessments.",      
      "Another big misconception? That you need to be a genius to make it in CS. Yes, though some of the material gets tough, they really believe that anyone willing to put in the work can do well. It's not about being the most intelligent person in the lecture hall—it's more about sticking with it and staying curious.",      
     
      "Would They Choose It Again?",
      "One hundred percent. They love building websites and products that actually solve real problems for people. CS opens up so many doors across different industries, and depending on where you end up working, you can actually have a pretty solid work-life balance. For them, it's the perfect mix of creativity, logic, and making stuff that matters.",
      
      "Who Would Love This Major?",
      "Students who like being challenged and enjoy thinking critically and creatively would love CS. It's all about problem-solving and logical thinking—perfect for people who enjoy coding, tinkering with tech, or just figuring out how things work. If you're the type of person who gets excited about puzzles and possibilities, this would be your thing.",      
      
      "Advice for High School Students",
      "Their most significant piece of advice? Don't stress if you haven't got it all figured out yet. Focus on what actually excites you—not just what your parents or teachers or whoever else thinks you should do. It's your life, and you really don't want to spend a considerable chunk of it doing something you can't stand. Let your passion guide you—it's honestly the best compass you'll ever have."
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
          style={{ fontFamily: "'Story Script', serif" }}
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
            const isSubtitle = paragraph.includes("Thinking Ahead: Career Goals and Practicality") || 
                             paragraph.includes("A Glimpse Into Their Yale Experience") || 
                             paragraph.includes("Busting Myths About CS") || 
                             paragraph.includes("Would They Choose It Again?") ||
                             paragraph.includes("Who Would Love This Major?") ||
                             paragraph.includes("Advice for High School Students");
            
            // Check if paragraph starts with a bolded item
            const boldPattern = /^(Grades\/GPA:|Course Rigor:|Standardized Tests:|Class Rank:|Financial Aid:|International Students:)/;
            const hasBoldStart = boldPattern.test(paragraph);
            
            if (isSubtitle) {
              return (
                <h2 key={index} className="text-2xl font-bold text-stone-900 mt-10 mb-4" style={{ fontFamily: "'Story Script', serif" }}>
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
                <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'Story Script', serif" }}>
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
};

export default BlogArticlePage;
