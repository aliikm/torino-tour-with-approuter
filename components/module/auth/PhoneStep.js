"use client";

import toast from "react-hot-toast";

export default function PhoneStep({ phone, setPhone, setStep }) {







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
      console.log("Response:", data);
      console.log("Status:", res.status);
      if (!res.ok) {
        toast.error(data.message || "خطا در ارسال کد");
        return;
      }

      toast.success("کد ارسال شد");
      setStep("otp");
    } catch (err) {
      console.log(err);
      toast.error(err.message || "server disconectet");
    }
  };

  return (
    <>
      <h3>شماره موبایل</h3>

      <input
        type="tel"
        placeholder="7755**0912"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleCode}>دریافت کد</button>
    </>
  );
}
