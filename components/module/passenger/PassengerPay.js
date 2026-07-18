"use client";

import styles from "@/app/styles/passengerpay.module.css";
import PassengerSubmit from "./PassengerSubmit";



export default  function PassengerPay({ tour}) {
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{tour?.title}</h2>
      </div>
      <div className={styles.price}>
       <h5>قیمت نهایی</h5>
      <p >{tour?.price} </p>
      <span>تومان</span>
      </div>
      <PassengerSubmit />
    </div>
  );
}
