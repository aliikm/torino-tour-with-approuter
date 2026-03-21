"use client";

import styles from "@/app/styles/card.module.css";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ tour }) => {
  console.log(tour);
  return (
    <>
      <div className={styles.container}>
        <Link href={`/tour/${tour.id}`}>
          <div className={styles.image}>
            <Image
              src={tour.image}
              width={275}
              height={150}
              alt={tour.title}
              unoptimized
            />
          </div>
        </Link>
        <div className={styles.content}>
          <h3>{tour.title}</h3>
          <p>{tour.options}</p>
        </div>
        <div className={styles.footer}>
          <button>رزرو</button>
          <span className={styles.price}>
            <p>قیمت: {tour.price}تومان</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Cards;
