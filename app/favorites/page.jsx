import FavoritesList from "@/components/FavoritesList/FavoritesList";

export default function favoritesPage() {
  return (
    <>
      <main className="px-2 bg-linear-to-r from-white to-orange-50 flex flex-col justify-center items-center gap-4 min-h-dvh">
        <h1 className="text-4xl font-bold my-6 mt-9 font-serif">
          My Favorites
        </h1>
        <section className="flex justify-center items-center my-14">
          <FavoritesList />
        </section>
      </main>
    </>
  );
}
