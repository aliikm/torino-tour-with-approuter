"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "@/app/styles/otpModal.module.css";
import toast from "react-hot-toast";
import { success } from "zod";
import { apiFetch } from "@/app/utils/api";
import { useAuth } from "@/app/authcontext/AuthContext";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function OtpStep({ phone, onClose }) {
  const [otp, setOtp] = useState("");

  const { setUser } = useAuth();

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("کد باید ۶ رقم باشد");

      return;
    }

    try {
      const data = await apiFetch("/auth/check-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: phone,
          code: otp,
        }),
      });

      console.log(data);

      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("phone", phone);
      // ذخیره token
      localStorage.setItem("accessToken", data.accessToken);

      // ذخیره user در context
      setUser({
        phone,
        accessToken: data.accessToken,
      });

      toast.success("ورود موفق");

      onClose();
    } catch (error) {
      console.log(error);

      toast.error(error.message);
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
          <input {...props} className={styles.otpInput} />
        )}
      />

      <button onClick={handleVerify} className={styles.verifyBtn}>
        تأیید
      </button>

      {/* <p onClick={() => setStep("phone")} className={styles.changeBtn}>
        تغییر شماره
      </p> */}
    </div>
  );
}
