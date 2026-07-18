"use client";

import React from "react";
import styles from "@/app/styles/passengerinfo.module.css";
import { useFormContext } from "react-hook-form";
import BirthdayDatepicker from "@/components/module/passenger/BarthdayDatepicker";
import Gender from "@/components/module/passenger/Gender";
import { FaUser } from "react-icons/fa";

const PassengerInputInfo = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <h3>
        <FaUser />
        مشخصات مسافر{" "}
      </h3>
      <input
        placeholder=" نام و نام خانوادگی"
        type="text"
        {...register("fullName")}
      />
      <input placeholder="کد ملی" type="text" {...register("nationalCode")} />
      <BirthdayDatepicker />
      <Gender />
    </div>
  );
};

export default PassengerInputInfo;
