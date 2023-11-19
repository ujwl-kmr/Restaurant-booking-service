import { RestaurantDetails } from "@/app/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type RestaurantProps = (typeof RestaurantDetails)[number];

export function RestaurantCard({
  title,
  image,
  Address,
  Discount,
  Rating,
}: RestaurantProps) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 transition-transform hover:scale-105">
      <div className="relative">
        <div style={{ width: "400px", height: "200px" }}>
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute top-0 left-0 bg-yellow-500 text-white py-1 px-2">
          {Discount}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{Address}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-white p-1 flex bg-blue-600 rounded">
            {Rating}
            <FaStar className="ml-1 mt-1 pb-1 text-lg" />
          </div>
          <button className="bg-black text-white font-bold py-2 px-4 rounded transition hover:scale-110">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

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
