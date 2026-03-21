import Cards from "./Cards"
import styles from"@/app/styles/tourlist.module.css"




const TourList = ({tours}) => {

  return (
    <div className={styles.parent}>
        
      <div className={styles.container}>
        {tours.map((tour) => (<Cards key={tour.id} tour={tour} />))}
      </div>
    </div>
  )
}

export default TourList