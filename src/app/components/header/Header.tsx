"use client";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/Hadasim_logo_-_header.webp" alt="Logo" className={styles.logo} />
            </div>
            <nav className={styles.nav}>
                <Link href="/registration" className={styles.link}>
                    Registration
                </Link>
            </nav>
            <div className={styles.profile}>Profile</div>
        </header>
    );
}

export default Header;