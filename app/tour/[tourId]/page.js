import TourDetails from "@/components/module/tour/TourDetails";


async function getToursId(id) {
  const res = await fetch(`http://localhost:6500/tour`);

const data = await res.json()
return data.find(t => t.id === id)
}

export default async function Details({ params }) {
  const { tourId } = await params;

  const tours = await getToursId(tourId);
  return (
    <div>
      <TourDetails tours={tours} />
    </div>
  );
}
