import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>ZaPloti Shehe</h2>
            <p className={styles.mission}>
              Empowering the community with legal clarity and digital tools for better housing stability.
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Resources</h3>
            <ul>
              <li><Link href="/rights-explorer">Tenant Rights</Link></li>
              <li><Link href="/landlord-obligations">Landlord Obligations</Link></li>
              <li><Link href="/legal-aid">Legal Aid</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksColumn}>
            <h3>Contact</h3>
            <p>Nairobi, Kenya</p>
            <div className={styles.socials}>
              {/* Placeholder for icons */}
              <span>𝕏</span>
              <span>💬</span>
              <span>✉️</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2024 ZaPloti Shehe. Rooted in community, guided by law.</p>
        </div>
      </div>
    </footer>
  );
}
