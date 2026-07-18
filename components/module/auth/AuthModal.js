"use client";

import { useState } from "react";
import PhoneStep from "./PhoneStep";
import OtpStep from "./OtpStep";
import styles from "@/app/styles/authModal.module.css";
import { IoClose } from "react-icons/io5";

export default function AuthModal({ onClose, setUser }) {
  const [serverCode, setServerCode] = useState("");
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");

  console.log(step);
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose}>
          <IoClose />
        </span>

        {step === "phone" && (
          <PhoneStep
            setPhone={setPhone}
            phone={phone}
            setStep={setStep}
            onClose={onClose}
            setServerCode={setServerCode}
          />
        )}

        {step === "otp" && (
          <OtpStep setUser={setUser} onClose={onClose} phone={phone} />
        )}
      </div>
    </div>
  );
}
