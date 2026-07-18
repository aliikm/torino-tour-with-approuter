"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { apiFetch } from "@/app/utils/api";
import { CiEdit } from "react-icons/ci";
import styels from "@/app/styles/userinfobox.module.css";
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

export default function PersonalInfo() {
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",

    nationalCode: "",

    gender: "",

    birthday: "",
  });

  const {
    register,

    handleSubmit,

    control,

    reset,
  } = useForm({
    defaultValues: {
      fullName: "",

      nationalCode: "",

      gender: "",

      birthday: null,
    },
  });
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
      reset({
        name: savedProfile.fullName,
        nationalCode: savedProfile.nationalCode,
        gender: savedProfile.gender,
        birthday: savedProfile.birthday,
      });
    }
  }, [reset]);

  const handleEdit = () => {
    setIsEditingInfo(true);
    console.log("edite");
  };

  const handleSave = async (data) => {
    console.log(data.birthday);

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

      setProfile(data);

      localStorage.setItem(
        "profile",

        JSON.stringify(data),
      );
      toast.success("saved");
      setIsEditingInfo(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styels.container}>
      <h3>اطلاعات شخصی</h3>
      <div className={styels.editbtn}>
        {!isEditingInfo && (
          <p type="button" onClick={handleEdit}>
            <CiEdit />
            ویرایش اطلاعات
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit(handleSave)}>
        {isEditingInfo ? (
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            defaultValue={profile.fullName}
            {...register("fullName")}
            className={styels.nameinput}
          />
        ) : (
          <div className={styels.name}>
            <p>نام و نام خانوادگی</p>
            <span>{profile.fullName ? profile.fullName : "-"}</span>
          </div>
        )}

        {isEditingInfo ? (
          <input
            type="text"
            placeholder="کد ملی"
            defaultValue={profile.nationalCode}
            {...register("nationalCode")}
            className={styels.nationalcodeinput}
          />
        ) : (
          <div className={styels.nationalcode}>
            <p> کد ملی</p>
            <span>{profile.nationalCode ? profile.nationalCode : "-"}</span>
          </div>
        )}

        {isEditingInfo ? (
          <Controller
            control={control}
            name="birthday"
            render={({ field }) => (
              <DatePicker
                name="birthday"
                locale="fa"
                value={field.value}
                onChange={(value) => {
                  console.log(value);
                  field.onChange(value);
                }}
                placeholder="تاریخ تولد"
                inputClass={styels.birthdayselect}
              />
            )}
          />
        ) : (
          <div className={styels.birthday}>
            <p>تاریخ تولد</p>
            <span>
              {profile.birthday
                ? new Date(profile.birthday).toLocaleDateString("fa-IR")
                : "-"}
            </span>
          </div>
        )}

        {isEditingInfo ? (
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <select
                className={styels.genderselect}
                {...field}
                placeholder="جنسیت"
              >
                <option value=""> انتخاب کنید</option>
                <option value="male"> مرد </option>
                <option value="female"> زن </option>
              </select>
            )}
          />
        ) : (
          <div className={styels.gender}>
            <p>جنسیت</p>
            <span>{profile.gender || " - "}</span>
          </div>
        )}
        {isEditingInfo && (
          <div className={styels.buttoncontainer}>
            <button className={styels.cancelbtn}>انصراف</button>
            <button type="submit" className={styels.successbtn}>
              تایید
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
