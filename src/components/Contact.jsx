import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "maityshubham1510@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Open to Opportunities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Let's start a conversation.
          </h2>
          <p className="text-neutral-400 max-w-lg text-lg">
            Interested in collaborating or have a question?
            My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* 1. Email Card (Interactive) */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors duration-300 md:col-span-2">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-neutral-800 rounded-lg text-white text-2xl">
                <SiGmail />
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-green-500" /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy Email
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-neutral-500 text-sm font-mono block mb-1">Drop me a line at</span>
              <a
                href={`mailto:${email}`}
                className="text-2xl md:text-4xl font-bold text-white hover:text-blue-400 transition-colors break-all"
              >
                {email}
              </a>
            </div>
          </div>

          {/* 2. LinkedIn Card */}
          <a
            href="https://linkedin.com/in/maityshub"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-12">
              <FaLinkedin className="text-3xl text-neutral-400 group-hover:text-[#0077b5] transition-colors" />
              <span className="text-neutral-400 group-hover:text-[#0077b5] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-sm text-neutral-500">Professional updates & career</p>
            </div>
          </a>

          {/* 3. GitHub Card */}
          <a
            href="https://github.com/shub15"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:bg-white/5 hover:border-white/50 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-12">
              <FaGithub className="text-3xl text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-neutral-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">GitHub</h3>
              <p className="text-sm text-neutral-500">Code repositories & experiments</p>
            </div>
          </a>

          {/* 4. Instagram Card (Optional - keep or remove) */}
          {/* If you want a 3-column grid for socials, adjust grid-cols above */}
          <a
            href="https://instagram.com/maityshub"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex items-center justify-between hover:bg-pink-900/10 hover:border-pink-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl text-neutral-400 group-hover:text-pink-500 transition-colors" />
              <span className="text-white font-medium">Instagram</span>
            </div>
            <span className="text-sm text-neutral-500 group-hover:text-pink-500 transition-colors">Personal & Life ↗</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;