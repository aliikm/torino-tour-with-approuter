"useclinet";

import styles from "@/app/styles/home.module.css";
import SearchInput from "@/components/module/SearchInput";
import TourList from "@/components/module/tour/TourList";
import Image from "next/image";


const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/img/banner.png" width={1000} height={350} alt="banner" />
      </div>
      <div className={styles.paraghraph}>
        <p><span>تورینو</span> برگزار کننده بهترین تورهای داخلی و خارجی </p>
      </div>
      <SearchInput />
      <TourList/>
    </div>
  );
};

export default Homepage;
