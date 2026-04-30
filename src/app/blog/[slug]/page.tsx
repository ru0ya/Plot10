import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Image from "next/image";
import styles from "../blog-detail.module.css";

export default function BlogPost() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className="container">
        <div className={styles.layout}>
          <article className={styles.article}>
            <div className={styles.meta}>
              <span>📅 UPDATED OCTOBER 2024</span>
            </div>
            
            <h1 className={styles.title}>
              The KRA Landlord Tax Bill Explained: A Complete Guide for Tenants and Landlords
            </h1>
            
            <p className={styles.intro}>
              Understanding the recent legislative shifts in Kenya's rental market. From the Monthly Rental Income (MRI) updates 
              to compliance requirements for property owners.
            </p>

            <div className={styles.author}>
              <div className={styles.authorAvatar}>👤</div>
              <div>
                <h4>Advocate Silas Ombati</h4>
                <p>Senior Housing Consultant</p>
              </div>
            </div>

            <div className={styles.featuredImage}>
              <Image 
                src="/images/apartments.png" 
                alt="Apartment Building" 
                width={800} 
                height={500}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h2>What the Bill Actually Says</h2>
              <p>
                The Finance Act has introduced several critical changes to the Income Tax Act regarding rental income. 
                The most prominent is the stabilization of the **Monthly Rental Income (MRI)** tax rate.
              </p>
              
              <blockquote>
                "Tax compliance is not just a landlord's duty; it is the tenant's security. When the state recognizes a rental transaction, the tenant's legal footprint is formally acknowledged."
              </blockquote>

              <h3>Landlord Obligations: The Checklist</h3>
              <ul className={styles.checklist}>
                <li>
                  <strong>PIN Registration:</strong> Every landlord must have a KRA PIN and register for the rental income tax obligation on the iTax portal.
                </li>
                <li>
                  <strong>Monthly Filing:</strong> Returns must be filed by the 20th of the following month, regardless of whether rent was collected.
                </li>
                <li>
                  <strong>Accurate Record Keeping:</strong> Landlords are legally required to maintain rent schedules, bank statements, and tenancy agreements for at least five years.
                </li>
              </ul>

              <div className={styles.wisdomBanner}>
                <span className={styles.wisdomIcon}>👴</span>
                <div>
                  <h4>ELDER'S WISDOM: TENANT PROTECTION</h4>
                  <p>
                    Tenants are often worried that tax compliance will lead to immediate rent hikes. However, the law protects you from 
                    arbitrary increases. If your landlord uses "tax" as an excuse for a sudden 30% hike, seek legal advice immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.share}>
              <Button variant="outline">Share on WhatsApp</Button>
              <Button variant="outline">Copy Link</Button>
            </div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>Have a Question?</h3>
              <p>Our legal elders are standing by to help you navigate the complexities of tenant law via SMS or WhatsApp.</p>
              <Button variant="primary">Start Consultation</Button>
            </div>

            <div className={styles.sidebarSection}>
              <h3>RELATED RIGHTS TOPICS</h3>
              <ul className={styles.sidebarLinks}>
                <li>Handling Unfair Eviction →</li>
                <li>Security Deposit Recovery →</li>
                <li>Maintenance Responsibilities →</li>
                <li>Subletting Legally →</li>
              </ul>
            </div>

            <div className={styles.sidebarSection}>
              <h3>LATEST LEGAL UPDATES</h3>
              <div className={styles.updateItem}>
                <span>LEGAL ALERT</span>
                <h4>New Ruling on Illegal Power Disconnections</h4>
              </div>
              <div className={styles.updateItem}>
                <span>COMMUNITY HUB</span>
                <h4>The Impact of Section 24 on Old Apartments</h4>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
