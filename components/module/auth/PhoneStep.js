"use client";

import toast from "react-hot-toast";

export default function PhoneStep({ phone, setPhone, setStep, setServerCode }) {
  const handleCode = async () => {
    if (phone.length !== 11) {
      toast.error("شماره معتبر نیست");
      return;
    }

    try {
      const res = await fetch("http://localhost:6500/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: phone }),
      });
      const data = await res.json();
      console.log(data);
      console.log("Response:", data);
      console.log("Status:", res.status);
      if (!data.ok) {
        toast.success(`کد تایید: ${data.code}`);
        setServerCode(data.code);
        setStep("otp");
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "server disconectet");
    }
  };

  return (
    <>
      <h3> ورود به تورینو</h3>
      <p>شماره موبایل خود را وارد کنید</p>

      <input
        type="tel"
        placeholder="7755**0912"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleCode}> ارسال کد تایید</button>
    </>
  );
}
