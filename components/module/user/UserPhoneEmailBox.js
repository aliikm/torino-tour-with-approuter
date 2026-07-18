"use client";

import React, { useEffect } from "react";
import styles from "@/app/styles/userphoneemail.module.css";
import { useAuth } from "@/app/authcontext/AuthContext";
import { apiFetch } from "@/app/utils/api";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const UserPhoneEmailBox = () => {
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [isEditing, setIsEditing] = useState("");
  useEffect(() => {
    const savedemail = localStorage.getItem("email");
    if (savedemail) {
      setEmail(savedemail);
    }
  }, []);
  const handleSaveEmail = async () => {
    setEmail(tempEmail);
    setIsEditing(false);
    if (!tempEmail) {
      toast.error("ایمیل را وارد کنید");
      return;
    }
    try {
      const data = await apiFetch("/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: tempEmail }),
      });
      console.log(data);

      setEmail(tempEmail);
      localStorage.setItem("email", tempEmail);
      setIsEditing(false);
      toast.success("ایمیل شما ثبت شد");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const { user } = useAuth();
  return (
    <div className={styles.container}>
      <h3>اطلاعات حساب کاربری</h3>
  <p className={styles.phone}> شماره موبایل : <span>{user.phone}</span></p>
      <p className={styles.email}>ایمیل:</p>
      {isEditing ? (
        <div className={styles.input}>
          <input
            type="email"
            value={tempEmail}
            placeholder="ایمیل خود رو وارد کنید"
            onChange={(e) => setTempEmail(e.target.value)}
          />
          <button
            onClick={() => {
              handleSaveEmail();
            }}
          >
            تایید
          </button>
        </div>
      ) : (
        <div>
          
          <p className={styles.span}>{email ? email : "-"}</p>
          <p
            onClick={() => {
              setTempEmail(email);
              setIsEditing(true);
            }}
            className={styles.editebtn}
          >
           
            <CiEdit />
            {email ? "ویرایش" : "افزودن"}
          </p>
        </div>
      )}
   
    </div>
  );
};

export default UserPhoneEmailBox;
