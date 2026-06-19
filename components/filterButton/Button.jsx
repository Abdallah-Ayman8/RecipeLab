export default function FilterButton() {
  const items = [
    { id: "1", type: "All" },
    { id: "2", type: "Italian" },
    { id: "3", type: "Indian" },
    { id: "4", type: "Breakfast" },
    { id: "5", type: "Mexican" },
    { id: "6", type: "Japanese" },
    { id: "7", type: "Greek" },
  ];
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {items.map((item) => (
        <button
          type="button"
          className="bg-white px-4 py-1 rounded-full text-sm cursor-pointer hover:text-orange-600 hover:ring hover:ring-orange-600 duration-300"
          key={item.id}
          data-type={item.mealType}
        >
          {item.type}
        </button>
      ))}
    </div>
  );
}
