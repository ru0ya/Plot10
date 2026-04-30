import { LegalTopic } from "@/types/legalTopic";
import { 
  Breadcrumb, 
  TopicHero, 
  WhatTheLawSays, 
  WhatThisMeansForYou, 
  YourRights, 
  WhatToDo, 
  RedFlags, 
  AlertBox, 
  CTABar, 
  RelatedTopics, 
  MobileStickyBar 
} from "./sections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalGuideDetailLayout({ topic, relatedTopics }: { topic: LegalTopic, relatedTopics: LegalTopic[] }) {
  return (
    <div className="min-h-screen bg-[#FCF9F4]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-12 pb-24 max-w-4xl">
        <Breadcrumb title={topic.title} />
        
        <article className="mt-8">
          <TopicHero title={topic.title} summary={topic.summary} />
          
          <WhatTheLawSays references={topic.actReferences} />
          
          <WhatThisMeansForYou 
            english={topic.whatThisMeans.english} 
            swahili={topic.whatThisMeans.swahili} 
          />
          
          <YourRights rights={topic.rights} />
          
          <WhatToDo steps={topic.steps} />
          
          <RedFlags redFlags={topic.redFlags} />
          
          {topic.alert && <AlertBox text={topic.alert} />}
          
          <CTABar docType={topic.documentType} docLabel={topic.documentLabel} />
          
          <RelatedTopics topics={relatedTopics} />
        </article>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
