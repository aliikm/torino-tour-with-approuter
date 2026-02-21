import React from "react";
import styles from "@/app/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.torinoAbout}>
        <h3>تورینو</h3>
        <p>درباره ما</p>
        <p>تماس باما</p>
        <p>چرا تورینو</p>
        <p>بیمه مسافرتی</p>

      </div>
      <div className={styles.customerService}>
        <h3>خدمات مشتریان</h3>
        <p>پشتیبانی آنلاین</p>
        <p> راهنمای خرید</p>
        <p> راهنمای استرداد</p>
        <p> پرسش و پاسخ</p>

      </div>
      <Image
        src="/Torino.png"
        width={146}
        height={44}
        alt="torino logo"
        className={styles.torinologo}
      />
      <p className={styles.supportphon}>تلفن پشتیبانی: 8574-021</p>
      <div className={styles.logos}>
        <Image src="/aira.png" width={68} height={74} alt="Aira Logo" />
        <Image
          src="/samandehi.png"
          width={68}
          height={74}
          alt="samandehi Logo"
        />
        <Image src="/ecunion.png" width={68} height={74} alt="ecunion Logo" />
        <Image
          src="/passenger-rights.png"
          width={71}
          height={74}
          alt="passenger Logo"
        />
        <Image
          src="/state-airline.png"
          width={78}
          height={74}
          alt="state-airline Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
