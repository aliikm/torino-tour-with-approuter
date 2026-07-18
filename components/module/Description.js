import React from "react";
import styles from "@/app/styles/description.module.css";
import Image from "next/image";

const Dscription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.decriptioncontainer}>
          
          <h4>چرا <span>تورینو</span> ؟</h4>
          <h6>تور طبیعت گردی و تاریخی </h6>
          <p>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div className={styles.imgcontainer}>image</div>
      </div>
    </div>
  );
};

export default Dscription;
