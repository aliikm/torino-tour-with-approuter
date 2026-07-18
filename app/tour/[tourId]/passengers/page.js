import React from "react";
import styles from "@/app/styles/passengerpage.module.css";
import PassengerForm from "@/components/module/passenger/PassengerForm";

async function getTour(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`);
  return res.json();
}

export default async function PassengerPage({ params }) {
  const { tourId } = await params;
  const tour = await getTour(tourId);

  return (
    <>
      <div className={styles.container}>
        <PassengerForm tour={tour} />
      </div>
    </>
  );
}
