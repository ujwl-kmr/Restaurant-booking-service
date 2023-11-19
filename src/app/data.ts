import Burger from "../../public/burger.jpeg"
import Biryani from "../../public/chicken biryani.jpg"
import Dosa from "../../public/dosa.webp"
import Idli from "../../public/idli.jpeg"
import Kebab from "../../public/kebab.jpeg"
import Paneer from "../../public/paneer.jpg"
import Pasta from "../../public/pasta.jpeg"
import Pizza from "../../public/pizza.jpeg"
import Roti from "../../public/roti.jpeg"

export const RestaurantDetails = [
    {
        title: "Popeyes",
        Address: "Galleria Mall, 6.3km",
        image: Burger,
        Discount: "30% off upto ₹100",
        Rating: 4.1
    },
    {
        title: "Hotel Empire",
        Address: "Yelahanka, 3.3km",
        image: Biryani,
        Discount: "15% off upto ₹200",
        Rating: 4.2
    },
    {
        title: "Udupi Grand",
        Address: "Yeswantpur, 8.1km",
        image: Dosa,
        Discount: "20% off upto ₹80",
        Rating: 4.3
    },
    {
        title: "Sarangi Veg",
        Address: "Hesarghatta Road, 1.2km",
        image: Idli,
        Discount: "20% off above ₹250",
        Rating: 4.0
    },
    {
        title: "Kebab House",
        Address: "Dasaralli, 3.5km",
        image: Kebab,
        Discount: "25% off upto ₹100",
        Rating: 4.1
    },
    {
        title: "Chin Lung",
        Address: "Nagasandra, 2.8km",
        image: Pizza,
        Discount: "30% off upto ₹100",
        Rating: 4.1
    },
    {
        title: "Ruchi veg",
        Address: "Abigerre, 4.0km",
        image: Paneer,
        Discount: "35% off upto ₹60",
        Rating: 4.4
    },
    {
        title: "Truffles",
        Address: "New Bel Road, 7.5km",
        image: Pasta,
        Discount: "15% off upto ₹150",
        Rating: 4.2
    },
    {
        title: "Nadani palace",
        Address: "HMT road, 5.6km",
        image: Roti,
        Discount: "20% off upto ₹150",
        Rating: 4.3
    }

] as const