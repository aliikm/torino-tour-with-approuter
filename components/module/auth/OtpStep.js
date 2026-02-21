"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "@/app/styles/otpModal.module.css";

export default function OtpStep({ onClose, setStep }) {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length === 6) {
      alert("تایید شد");
      onClose();
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>کد تأیید</h3>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        containerStyle={styles.otpWrapper}
        renderInput={(props) => (
          <input
            {...props}
            style={{
              width: "20px",
              height: "20px",
            }}
            className={styles.otpInput}
          />
        )}
      />

      <button onClick={handleVerify} className={styles.verifyBtn}>
        تأیید
      </button>

      <p onClick={() => setStep("phone")} className={styles.changeBtn}>
        تغییر شماره
      </p>
    </div>
  );
}
