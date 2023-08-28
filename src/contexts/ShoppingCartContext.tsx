import { ReactNode, createContext, useState } from "react";
import { Book } from "../interfaces";

interface ContextProps {
    books: Book[]
    addBook: (book: Book) => void
    removeBook: (id: string) => void
}

export const ShoppingCartContext = createContext({} as ContextProps);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {

    const [books, setBooks] = useState<Book[]>([]);

    function addBook(book: Book) {
        setBooks([...books, book]);
    }

    function removeBook(id: string) {
        const filteredBooks = books.filter((book) => book.id !== id);
        setBooks(filteredBooks);
    }

    return (
        <ShoppingCartContext.Provider value={{ books, removeBook, addBook }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
