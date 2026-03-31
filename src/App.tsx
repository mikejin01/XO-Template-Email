import React, { useState } from 'react';
import { Monitor, Smartphone, Mail, Tag, Megaphone, FileText, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TemplateType = 'promo' | 'announcement' | 'newsletter';

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>('promo');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans text-neutral-900">
      {/* Top Navbar */}
      <header className="bg-white border-b border-neutral-200 h-16 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Mail size={20} />
          </div>
          <h1 className="font-semibold text-lg tracking-tight">X.O.Email Templates</h1>
        </div>
        
        <div className="flex items-center bg-neutral-100 p-1 rounded-lg border border-neutral-200">
          <button
            onClick={() => setViewMode('desktop')}
            className={`p-1.5 rounded-md flex items-center gap-2 transition-colors ${viewMode === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            title="Desktop View"
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`p-1.5 rounded-md flex items-center gap-2 transition-colors ${viewMode === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            title="Mobile View"
          >
            <Smartphone size={18} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-neutral-200 flex flex-col overflow-y-auto shrink-0">
          <div className="p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">Templates</h2>
            <div className="space-y-2">
              <TemplateBtn 
                active={activeTemplate === 'promo'} 
                onClick={() => setActiveTemplate('promo')}
                icon={Tag}
                title="Promotional Offer"
                desc="Sales, discounts, and product features"
              />
              <TemplateBtn 
                active={activeTemplate === 'announcement'} 
                onClick={() => setActiveTemplate('announcement')}
                icon={Megaphone}
                title="Announcement"
                desc="New features, events, or company news"
              />
              <TemplateBtn 
                active={activeTemplate === 'newsletter'} 
                onClick={() => setActiveTemplate('newsletter')}
                icon={FileText}
                title="Newsletter"
                desc="Content digests and weekly updates"
              />
            </div>
          </div>

          <div className="p-6 border-t border-neutral-100 bg-neutral-50 flex-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
              <Info size={14} /> Subject Line Ideas
            </h2>
            <div className="space-y-3">
              {activeTemplate === 'promo' && (
                <>
                  <SubjectLine text="🔥 BLACK FRIDAY IS HERE. 30% Off." />
                  <SubjectLine text="Last chance: Your exclusive offer expires tonight" />
                  <SubjectLine text="Unlock your VIP discount inside 🎁" />
                </>
              )}
              {activeTemplate === 'announcement' && (
                <>
                  <SubjectLine text="Introducing our biggest update yet 🚀" />
                  <SubjectLine text="Big news! The new dashboard is finally here" />
                  <SubjectLine text="You asked, we listened. Meet [Feature]" />
                </>
              )}
              {activeTemplate === 'newsletter' && (
                <>
                  <SubjectLine text="Your weekly roundup: Design trends & tips" />
                  <SubjectLine text="3 ways to improve your workflow today" />
                  <SubjectLine text="The Weekly Digest: Issue #42" />
                </>
              )}
            </div>
          </div>
        </aside>

        {/* Preview Canvas */}
        <main className="flex-1 overflow-y-auto p-8 flex justify-center bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTemplate + viewMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`bg-white shadow-xl border border-neutral-200 overflow-hidden transition-all duration-300 ${
                viewMode === 'mobile' ? 'w-[375px] rounded-[2rem] border-8 border-neutral-800 my-4' : 'w-full max-w-[600px] rounded-none my-0'
              }`}
            >
              {activeTemplate === 'promo' && <PromoEmail />}
              {activeTemplate === 'announcement' && <AnnouncementEmail />}
              {activeTemplate === 'newsletter' && <NewsletterEmail />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// --- Email Template Components ---

function PromoEmail() {
  return (
    <div className="font-sans text-neutral-800 bg-white w-full">
      {/* Preheader */}
      <div className="text-[10px] text-center text-neutral-400 py-2 bg-neutral-50">
        Can't see this email? <a href="#" className="underline text-teal-600">{"{% web_view %}"}</a>
      </div>
      
      {/* Header / Logo */}
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-neutral-800 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm mb-2 flex items-center justify-center">
          <span className="text-white font-serif font-bold text-xl">L</span>
        </div>
        <div className="text-[10px] font-bold tracking-widest uppercase">Logo Place</div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#E55B5B] py-12 px-6 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-light tracking-wider uppercase m-0">
          Black Friday Is Here
        </h1>
      </div>

      {/* Feature Section */}
      <div className="flex flex-col md:flex-row items-center p-8 gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-neutral-900 mb-3">FREE Wine Holder</h2>
          <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
            Use this space to offer deals and discounts that'll make your customers do a double take.
          </p>
          <button className="bg-[#E55B5B] text-white font-bold py-3 px-6 rounded-sm hover:bg-[#d14d4d] transition-colors text-sm">
            Shop All Wines
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80" 
            alt="Wine holder" 
            className="w-full max-w-[200px] object-contain drop-shadow-xl rounded-lg"
          />
        </div>
      </div>

      {/* Divider Banner */}
      <div className="bg-black text-white text-center py-3 text-xs tracking-wide">
        FREE SHIPPING on ALL orders - Don't miss out!
      </div>

      {/* Product Grid */}
      <div className="flex flex-col md:flex-row p-8 gap-8">
        <div className="flex-1 flex flex-col items-center text-center">
          <img 
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80" 
            alt="Wine 1" 
            className="h-64 object-cover drop-shadow-lg mb-4 rounded-sm"
          />
          <h3 className="text-xl font-bold text-neutral-900 mb-2">2001 Wine</h3>
          <div className="text-lg">
            <span className="line-through text-neutral-500 mr-2">$50</span>
            <span className="text-[#E55B5B] font-bold">$35</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <img 
            src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&w=300&q=80" 
            alt="Wine 2" 
            className="h-64 object-cover drop-shadow-lg mb-4 rounded-sm"
          />
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Champagne</h3>
          <div className="text-lg">
            <span className="line-through text-neutral-500 mr-2">$30</span>
            <span className="text-[#E55B5B] font-bold">$20</span>
          </div>
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="pb-12 px-8 text-center">
        <button className="bg-[#E55B5B] text-white font-bold py-4 px-8 rounded-sm hover:bg-[#d14d4d] transition-colors w-full md:w-auto">
          Browse All BLACK FRIDAY Deals
        </button>
      </div>

      {/* Footer */}
      <div className="bg-neutral-50 py-10 px-8 text-center border-t border-neutral-200">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">Need help?</h3>
        <p className="text-sm text-neutral-600 mb-6">
          Give us a call at 888.888.8888<br />
          or<br />
          email us at support@companyname.com
        </p>
        
        <div className="text-[10px] text-neutral-400 space-y-1">
          <p>No longer want to receive these emails? <a href="#" className="underline text-teal-600 border-teal-600 border-dashed border-b">{"{% unsubscribe %}"}</a></p>
          <p>
            <span className="border-teal-600 border-dashed border-b">{"{% organization.name %}"}</span> | <span className="border-teal-600 border-dashed border-b">{"{% organization.full_address %}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function AnnouncementEmail() {
  return (
    <div className="font-sans text-neutral-800 bg-white w-full">
      {/* Preheader */}
      <div className="text-[10px] text-center text-neutral-400 py-2 bg-neutral-50">
        Big news inside! <a href="#" className="underline text-blue-600">View in browser</a>
      </div>
      
      {/* Header */}
      <div className="py-6 px-8 flex items-center justify-between border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-bold tracking-tight text-lg">AcmeCorp</span>
        </div>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80" 
        alt="New Dashboard" 
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          New Feature
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4 leading-tight">
          Meet the all-new Analytics Dashboard.
        </h1>
        <p className="text-base text-neutral-600 mb-8 leading-relaxed">
          We're thrilled to announce our completely redesigned analytics experience. We've listened to your feedback and built a faster, more intuitive way to understand your data.
        </p>

        {/* Features List */}
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">Real-time tracking</h3>
              <p className="text-sm text-neutral-600">Watch your metrics update instantly as events happen across your application.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">Custom reports</h3>
              <p className="text-sm text-neutral-600">Build and save custom views that matter most to your specific business goals.</p>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
            Explore the Dashboard
          </button>
          <p className="mt-4 text-xs text-neutral-500">
            Or <a href="#" className="underline text-blue-600">read the release notes</a> to learn more.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-900 text-neutral-400 py-8 px-8 text-center text-xs">
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>
        <p className="mb-2">© 2026 AcmeCorp Inc. All rights reserved.</p>
        <p className="mb-4">123 Innovation Drive, Tech City, TC 90210</p>
        <p>
          You received this email because you are subscribed to AcmeCorp Updates.<br />
          <a href="#" className="underline hover:text-white transition-colors">Update preferences</a> or <a href="#" className="underline hover:text-white transition-colors">Unsubscribe</a>
        </p>
      </div>
    </div>
  );
}

function NewsletterEmail() {
  return (
    <div className="font-serif text-neutral-800 bg-[#F9F9F7] w-full">
      {/* Preheader */}
      <div className="text-[10px] text-center text-neutral-400 py-2 font-sans">
        Design trends, typography tips, and more. <a href="#" className="underline">View online</a>
      </div>
      
      {/* Header */}
      <div className="py-10 px-8 text-center border-b border-neutral-200">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-2">The Weekly Serif</h1>
        <p className="text-sm text-neutral-500 font-sans uppercase tracking-widest">Issue #42 • Oct 24, 2026</p>
      </div>

      <div className="p-8 md:p-10 bg-white">
        {/* Editor's Note */}
        <div className="mb-10 text-lg leading-relaxed text-neutral-700">
          <p className="mb-4">Good morning,</p>
          <p>
            This week we're exploring the resurgence of brutalist design in modern web applications, and why sometimes breaking the rules of traditional UX creates the most memorable experiences.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80" 
            alt="Featured" 
            className="w-full h-64 object-cover rounded-sm mb-6"
          />
          <div className="font-sans text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Featured Story</div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3 leading-tight">
            Why Brutalism is Back (And How to Use It)
          </h2>
          <p className="text-neutral-600 mb-4 font-sans text-sm leading-relaxed">
            Raw, unpolished, and intentionally harsh. Brutalist web design is making a massive comeback among creative agencies and consumer brands looking to stand out in a sea of clean, minimal interfaces.
          </p>
          <a href="#" className="inline-block border border-neutral-900 text-neutral-900 font-sans font-medium text-sm py-2 px-6 hover:bg-neutral-900 hover:text-white transition-colors">
            Read Full Article
          </a>
        </div>

        <hr className="border-neutral-200 mb-10" />

        {/* Secondary Articles */}
        <div className="space-y-8">
          <h3 className="font-sans text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">More Reading</h3>
          
          <div className="flex gap-6 items-start">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=150&q=80" 
              alt="Thumbnail" 
              className="w-24 h-24 object-cover rounded-sm shrink-0"
            />
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">Mastering Variable Fonts in CSS</h4>
              <p className="text-sm text-neutral-600 font-sans mb-2 line-clamp-2">Everything you need to know about implementing variable fonts for better performance and creative freedom.</p>
              <a href="#" className="text-orange-600 font-sans text-xs font-bold uppercase tracking-wider hover:underline">Read →</a>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=150&q=80" 
              alt="Thumbnail" 
              className="w-24 h-24 object-cover rounded-sm shrink-0"
            />
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">Color Theory for Dark Mode</h4>
              <p className="text-sm text-neutral-600 font-sans mb-2 line-clamp-2">Stop just inverting your colors. Learn how to build a semantic color system that works beautifully in both light and dark themes.</p>
              <a href="#" className="text-orange-600 font-sans text-xs font-bold uppercase tracking-wider hover:underline">Read →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 px-8 text-center font-sans text-xs text-neutral-500">
        <p className="mb-4 italic">"Design is intelligence made visible." — Alina Wheeler</p>
        <p className="mb-2">The Weekly Serif is published by DesignCo.</p>
        <p>
          <a href="#" className="underline">Unsubscribe</a> • <a href="#" className="underline">View in Browser</a>
        </p>
      </div>
    </div>
  );
}

// --- Helper Components ---

function TemplateBtn({ active, onClick, icon: Icon, title, desc }: { active: boolean, onClick: () => void, icon: any, title: string, desc: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-blue-50 border border-blue-200 shadow-sm' 
          : 'hover:bg-neutral-50 border border-transparent'
      }`}
    >
      <div className={`p-2 rounded-lg shrink-0 ${active ? 'bg-blue-600 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
        <Icon size={18} />
      </div>
      <div>
        <h3 className={`font-medium text-sm ${active ? 'text-blue-900' : 'text-neutral-700'}`}>{title}</h3>
        <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{desc}</p>
      </div>
    </button>
  );
}

function SubjectLine({ text }: { text: string }) {
  return (
    <div className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm text-sm text-neutral-700 flex items-start gap-2 group cursor-pointer hover:border-blue-300 transition-colors">
      <span className="text-neutral-400 group-hover:text-blue-500 mt-0.5 shrink-0">
        <Mail size={14} />
      </span>
      <span className="leading-snug">{text}</span>
    </div>
  );
}
