import React from "react";
import styles from "@/app/styles/support.module.css";
import Image from "next/image";

const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image src="/img/Group 16.png" width={121} height={129} alt="pic" />

        <div className={styles.text}>
          <h5>بصرفه ترین قیمت</h5>
          <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </div>
      </div>

      <div className={styles.box}>
        <Image src="/img/Group 17.png" width={121} height={129} alt="pic" />

        <div className={styles.text}>
          <h5>پشتیبانی</h5>
          <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
        </div>
      </div>

      <div className={styles.box}>
        <Image src="/img/Group 18.png" width={121} height={129} alt="pic" />

        <div className={styles.text}>
          <h5>رضایت کاربران</h5>
          <p>رضایت بیش از 10 هزار کاربر از تورهای ما.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
