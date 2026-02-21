import Image from "next/image";
import styles from "@/app/styles/not-fount.module.css"
import localFont from "next/font/local"
import Link from "next/link";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      style: "normal",
    },
 
  ],
});
export default function NotFound() {
  return (
    <div className={styles.container}>

    <div className={styles.content}>
      <Image src="/img/Error TV.png" width={555} height={555} alt="Not Found"  className={styles.tvimg}/>
      <p className={styles.text}>!صفحه مورد نظر پیدا نشد</p>

      <button className={styles.returnhome}>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </button>
    </div>
    </div>
  );
}