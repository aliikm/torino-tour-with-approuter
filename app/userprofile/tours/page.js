"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/app/utils/api";
import TourCard from "@/components/module/user/UserTourCard";
import styles from "@/app/styles/usertourcard.module.css";

const getMyTours = async () => {
  return await apiFetch("/user/tours");
};

export default function Usertours() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myTours"],
    queryFn: getMyTours,
  });

  console.log("mytours:", data);

  if (isLoading) {
    return <p>در حال دریافت...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {data.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
