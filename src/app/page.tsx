import RestaurantCard from "./RestaurantCard";
import { RestaurantDetails } from "@/app/data";

export default function Home() {
  const restaurants = RestaurantDetails;

  return (
    <div>
      <p className="mt-10 ml-8 sm:ml-24 font-semibold text-3xl">
        Checkout the best restaurants near you!
      </p>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 justify-center my-10 mx-8 sm:mx-20">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </main>
    </div>
  );
}
