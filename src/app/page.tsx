import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>Free Legal Access Available</span>
              <h1 className={styles.title}>
                Jua Haki Zako. <br />
                <span className={styles.italic}>Know Your Rights</span> as a Tenant in Kenya.
              </h1>
              <p className={styles.subtitle}>
                We help tenants understand their rights, generate legal documents, and find 
                pro-bono support. Don't let the law be a mystery—protect your home.
              </p>
              <div className={styles.heroActions}>
                <Link href="/legal-guides">
                  <Button variant="primary" size="lg">Explore your rights</Button>
                </Link>
                <Link href="/document-generator">
                  <Button variant="outline" size="lg">Draft a legal letter</Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image 
                src="/images/hero_visual.png" 
                alt="Tenant Rights Illustration" 
                width={500} 
                height={500}
                className={styles.floatingImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className={styles.featuredArticle}>
        <div className="container">
          <div className={styles.articleCard}>
            <div className={styles.articleInfo}>
              <div className={styles.articleMeta}>
                <span className={styles.category}>Tax Info Update</span>
                <span className={styles.dot}>•</span>
                <span className={styles.date}>October 2024</span>
              </div>
              <h2 className={styles.articleTitle}>
                The KRA Landlord Tax Bill: <br />
                What It Means for Your Pocket.
              </h2>
              <p className={styles.articleExerpt}>
                Discover the latest changes in rental income tax and how they affect 
                your monthly rent. We break down the law so you know exactly what's fair.
              </p>
              <Link href="/legal-guide/kra-tax-landlord-obligations">
                <Button variant="primary">Read Full Guide</Button>
              </Link>
            </div>
            <div className={styles.articleImage}>
              <Image 
                src="/images/tax_thumbnail.png" 
                alt="KRA Tax Bill" 
                width={600} 
                height={400}
                className={styles.thumbnail}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Grid Section */}
      <section className={styles.helpGrid}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Accessible Help Everywhere</h2>
          <p className={styles.sectionSubtitle}>Choose the way that works best for you to get legal assistance.</p>
          
          <div className={styles.grid}>
            {[
              { icon: "⚖️", title: "Web App", desc: "Browse our guides", link: "/legal-guides" },
              { icon: "📱", title: "SMS", desc: "Text 'HAKI' to 2345", link: "#" },
              { icon: "💬", title: "WhatsApp", desc: "Chat with an assistant", link: "#" },
              { icon: "🏢", title: "RRT Kenya", desc: "Official Tribunal Info", link: "#" },
              { icon: "📞", title: "Hotline", desc: "Call 0800 123 456", link: "#" }
            ].map((item, i) => (
              <Link href={item.link} key={i} className={styles.helpItem}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Situation Analysis Section */}
      <section className={styles.analysis}>
        <div className="container">
          <div className={styles.analysisBox}>
            <h2 className={styles.sectionTitle}>Legal Situation Analysis</h2>
            <p className={styles.sectionSubtitle}>Tell us what's happening, and we'll analyze your legal position.</p>
            
            <div className={styles.inputArea}>
              <textarea 
                placeholder="e.g. My landlord is increasing rent by 20% without notice..." 
                className={styles.textarea}
              />
              <div className={styles.analysisActions}>
                <Button variant="outline">Eviction Risk</Button>
                <Button variant="outline">Rent Increase</Button>
                <Button variant="outline">Repair Issues</Button>
              </div>
            </div>
            
            <div className={styles.alert}>
              <span className={styles.alertIcon}>💡</span>
              <p><strong>Initial rights analysis:</strong> Based on the Rent Restriction Act, your landlord must provide at least 90 days notice for any rent increase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <h2>The Weekly Scroll</h2>
            <p>Legal updates and rights alerts delivered to your inbox.</p>
            <div className={styles.form}>
              <input type="email" placeholder="Your email address" />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Topic Section */}
      <section className={styles.topics}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore by Topic</h2>
          <div className={styles.topicGrid}>
            {[
              { slug: "evictions-notice-periods", title: "Evictions", desc: "Understanding notice periods and your rights during termination.", icon: "🏠" },
              { slug: "rent-increases", title: "Rent Increases", desc: "How to handle unfair hikes and the Rent Restriction Act.", icon: "📈" },
              { slug: "deposit-disputes", title: "Deposit Recovery", desc: "Getting your money back and handling wear and tear disputes.", icon: "💰" }
            ].map((topic, i) => (
              <Link href={`/legal-guide/${topic.slug}`} key={i} className={styles.topicCard}>
                <span className={styles.topicIcon}>{topic.icon}</span>
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
                <span className={styles.learnMore}>LEARN MORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Document Generator Preview */}
      <section className={styles.docPreview}>
        <div className="container">
          <div className={styles.docPreviewBox}>
            <div className={styles.docPreviewText}>
              <h2 className={styles.sectionTitle}>Document Generator</h2>
              <p>Draft professional legal letters for housing, taxes, and rights in Kenya in minutes.</p>
              <Button variant="primary">See All Documents</Button>
            </div>
            <div className={styles.docPreviewCards}>
              {[
                { title: "Demand Letter", type: "Security Deposit" },
                { title: "Legal Challenge", type: "Unfair Eviction" },
                { title: "Rent Objection", type: "Rent Increase" }
              ].map((doc, i) => (
                <div key={i} className={styles.previewCard}>
                   <span>📄</span>
                   <h4>{doc.title}</h4>
                   <p>{doc.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Grid */}
      <section className={styles.secondaryGrid}>
        <div className="container">
          <div className={styles.sGrid}>
            <div className={styles.sItem}>
              <h3>📅 Our Next Session</h3>
              <div className={styles.sessionCard}>
                <p className={styles.sessionDate}>Saturday, Nov 2nd</p>
                <h4>Legal Rights 101: Rent Hikes</h4>
                <p>Nairobi West Community Center</p>
                <button className={styles.textLink}>View Details →</button>
              </div>
            </div>
            <div className={styles.sItem}>
              <h3>⚖️ Legal Directory</h3>
              <div className={styles.directoryCard}>
                <div className={styles.dirItem}>
                  <div className={styles.dirAvatar}>👤</div>
                  <div>
                    <h5>Kamau & Munene</h5>
                    <p>Housing Law Specialists</p>
                  </div>
                </div>
                <div className={styles.dirItem}>
                  <div className={styles.dirAvatar}>👤</div>
                  <div>
                    <h5>Faith Nyambura</h5>
                    <p>Pro-Bono Advocate</p>
                  </div>
                </div>
                <button className={styles.textLink}>View Full Directory →</button>
              </div>
            </div>
            <div className={styles.sItem}>
              <h3>📢 Tenant Stories</h3>
              <div className={styles.storyCard}>
                <p>"When my landlord tried to evict me without notice, ZaPloti gave me the tools to fight back. I'm still in my home today."</p>
                <span className={styles.storyAuthor}>— Mary W., Nairobi</span>
                <button className={styles.textLink}>Read More Stories →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section (The Weekly Shart) */}
      <section className={styles.blog}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Weekly Shart</h2>
          <div className={styles.blogGrid}>
            <div className={styles.blogMain}>
              <div className={styles.blogImage}>
                <Image src="/images/apartments.png" alt="Blog" width={600} height={400} />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogTag}>LEGAL TRENDS</span>
                <h3>Rising Utility Bills: The Legality of "Service Charges"</h3>
                <p>Are you paying for your landlord's lack of maintenance? We investigate the hidden costs of renting in urban areas.</p>
                <button className={styles.textLink}>Read More →</button>
              </div>
            </div>
            <div className={styles.blogSide}>
              {[
                "Managing Repairs: A Guide for Busy Tenants",
                "Subletting 101: How to Do It Without Getting Evicted",
                "Landlord's Right to Entry: What You Need to Know"
              ].map((title, i) => (
                <div key={i} className={styles.sideBlogItem}>
                  <h4>{title}</h4>
                  <p>Oct 28, 2024 • 5 min read</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
