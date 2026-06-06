export default function Filter() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-serif">All Recipes</h1>
      </div>
      <div
        className="flex justify-between items-center border 
      hover:border-orange-600 hover:text-orange-600 border-stone-200 bg-white px-4 py-1.5
        rounded-full text-stone-950"
      >
        <p>Sort: </p>
        <select className="text-stone-950 cursor-pointer px-2 outline-none">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
    </div>
  );
}
