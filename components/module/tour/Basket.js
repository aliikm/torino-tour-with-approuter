"use clinet"

import { apiFetch } from "@/app/utils/api"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function Basket({tourId}){
    const router = useRouter()
    const addToBasket = async () => {
    try {
      const data = await apiFetch(`/basket/${tourId}`, {
        method:"PUT",
        // body: JSON.stringify({ tourId: tours.id }),
      });
      console.log(data);
      toast.success(data.message || "add tour ok");
      router.push(`/tour/${tourId}/passengers`);
    } catch (error) {
      toast.error(error.message);
    }
  };
    return(
        <div>
            <button onClick={addToBasket}>رزرو و خرید</button>
        </div>
    )
    

}