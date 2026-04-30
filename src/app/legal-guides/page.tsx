import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function RightsExplorer() {
  const topics = [
    { slug: "evictions-notice-periods", icon: "🏠", title: "Evictions & Notice Periods", desc: "Minimum notice requirements and legal procedures for terminating residential leases." },
    { slug: "rent-increases", icon: "📈", title: "Rent Increases", desc: "Legal limits on when and how much a landlord can increase your monthly rent." },
    { slug: "deposit-disputes", icon: "💰", title: "Deposit Disputes", desc: "Your right to a full refund and how to handle unfair deductions for wear and tear." },
    { slug: "maintenance-repairs", icon: "🛠️", title: "Maintenance & Repairs", desc: "Landlord's obligation to keep properties habitable and how to request urgent repairs." },
    { slug: "illegal-lockouts", icon: "🔒", title: "Illegal Lockouts", desc: "Emergency steps to take if you are illegally barred from your home without a court order." },
    { slug: "lease-agreements", icon: "📄", title: "Lease Agreements", desc: "Key clauses every tenant should look for before signing a tenancy contract in Kenya." },
    { slug: "tribunal-court-process", icon: "🏛️", title: "Tribunal & Court Process", desc: "Navigating the Rent Restriction Tribunal and filing formal disputes correctly." },
    { slug: "squatter-informal-rights", icon: "🏘️", title: "Squatter & Informal Rights", desc: "Constitutional housing rights even without a formal lease or title deed." },
    { slug: "kra-tax-landlord-obligations", icon: "📑", title: "KRA Tax & Obligations", desc: "Understanding landlord tax compliance and your role in the rent income tax system." },
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Legal Guides</h1>
          <p className={styles.subtitle}>
            Know your legal standing as a tenant in Kenya. Our guide translates the Law of Property Act 
            and Rent Restriction Act into plain language for your protection.
          </p>
          
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input type="text" placeholder="Search rights, laws, or specific issues..." />
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {topics.map((topic, i) => (
              <Link key={i} href={`/legal-guide/${topic.slug}`} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{topic.icon}</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
                <span className={styles.learnMore}>LEARN MORE →</span>
              </Link>
            ))}
          </div>
          
          <div className={styles.wisdomBanner}>
            <span className={styles.wisdomIcon}>💡</span>
            <div className={styles.wisdomText}>
              <h3>Wise Counsel for Today</h3>
              <p>"He who seeks justice must come with clean hands. Always ensure your rent receipts are documented and your lease is signed before moving in. A paper trail is your strongest defense in any tribunal."</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guidance}>
        <div className="container">
          <div className={styles.guidanceCard}>
            <div className={styles.guidanceImage}>
              {/* This would be an image of a gavel/books */}
              <div className={styles.placeholderImage}>⚖️</div>
            </div>
            <div className={styles.guidanceContent}>
              <span className={styles.guidanceLabel}>COMMUNITY GUIDANCE</span>
              <h2>Navigating the Rent Restriction Tribunal</h2>
              <p>
                Most disputes in Kenya are resolved through the Rent Restriction Tribunal (RRT). 
                Understanding the filing process—from Form 1 to the final hearing—can save you months of uncertainty and legal fees.
              </p>
              <Button variant="outline">Download Filing Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
