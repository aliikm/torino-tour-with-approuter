"use client";

import styles from "@/app/styles/card.module.css";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ tour }) => {
  console.log(tour);
  
  return (
    <>
      <div className={styles.container}>
        
          <div className={styles.image}>
            <Image
              src={tour.image}
              width={275}
              height={150}
              alt={tour.title}
              unoptimized
            />
          </div>
       
        <div className={styles.content}>
          <h4>{tour.title}</h4>
          <p>{tour.options}</p>
        </div>
        <div className={styles.footer}>
          <Link href={`/tour/${tour.id}`}>
          
          <button>رزرو</button>
          </Link>
          <span className={styles.price}>
            <p>{tour.price}<span>تومان</span></p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Cards;
