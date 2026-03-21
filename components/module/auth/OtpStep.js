"use client";

import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "@/app/styles/otpModal.module.css";
import Link from "next/link";
import toast from "react-hot-toast";

export default function OtpStep({ onClose, setStep, user, setUser }) {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const userData = { phone: phoneNumber };

  const handleVerify = () => {
    if (otp.length === 6) {
      localStorage.setItem("user", JSON.stringify({ phone: phoneNumber }));
      setUser(userData);
      toast.success("تایید شد");
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
        <Link href="/">تأیید</Link>
      </button>

      <p onClick={() => setStep("phone")} className={styles.changeBtn}>
        تغییر شماره
      </p>
    </div>
  );
}
