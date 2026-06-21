export function getFavorites() {
  if (typeof window === "undefined") return [];

  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(id) {
  const favorites = getFavorites();

  if (!favorites.includes(id)) {
    localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
  }
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter((item) => item !== id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}
