import Styles from "./dish-list.module.css";
import { Dish } from "@/components";
import { api } from "@/services"
import { useQuery } from "react-query"
import { DishType } from "@/types"
import { DishSkeleton } from "@/components";

export function DishList() {
  
  const fetchDishes = async () => {
    const response = await api.get<DishType[]>("/deliveries?city=sao-paulo-sp");
    return response.data;
  }
  

  const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);


  return (
    <div className={Styles.list}>
      {isFetching ? (
        <DishSkeleton />
      ) : (
        data?.map((dish) => <Dish key={dish.id} {...dish} />)
        )}
    </div>
  );
}
