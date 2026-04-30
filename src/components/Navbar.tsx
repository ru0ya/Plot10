import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          ZaPloti Shehe
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/legal-guides">Haki Zako</Link>
          <Link href="/document-generator">Document Generator</Link>
          <Link href="/legal-guides">Legal Guides</Link>
          <Link href="/blog">Blog</Link>
        </div>
        
        <div className={styles.actions}>
          <div className={styles.languageToggle}>
            <span className={styles.active}>EN</span>
            <span className={styles.separator}>/</span>
            <span>SW</span>
          </div>
          <button className={styles.ctaButton}>Ask via SMS</button>
        </div>
      </div>
    </nav>
  );
}
