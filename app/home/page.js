import styles from "@/app/styles/home.module.css";
import SearchInput from "@/components/module/SearchInput";
import TourList from "@/components/module/tour/TourList";
import Description from "@/components/module/Description";
import Image from "next/image";

async function getTours() {
  const res = await fetch("http://localhost:6500/tour", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت تورها");
  }

  return res.json();
}

async function Homepage() {
  const tours = await getTours();
 
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/img/banner.png" width={1000} height={350} alt="banner" />
      </div>
      <div className={styles.paraghraph}>
        <p>
          <span>تورینو</span> برگزار کننده بهترین تورهای داخلی و خارجی{" "}
        </p>
      </div>
      <SearchInput />
      <TourList tours={tours} />
      <div className={styles.mainbanner}>
        <Image
          src="/img/mainbanner.png"
          width={800}
          height={200}
          alt="mainbanner"
        />
      </div>
      <Description />
    </div>
  );
}

export default Homepage;
