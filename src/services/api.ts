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
    const response = await axios.post('http://localhost:3000/auth', { email: formData.email, password: formData.password })
    return await response.data;
}

export async function registerUser(formData: { full_name: string, email: string, password: string, confirm_password: string }) {
    const response = await axios.post('http://localhost:3000/users', { full_name: formData.full_name, email: formData.email, password: formData.password, confirm_password: formData.confirm_password }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.data;
}
