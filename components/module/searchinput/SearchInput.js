"use client";

import React from "react";
import styles from "@/app/styles/searchinput.module.css";
import { useForm, FormProvider } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/app/utils/api";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import SearchButton from "./SearchButton";
import TravelDate from "./TravelDate";
import CityAutocomplete from "@/components/CityAutoComplete";

const getTours = async () => {
  const data = await apiFetch("/tour");

  console.log("TOURS :", data);

  return data;
};

function SearchInput() {
  const methods = useForm({
    defaultValues: {
      origin: "",
      originId: "",
      destination: "",
      destinationId: "",
      departureDate: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  const cities = data?.flatMap((tour) => [tour.origin, tour.destination]) || [];

  const uniqueCities = [
    ...new Map(cities.map((city) => [city.id, city])).values(),
  ];

  console.log("CITIES :", uniqueCities);

  if (isLoading) {
    return <p>در حال دریافت اطلاعات...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.button}>
            <SearchButton />
          </div>

          <div className={styles.datepicker}>
            <TravelDate icon={<IoCalendarOutline />} />
          </div>

          <div className={styles.destination}>
            <CityAutocomplete
              name="destination"
              idField="destinationId"
              placeholder="مقصد"
              cities={uniqueCities}
              icon={<TbWorldSearch />}
            />
          </div>

          <div className={styles.origin}>
            <CityAutocomplete
              name="origin"
              idField="originId"
              placeholder="مبدا"
              cities={uniqueCities}
              icon={<IoLocationOutline />}
            />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default SearchInput;
