import { ReactNode, createContext, useState } from "react";
import { Book } from "../interfaces";

interface ContextProps {
    favorites: Book[]
    addBookInFavorites: (book: Book) => void
    removeBookOnFavorites: (id: string) => void
}

export const FavoritesContext = createContext({} as ContextProps);

export function FavoritesProvider({ children }: { children: ReactNode }) {

    const [favorites, setFavorites] = useState<Book[]>([]);

    function addBookInFavorites(book: Book) {
        setFavorites([...favorites, book]);
    }

    function removeBookOnFavorites(id: string) {
        const filteredBooks = favorites.filter((book) => book.id !== id);
        setFavorites(filteredBooks);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addBookInFavorites, removeBookOnFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}
