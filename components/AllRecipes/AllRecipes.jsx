import Image from "next/image";
import Filter from "../Filter/Filter";
import { ArrowRight } from "lucide-react";

const items = [
  {
    id: "1",
    name: "Spaghetti Carbonara",
    type: "Italian",
    drscription:
      "Classic Roman pasta with a silky egg-and-cheese sauce, pancetta, and lots of black pepper.",
    kind: "Quick",
    rating: "4.8",
    time: "25 min",
    difficulty: "Easy",
    servings: "2 servings",
    image: "/allRecipes/SpaghettiCarbonara.jpg",
  },
  {
    id: "2",
    name: "Chicken Tikka Masala",
    type: "Indian",
    drscription:
      "Tender marinated chicken in a rich, creamy tomato-based sauce with aromatic spices.",
    kind: "Popular",
    rating: "4.9",
    time: "40 min",
    difficulty: "Easy",
    servings: " 4 servings",
    image: "/allRecipes/ChickenTikkaMasala.jpg",
  },
  {
    id: "3",
    name: "Avocado Toast",
    type: "Breakfast",
    drscription:
      "Creamy smashed avocado on toasted sourdough with lemon, chilli flakes, and a poached egg.",
    kind: "Healthy",
    rating: "4.5",
    time: "10  min",
    difficulty: "Easy",
    servings: " 1 servings",
    image: "/allRecipes/AvocadoToast.jpg",
  },
  {
    id: "4",
    name: "Beef Tacos",
    type: "Mexican",
    drscription:
      "Spiced ground beef in warm corn tortillas with salsa, sour cream, and fresh lime.",
    kind: "Family Fave",
    rating: "4.7",
    time: "30 min",
    difficulty: "Easy",
    servings: " 3 servings",
    image: "/allRecipes/BeefTacos.jpg",
  },
  {
    id: "5",
    name: "Miso Ramen",
    type: "Japanese",
    drscription:
      "Rich miso broth with springy ramen noodles, soft-boiled egg, nori, corn, and chashu pork.",
    kind: "Comfort",
    rating: "4.9",
    time: "50 min",
    difficulty: "Easy",
    servings: " 2 servings",
    image: "/allRecipes/MisoRamen.jpg",
  },
  {
    id: "6",
    name: "Greek Salad",
    type: "Greek",
    drscription:
      "Chunky tomatoes, cucumber, olives, red onion, and a thick slab of feta with good olive oil.",
    kind: "No-cook",
    rating: "4.6",
    time: "15 min",
    difficulty: "Easy",
    servings: " 2 servings",
    image: "/allRecipes/GreekSalad.jpg",
  },
];

export default function AllRecipes() {
  return (
    <>
      <main className="px-16 md:px-45 pt-10 bg-linear-to-r from-white pb-30 to-orange-100">
        <Filter />
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-56 bg-white rounded-2xl mt-8 shadow hover:shadow-xl 
              hover:-translate-y-0.5 duration-200
              cursor-pointer"
            >
              <Image
                className="rounded-t-2xl"
                src={item.image}
                alt={item.name}
                width={310}
                height={200}
              />
              <div className="px-2">
                <div className="flex justify-start gap-2 mt-2 text-sm mb-2 font-semibold">
                  <p className="px-3 py-1 bg-gray-200 rounded-full">
                    {item.type}
                  </p>
                  <p className="px-3 py-1 bg-gray-200 rounded-full">
                    {item.kind}
                  </p>
                </div>
                <h3 className="px-2 font-serif text-stone-950">{item.name}</h3>
                <div className="mt-2 flex justify-start items-center gap-2 text-sm pb-3 border-b mx-2">
                  <p>⏱ {item.time}</p>
                  <p>.</p>
                  <p>👥 {item.servings}</p>
                </div>
                <div className="flex justify-between items-center gap-4 pb-3 mt-3 text-sm px-2">
                  <p className="text-orange-600">★★★★★{item.rating}</p>
                  <p className="flex justify-baseline text-orange-600">
                    View recipe <ArrowRight />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
