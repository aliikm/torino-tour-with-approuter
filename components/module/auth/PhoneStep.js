export default function PhoneStep({ phone, setPhone, setStep }) {
  const handleSendCode = () => {
    if (phone.length === 11) {
      setStep("otp");
    } else {
      alert("شماره معتبر نیست");
    }
  };


  const handleCode = async () =>{
    
    try{
const res = await fetch ("http://localhost:6500/auth/send-otp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ phone }),
});
const data = await res.json()
if(res.ok){
  setStep("otp")
  console.log("conected to DB")
}else{alert( "خطا در ارسال کد")}


    }catch(err){
      console.log(err)
      alert("server disconectet")
    }
  }

  return (
    <>
      <h3>شماره موبایل</h3>

      <input
        type="tel"
        placeholder="7755**0912"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleCode}>
        دریافت کد
      </button>
    </>
  );
}
