"use clinet";

import { Controller, useFormContext } from "react-hook-form";
import styles from "@/app/styles/gender.module.css";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";

export default function Gender() {
  const { control, register } = useFormContext();

  return (
    <Controller
      name="gender"
      control={control}
      defaultValue=""
      rules={{
        required: "جنسیت الزامی است",
      }}
      render={({ field }) => (
        <select
          className={styles.container}
          value={field.value || ""}
          onChange={(e) => field.onChange(e.target.value)}
          {...register("gender")}
        >
          <option value="">انتخاب</option>

          <option value="male">مرد</option>

          <option value="female">زن</option>
        </select>
      )}
    />
  );
}
