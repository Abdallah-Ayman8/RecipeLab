import FilterButton from "../filterButton/Button";

export default async function Filter({ handleFilter }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="text-xl font-serif">All Recipes</h1>
        <FilterButton />
      </div>
      <div
        className="flex justify-between items-center border 
      hover:border-orange-600 hover:text-orange-600 border-stone-200 bg-white px-4 py-1.5
        rounded-full text-stone-950"
      >
        <p>Sort: </p>
        <select className="text-stone-950 cursor-pointer px-2 outline-none">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}
