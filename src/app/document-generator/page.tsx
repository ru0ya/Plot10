"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function DocumentGenerator() {
  const [step, setStep] = useState(1);

  const docs = [
    { title: "Demand Letter", desc: "Request return of your rental deposit after moving out.", icon: "📄" },
    { title: "Eviction Challenge", desc: "Formal notice to contest an unfair or illegal eviction.", icon: "🏠" },
    { title: "Rent Objection", desc: "Object to rent hikes that don't follow proper legal procedure.", icon: "📈" },
    { title: "KRA Tax Dispute", desc: "Formal correspondence for challenging tax assessments.", icon: "📑" }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.stepItem + (step === 1 ? ` ${styles.active}` : "")}>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h4>Select Document</h4>
                  <p>Choose your legal letter</p>
                </div>
              </div>
              <div className={styles.stepItem + (step === 2 ? ` ${styles.active}` : "")}>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h4>Fill Details</h4>
                  <p>Personal & case info</p>
                </div>
              </div>
              <div className={styles.stepItem + (step === 3 ? ` ${styles.active}` : "")}>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h4>Preview & Send</h4>
                  <p>PDF, SMS or WhatsApp</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.content}>
              <div className={styles.header}>
                <span className={styles.badge}>FREE LEGAL ACCESS</span>
                <h1>Generate a legal letter in minutes</h1>
                <p>
                  Don't let legal jargon hold you back. Use our automated builder to create professional documents 
                  for housing, taxes, and rights in Kenya. Simple, fast, and community-rooted.
                </p>
              </div>

              <div className={styles.docGrid}>
                {docs.map((doc, i) => (
                  <div key={i} className={styles.docCard}>
                    <div className={styles.docVisual}>
                      <span className={styles.docIcon}>{doc.icon}</span>
                    </div>
                    <h3>{doc.title}</h3>
                    <p>{doc.desc}</p>
                    <Button variant="outline" className={styles.generateBtn} onClick={() => setStep(2)}>Generate</Button>
                  </div>
                ))}
              </div>

              <div className={styles.upgradeBanner}>
                <div className={styles.upgradeInfo}>
                  <span className={styles.lawyerIcon}>⚖️</span>
                  <div>
                    <h4>Need a lawyer's seal?</h4>
                    <p>Upgrade to Premium for KES 500 to have our legal partners review and sign your letter.</p>
                  </div>
                </div>
                <Button variant="primary" className={styles.upgradeBtn}>Upgrade with M-Pesa</Button>
              </div>
            </div>
          </div>

          <div className={styles.bottomSection}>
             <div className={styles.proTip}>
                <span className={styles.tipIcon}>💡</span>
                <div>
                  <h4>Sada's Tip</h4>
                  <p>"Justice is not only for the wealthy, but for those who know their path. Always keep a physical copy of every letter you send, and if you can, send it via registered mail to ensure a paper trail exists."</p>
                </div>
             </div>

             <div className={styles.exportSection}>
                <h3>How would you like to receive your document?</h3>
                <div className={styles.exportGrid}>
                  <div className={styles.exportItem}>
                    <span className={styles.exportIcon}>📥</span>
                    <p>Download PDF</p>
                  </div>
                  <div className={styles.exportItem}>
                    <span className={styles.exportIcon}>💬</span>
                    <p>WhatsApp</p>
                  </div>
                  <div className={styles.exportItem}>
                    <span className={styles.exportIcon}>📱</span>
                    <p>SMS Link</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
