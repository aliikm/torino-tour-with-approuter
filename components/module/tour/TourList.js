import Cards from "./Cards"
import styles from"@/app/styles/tourlist.module.css"




const TourList = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h1>TourList</h1>
        <Cards/>
      </div>
    </div>
  )
}

export default TourList