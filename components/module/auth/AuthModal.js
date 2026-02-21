"use client";

import { useState } from "react";
import PhoneStep from "./PhoneStep";
import OtpStep from "./OtpStep";
import styles from "@/app/styles/authModal.module.css"
import { IoClose } from "react-icons/io5";


export default function AuthModal({ onClose }) {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles.container}onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
       <span  onClick={onClose}><IoClose /></span>

        {step === "phone" && (
          <PhoneStep
            phone={phone}
            setPhone={setPhone}
            setStep={setStep}
          />
        )}

        {step === "otp" && (
          <OtpStep
            phone={phone}
            setStep={setStep}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}