import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>MERN Project</p>
      </div>
      <nav className={styles.navigation}>
        <Link href="/">Create</Link>
        <Link href="/allpost">Users</Link>
        
      </nav>
    </header>
  );
};

export default Header;
