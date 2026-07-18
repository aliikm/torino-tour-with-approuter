import styles from "@/app/styles/usertourcard.module.css";
import Image from "next/image";
import { GiCommercialAirplane } from "react-icons/gi";

export default function TourCard({ tour }) {
  const isFinished = new Date(tour.endDate) < new Date();

  const statusText = isFinished ? "به اتمام رسیده" : "در حال اجرا";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>
          <Image src="/sun-fog.png" width={20} height={20} alt="sun logo" />
          {tour.title}
        </h3>
        <h4>
          <GiCommercialAirplane /> {tour.fleetVehicle}
        </h4>
        <span className={isFinished ? styles.finished : styles.ongoing}>
          {statusText}
        </span>
      </div>

      <div className={styles.main}>
        <p>
          {new Date(tour.startDate).toLocaleDateString("fa-IR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {tour.origin?.name}
          {" → "}
          {tour.destination?.name}
        </p>
        <p className={styles.enddate}>
          <span>تاریخ برگشت .</span>{" "}
          {new Date(tour.endDate).toLocaleDateString("fa-IR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.tournumber}>
          <p> شماره تور:</p>
          <span>{tour.id}</span>
        </div>
        <div className={styles.price}>
          <p> مبلغ پرداخت شده</p>
          <span>{tour.price}</span>
          <p>تومان</p>
        </div>
      </div>
    </div>
  );
}
