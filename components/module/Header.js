"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/header.module.css";
import Userbox from "@/components/module/Userbox";
import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import UserModal from "./user/UserModal";
import { useAuth } from "@/app/authcontext/AuthContext";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [showmodal, setShowModal] = useState(false);
  const [usermodal, setUsermodal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { user } = useAuth();

  const toggleUserModal = () => {
    setUsermodal((prev) => !prev);
  };

  return (
    <>
      <header className={styles.container}>
        <div
          className={styles.hamburger}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <HiMenu />
        </div>

        <div className={styles.login}>
          <Userbox
            openModal={() => setShowModal(true)}
            toggleUserModal={toggleUserModal}
          />
        </div>

        <nav className={styles.nav}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/tour">خدمات گردشگری</Link>
          <Link href="/About-us">درباره ما</Link>
          <Link href="/Contact-us">تماس با ما</Link>
        </nav>
        <div className={styles.logo}>
          <Image
            src="/Torino.png"
            width={146}
            height={44}
            alt="logo"
            priority
          />
        </div>
      </header>

      {mobileMenu && (
        <div className={styles.mobileMenu}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/tour">خدمات گردشگری</Link>
          <Link href="/About-us">درباره ما</Link>
          <Link href="/Contact-us">تماس با ما</Link>
        </div>
      )}

      {showmodal && <AuthModal onClose={() => setShowModal(false)} />}

      {usermodal && user && <UserModal setUsermodal={setUsermodal} />}
    </>
  );
};

export default Header;
