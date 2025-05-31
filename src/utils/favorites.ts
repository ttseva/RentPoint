const FAVORITES_STORAGE_KEY = 'rentpoint_favorites';

interface Property {
    id: number;
    rooms: 0 | 1 | 2 | 3 | 4;
    payment: number;
    floor: number;
    totalFloors: number;
    square: number;
    description: string;
    yearOfBuilding: number;
    address: [string, string];
    photos: string[];
    author: "user" | "server";
}

export const getFavorites = (): number[] => {
    const favoritesJson = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
};

export const addToFavorites = (propertyId: number) => {
    const favorites = getFavorites();
    if (!favorites.includes(propertyId)) {
        favorites.push(propertyId);
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
};

export const removeFromFavorites = (propertyId: number) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== propertyId);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
};

export const isInFavorites = (propertyId: number): boolean => {
    const favorites = getFavorites();
    return favorites.includes(propertyId);
}; 