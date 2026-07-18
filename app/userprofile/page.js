import UserBankInfo from "@/components/module/user/UserBankInfo";
import UserInfoBox from "@/components/module/user/UserInfoBox";
import UserPhoneEmailBox from "@/components/module/user/UserPhoneEmailBox";
import React from "react";

const UserPage = () => {
  return (
    <>
      <UserPhoneEmailBox />
      <UserInfoBox />
      <UserBankInfo />
    </>
  );
};

export default UserPage;
