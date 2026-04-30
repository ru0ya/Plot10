import Link from "next/link";

export function Breadcrumb({ title }: { title: string }) {
  return (
    <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-primary transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/legal-guides" className="hover:text-primary transition-colors">Legal Guide</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900 font-medium">{title}</span>
    </nav>
  );
}

export function TopicHero({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">{title}</h1>
      <p className="text-xl italic text-secondary-600 border-l-2 border-secondary-200 pl-4">
        {summary}
      </p>
    </div>
  );
}

export function WhatTheLawSays({ references }: { references: { act: string; section: string }[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">What the Law Says</h3>
      <div className="border-l-4 border-primary bg-amber-50/50 px-6 py-6 rounded-r-2xl">
        <p className="text-gray-700 mb-4 font-medium italic">
          This topic is governed by the following legal provisions:
        </p>
        <div className="flex flex-wrap gap-2">
          {references.map((ref, i) => (
            <div key={i} className="bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/10">
              {ref.act} · {ref.section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhatThisMeansForYou({ english, swahili }: { english: string; swahili: string }) {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">What this means for you</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase mb-2 block">English</span>
          <p className="text-gray-800 leading-relaxed">{english}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase mb-2 block">Kiswahili</span>
          <p className="text-gray-800 leading-relaxed font-medium">{swahili}</p>
        </div>
      </div>
    </div>
  );
}

export function YourRights({ rights }: { rights: string[] }) {
  return (
    <div className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Your Rights</h3>
      <ul className="space-y-4">
        {rights.map((right, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold">
              {i + 1}
            </span>
            <span className="text-gray-800">{right}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhatToDo({ steps }: { steps: string[] }) {
  return (
    <div className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Step-by-Step Action Plan</h3>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="relative pl-8 pb-6 last:pb-0 border-l-2 border-dashed border-gray-200 last:border-0">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
            <p className="text-gray-800 font-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RedFlags({ redFlags }: { redFlags: string[] }) {
  return (
    <div className="mb-12 bg-red-50/50 p-8 rounded-2xl border border-red-100">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-800/60 mb-6">Red Flags to Watch For</h3>
      <ul className="space-y-3">
        {redFlags.map((flag, i) => (
          <li key={i} className="flex items-start gap-3 text-red-700">
            <span className="text-lg">⚠️</span>
            <span className="font-medium">{flag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AlertBox({ text }: { text: string }) {
  return (
    <div className="mb-12 bg-amber-50 border border-amber-300 rounded-2xl px-6 py-6 text-amber-900 font-semibold flex items-start gap-4">
      <span className="text-2xl">🚨</span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

export function CTABar({ docType, docLabel }: { docType: string; docLabel: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      <Link 
        href={`/documents?type=${docType}`}
        className="flex-1 bg-primary text-white text-center py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
      >
        Draft: {docLabel}
      </Link>
      <Link 
        href="/lawyers"
        className="flex-1 bg-secondary text-white text-center py-4 rounded-xl font-bold hover:bg-secondary-dark transition-all shadow-lg shadow-secondary/20"
      >
        Talk to a Legal Aid Lawyer
      </Link>
    </div>
  );
}

export function RelatedTopics({ topics }: { topics: any[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Related Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topics.map((topic, i) => (
          <Link 
            key={i} 
            href={`/legal-guide/${topic.slug}`}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-primary transition-all group"
          >
            <h4 className="font-bold text-gray-900 group-hover:text-primary mb-2">{topic.title}</h4>
            <p className="text-xs text-gray-500 line-clamp-2">{topic.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 md:hidden">
      <Link 
        href="/#situation-analyser"
        className="block w-full bg-primary text-white text-center py-3 rounded-lg font-bold shadow-lg"
      >
        Describe Your Situation
      </Link>
    </div>
  );
}
