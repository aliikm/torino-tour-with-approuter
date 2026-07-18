"use clinet";

import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "zaman";

export default function BarthdayDatepicker() {
  const { control } = useFormContext;
  return (
    <Controller
      name="birthDate"
      control={control}
      rules={{ required: "تاریخ تولد الزامی میباشد" }}
      defaultValue={null}
      render={({ field }) => (
        <DatePicker
          value={field.value}
          onChange={(value) => field.onChange(value)}
          inputAttributes={{ placeholder: "تاریخ تولد " }}
        />
      )}
    />
  );
}
