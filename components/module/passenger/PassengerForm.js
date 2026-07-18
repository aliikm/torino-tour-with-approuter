"use client";

import { useForm, FormProvider } from "react-hook-form";
import PassengerInputInfo from "@/components/module/passenger/PassengerInputInfo";
import PassengerPay from "./PassengerPay";
import { DevTool } from "@hookform/devtools";
import { apiFetch } from "@/app/utils/api";
import toast from "react-hot-toast";

export default function PassengerForm({ tour }) {
  const methods = useForm();
  console.log(methods.watch());
  const submitHandler = async (formData) => {
    console.log(formData);

    try {
      const newData = {
        ...formData,
        birthday: formData.birthday?.value?.toISOString()?.split("t")[0],
      };
      console.log(newData);

      const data = await apiFetch("/order", {
        method: "POST",

        body: JSON.stringify(newData),
      });

      console.log(data);

      toast.success("ثبت اطلاعات موفق");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <PassengerInputInfo />
        <PassengerPay tour={tour} />
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}
