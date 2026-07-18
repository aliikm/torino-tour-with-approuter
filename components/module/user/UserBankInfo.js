"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/userbankinfo.module.css";
import { CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { apiFetch } from "@/app/utils/api";
import toast from "react-hot-toast";
const UserBankInfo = () => {
  const [IsEditingBank, setIsEditingBank] = useState(false);
  const [bankInfo, setBankInfo] = useState({
    numberBankId: "",
    numberSheba: "",
    numberCardBank: "",
  });
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      numberBankId: "",
      numberSheba: "",
      numberCardBank: "",
    },
  });
  useEffect(() => {
    const savedBank = JSON.parse(localStorage.getItem("bankInfo"));
    if (savedBank) {
      setBankInfo(savedBank);
      reset({
        numberBankId: savedBank.numberBankId,
        numberSheba: savedBank.numberSheba,
        numberCardBank: savedBank.numberCardBank,
      });
    }
  }, [reset]);

  const handleSavebankInfo = async (data) => {
    console.log("save");
    try {
      console.log(data);

      const res = await apiFetch("/user/profile", {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      console.log(res);

      setBankInfo(data);

      localStorage.setItem(
        "bankInfo",

        JSON.stringify(data),
      );
      toast.success("saved");
      setIsEditingBank(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditBank = () => {
    setIsEditingBank(true);
    console.log("edit");
  };
  return (
    <div className={styles.container}>
      <h3>اطلاعات حساب بانکی</h3>
      <div className={styles.edibtn}>
        {!IsEditingBank && (
          <p onClick={handleEditBank}><CiEdit/>ویرایش اطلاعات</p>
        )}
      </div>
      <form onSubmit={handleSubmit(handleSavebankInfo)}>

        {IsEditingBank ? (
          <input {...register("numberSheba")}  placeholder="شماره شبا" className={styles.shebainput}/>
        ) : (
          <div className={styles.shebanumber}>
            <p>شماره شبا</p>
            <span>{bankInfo.numberSheba ? bankInfo.numberSheba : "-"}</span>
          </div>
        )}

        {IsEditingBank ? (
          <input {...register("numberBankId")} placeholder="شماره حساب" className={styles.bankidinput}/>
        ) : (
          <div className={styles.hesabnumber}>
            <p>شماره حساب</p>
            <span>{bankInfo.numberBankId ? bankInfo.numberBankId : "-"}</span>
          </div>
        )}

        {IsEditingBank ? (
          <input {...register("numberCardBank")}  placeholder="شماره کارت" className={styles.cardbankinput}/>
        ) : (
          <div className={styles.cardnumber}>
            <p>شماره کارت</p>
            <span>{bankInfo.numberCardBank ? bankInfo.numberCardBank : "-"}</span>
          </div>
        )}
            {IsEditingBank && (
          <div className={styles.buttoncontainer}>
            <button className={styles.cancelbtn}>انصراف</button>
            <button type="submit" className={styles.successbtn}>تایید </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserBankInfo;
