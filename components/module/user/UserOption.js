"use client";

import React from "react";
import { TbUserFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { RiExchangeDollarLine } from "react-icons/ri";
import styles from "@/app/styles/useroption.module.css";
import Image from "next/image";
import Link from "next/link";

const UserOption = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.profilemenu}>
        <Link
          href="/userprofile"
          className={pathname === "/userprofile" ? styles.active : styles.item}
        >
          <TbUserFilled />
          پروفایل
        </Link>
      </div>
      <div className={styles.mytour}>
        <Link
          href="/userprofile/tours"
          className={
            pathname === "/userprofile/tours" ? styles.active : styles.item
          }
        >
          تورهای من
        </Link>
      </div>
      <div className={styles.transaction}>
        <Link
          href="/userprofile/transaction"
          className={
            pathname === "/userprofile/transaction"
              ? styles.active
              : styles.item
          }
        >
          <RiExchangeDollarLine />
          تراکنش‌ها
        </Link>
      </div>
    </>
  );
};
export default UserOption;
