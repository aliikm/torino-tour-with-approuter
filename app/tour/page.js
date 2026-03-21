import styles from"@/app/styles/tourlist.module.css"
import Cards from "@/components/module/tour/Cards";
async function getTours() {
  const res = await fetch("http://localhost:6500/tour", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت تورها");
  }

  return res.json();
}

async function Tour  ()  {
  const tours = await getTours();
  return (
    <div className={styles.parent}>
        
      <div className={styles.container}>
        {tours.map((tour) => (<Cards key={tour.id} tour={tour} />))}
      </div>
    </div>
  )
}

export default Tour