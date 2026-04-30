import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export default function BlogArchive() {
  const posts = [
    {
      title: "Top 5 Tenant Rights Violations in Nairobi",
      excerpt: "From illegal utility disconnection to unannounced inspections, we document the most frequent abuses reported to our community hubs.",
      image: "/images/gavel_market.png",
      category: "COMMUNITY",
      date: "Oct 24, 2024",
      slug: "top-5-violations"
    },
    {
      title: "How to File a Case at the Rent Restriction Tribunal",
      excerpt: "A step-by-step walkthrough of the filing process, required forms, and what to expect during your first hearing at the RRT.",
      image: "/images/pen_document.png",
      category: "LEGAL GUIDES",
      date: "Oct 20, 2024",
      slug: "how-to-file-rrt"
    },
    {
      title: "What a Legal Lease Agreement Must Include in Kenya",
      excerpt: "Don't sign until you see these six clauses. We explain the mandatory legal protections every Kenyan tenant deserves by law.",
      image: "/images/keys_plans.png",
      category: "LEGAL GUIDES",
      date: "Oct 15, 2024",
      slug: "legal-lease-clauses"
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroHeader}>
            <span className={styles.brandTag}>ZAPLOTI SHEHE PRESENTS</span>
            <h1 className={styles.heroTitle}>The Weekly Shauri</h1>
            <p className={styles.heroSubtitle}>
              Providing clarity in Kenya's rental landscape through community wisdom and legal precision.
            </p>
          </div>

          <div className={styles.featuredPost}>
            <div className={styles.featuredImage}>
              <Image src="/images/apartments.png" alt="Featured" width={800} height={500} />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                <span className={styles.categoryBadge}>BREAKING LAW</span>
                <span className={styles.readTime}>8 MIN READ</span>
              </div>
              <h2>The KRA Landlord Tax Bill Explained</h2>
              <p>
                The Kenya Revenue Authority has released new guidelines regarding the Monthly Rental Income (MRI) tax. 
                We break down what this means for your rent stability and your landlord's obligations in the current fiscal year.
              </p>
              <Link href="/blog/kra-tax-bill" className={styles.readLink}>READ THE FULL ANALYSIS →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.shauriBanner}>
        <div className="container">
          <div className={styles.shauriBox}>
            <span className={styles.shauriIcon}>💡</span>
            <div className={styles.shauriText}>
              <h4>Shauri of the Week</h4>
              <p>"A verbal agreement is a lease, but a written one is your shield. Always ensure your deposit terms are clearly stated before moving a single box." — Elder Mutua</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <div key={i} className={styles.postCard}>
                <div className={styles.postImage}>
                  <Image src={post.image} alt={post.title} width={400} height={250} />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.learnMore}>LEARN MORE →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterLeft}>
              <p>Stay Informed. Kenya's rental laws are changing fast.</p>
              <span className={styles.label}>EMAIL SUBSCRIPTION</span>
              <div className={styles.emailForm}>
                <input type="email" placeholder="Enter your email address" />
                <Button variant="primary">SIGN UP</Button>
              </div>
              <p className={styles.smallText}>We'll notify you when new laws affect your tenancy. No spam.</p>
            </div>
            <div className={styles.newsletterRight}>
              <span className={styles.label}>Get Instant Updates</span>
              <h3>Text ZAPLOTI to 22344</h3>
              <p>Standard SMS rates apply.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
