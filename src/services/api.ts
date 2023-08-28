import axios from 'axios';
import { Book } from '../interfaces';

const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

export async function getBooks(genre: string): Promise<Book[]> {
    const response = await api.get(`?q=${genre}`);
    return await response.data.items;
}

export async function getBook(id: string) {
    const response = await api.get(`/${id}`);
    return await response.data;
}

export async function authUserLogin(formData: { email: string, password: string }) {
    const response = await api.post('http://localhost:3000/auth', { email: formData.email, password: formData.password })
    return await response.data;
}