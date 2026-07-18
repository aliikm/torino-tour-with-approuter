"use client";

import React from "react";
import styles from "@/app/styles/tourdetails.module.css";
import Link from "next/link";
import Image from "next/image";
import Basket from "@/components/module/tour/Basket";
import { useRouter } from "next/navigation";
import { cityMap } from "@/app/utils/CityName";

const TourDetails = ({ tours }) => {
  const router = useRouter();
  const startDate = tours.startDate
    ? new Date(tours.startDate).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  // 🧮 محاسبه مدت سفر
  let days = "";
  let nights = "";

  if (tours.startDate && tours.endDate) {
    const start = new Date(tours.startDate);
    const end = new Date(tours.endDate);

    const diffTime = end - start;
    days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    nights = days - 1;
  }

  return (
    <div className={styles.container}>
      <div className={styles.detailscard}>
        <div className={styles.informtionbtn}>
          <div className={styles.imgdetails}>
            <Image
              src={tours.image}
              width={357}
              height={260}
              className={styles.bannerImage}
              alt={tours.title}
              unoptimized
            />
          </div>
          <div className={styles.subjectdetails}>
            <div className={styles.title}>
              <h3>{tours.title}</h3>
            </div>
            <div className={styles.price}>
              <p>
                {tours.price} <span>تومان</span>
              </p>
            </div>

            <div className={styles.tourplan}>
              <p>
                <span>
                  <Image
                    src="/user-tick.png"
                    width={16}
                    height={16}
                    alt="icon user"
                  />{" "}
                </span>{" "}
                تورلیدر از مبدا{" "}
              </p>
              <p>
                <span>
                  <Image src="/map.png" width={16} height={16} alt="icon map" />
                </span>{" "}
                برنامه سفر
              </p>
              <p>
                <span>
                  <Image
                    src="/medal-star.png"
                    width={16}
                    height={16}
                    alt="icon medal star"
                  />
                </span>
                تضمین کیفیت
              </p>
            </div>

            <Basket tourId={tours.id} />
          </div>
        </div>
        <div className={styles.informationtext}>
          <div className={styles.origin}>
            <p>مبدا</p>
            <h4>
              {/* {tours.origin.name} */}
              {cityMap[tours.origin.name.toLowerCase()] || tours.name}
            </h4>
          </div>
          <div className={styles.departuredate}>
            <p>تاریخ رفت</p>
            <h4>{startDate.split("T")[0]}</h4>
          </div>
          <div className={styles.returndate}>
            <p>تاریخ برگشت</p>
            {/* <p>{end.split("T")[0]}</p> */}
          </div>
          <div className={styles.fleetvehicle}>
            <p>حمل و نقل</p>
            <h4>{tours.fleetVehicle}</h4>
          </div>
          <div className={styles.capacity}>
            <p>ظرفیت</p>
            <h4>{tours.capacity}</h4>
          </div>
          <div className={styles.insurance}>
            <p>بیمه</p>
            <h4>{tours.insurance}</h4>
          </div>

          {/* <p>{tours.options}</p> */}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
