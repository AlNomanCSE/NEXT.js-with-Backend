import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MERN Project</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/createinfo">Create</Link>
        <Link href="/updateinfo">Update</Link>
      </nav>
    </header>
  );
};

export default Header;
