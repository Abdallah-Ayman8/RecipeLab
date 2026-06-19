import FilterButton from "../filterButton/Button";

export default async function Filter() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="text-xl font-serif">All Recipes</h1>
        <FilterButton />
      </div>
    </div>
  );
}
