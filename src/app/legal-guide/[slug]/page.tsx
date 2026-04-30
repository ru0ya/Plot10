import { notFound } from "next/navigation";
import { getAllTopicSlugs, getTopicBySlug, legalTopics } from "@/content/legal-guide";
import LegalGuideDetailLayout from "@/components/legal-guide/LegalGuideDetailLayout";

export async function generateStaticParams() {
  const slugs = getAllTopicSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function LegalGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  // Get related topic objects
  const relatedTopics = topic.relatedSlugs
    .map(s => legalTopics[s])
    .filter(Boolean)
    .slice(0, 3);

  return <LegalGuideDetailLayout topic={topic} relatedTopics={relatedTopics} />;
}
