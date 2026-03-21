import TourDetails from "@/components/module/tour/TourDetails";
import React from "react";

async function getToursId() {
  const res = await fetch("http://localhost:6500/tour/{tourId}", {
    next :{revalidate : 5},
  });

  if (!res.ok) {
  console.log("hi")
 }else{
   
    throw new Error("failed to fetch")
  }

  return res.json();
}

async function Details() {
  const tours = await getToursId();
  console.log(tours)
  return (
  
  
  <div>
<TourDetails tours={tours}/>
  </div>



);
}

export default Details;
