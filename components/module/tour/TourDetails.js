import React from 'react'
import styles from "@/app/styles/tourdetails.module.css"



const TourDetails = ({tours}) => {
    

  return (
    <div className={styles.container}>
      <div className={styles.detailscard}>
        <h3>{tours.id}</h3>
      </div>
    </div>
  )
}

export default TourDetails