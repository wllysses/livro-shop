import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { BookDetails } from '../pages/BookDetails';
import { ShoppingCart } from '../pages/ShoppingCart';
import { MyFavorites } from '../pages/MyFavorites';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/livros/:id" element={ <BookDetails />} />
                <Route path="/favoritos" element={ <MyFavorites /> } />
                <Route path="/carrinho-compras" element={ <ShoppingCart /> } />
            </Routes>
        </BrowserRouter>
    );
}
