"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/header.module.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Header = ({ setShowModal, }) => {
  // const [user, setUser] = useState(null);
  return (
    <>
      <div className={styles.container}>
       
          <div className={styles.login}>
            {/* <span>{user.phone}</span> */}
          <button onClick={() => setShowModal(true)}>
            ورود / ثبت نام <FaUser />
          </button>
          </div>
        
        
        <div className={styles.nav}>
          <Link href="/Contact-us"> تماس با ما</Link>
          <Link href="/About-us"> درباره ما</Link>
          <Link href="/tour"> خدمات گردشگری</Link>
          <Link href="/">صفحه اصلی</Link>
        </div>
        <div className={styles.logo}>
          <Image
            src="/Torino.png"
            width={100}
            height={50}
            alt="logo"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;
