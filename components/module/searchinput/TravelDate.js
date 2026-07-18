"use client";

import { DatePicker } from "zaman";
import styels from "@/app/styles/searchinput.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Controller, useFormContext } from "react-hook-form";

export default function Datepicker({ icon }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="departureDate"
      render={({ field }) => (
        <DatePicker
          value={field.value}
          onChange={field.onChange}
          inputClass={styels.calender}
          range
        />
      )}
    />
  );
  <span>{icon}</span>;
}
