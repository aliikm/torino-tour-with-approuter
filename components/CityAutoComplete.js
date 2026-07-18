"use client";

import { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { cityMap } from "@/app/utils/CityName";
import styles from "@/app/styles/cityautocomplete.module.css";

function CityAutocomplete({ name, idField, placeholder, cities, icon }) {
  const { register, watch, setValue } = useFormContext();

  const [showList, setShowList] = useState(false);

  const inputValue = watch(name);

  const filteredCities = cities.filter((city) =>
    city.name.includes(inputValue || ""),
  );

  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {!inputValue && <span className={styles.icon}>{icon}</span>}
      <input
        {...register(name)}
        placeholder={placeholder}
        onFocus={() => setShowList(true)}
        className={`${styles.input}
  ${inputValue ? styles.filled : ""}`}
      />
      {showList && (
        <div className={styles.dropdown}>
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className={styles.item}
              onClick={() => {
                setValue(name, cityMap[city.name.toLowerCase()] || city.name);

                setValue(idField, city.id);

                setShowList(false);
              }}
            >
              {cityMap[city.name.toLowerCase()] || city.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityAutocomplete;
