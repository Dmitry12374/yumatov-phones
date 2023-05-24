import {Routes, Route, BrowserRouter} from "react-router-dom";

import Footer from "./ui/Footer";

import Main from "./pages/Main";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Find from "./pages/Find";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Product from "./pages/Product";

function App() {
    const products = [
        {
            id: 1,
            name: 'Смартфон',
            image: "phone1.webp",
            price: 100
        },
        {
            id: 2,
            name: 'Смартфон',
            image: "phone2.webp",
            price: 1002
        },
        {
            id: 3,
            name: 'Смартфон',
            image: "phone3.webp",
            price: 1003
        },
        {
            id: 4,
            name: 'Смартфон',
            image: "phone4.webp",
            price: 1004
        },
        {
            id: 5,
            name: 'Смартфон',
            image: "phone5.webp",
            price: 1005
        },
        {
            id: 6,
            name: 'Смартфон',
            image: "phone6.webp",
            price: 1006
        },
        {
            id: 7,
            name: 'Смартфон',
            image: "phone7.webp",
            price: 1007
        },
        {
            id: 8,
            name: 'Смартфон',
            image: "phone8.webp",
            price: 1008
        },
        {
            id: 9,
            name: 'Смартфон',
            image: "phone9.webp",
            price: 1009
        },
        {
            id: 10,
            name: 'Смартфон',
            image: "phone10.webp",
            price: 1000
        },
        {
            id: 11,
            name: 'Смартфон',
            image: "phone11.webp",
            price: 10011
        },
        {
            id: 12,
            name: 'Смартфон',
            image: "phone12.webp",
            price: 10012
        },
        {
            id: 13,
            name: 'Смартфон',
            image: "phone13.webp",
            price: 10013
        },
        {
            id: 14,
            name: 'Смартфон',
            image: "phone14.webp",
            price: 10014
        },
        {
            id: 15,
            name: 'Смартфон',
            image: "phone15.webp",
            price: 10015
        },
        {
            id: 16,
            name: 'Смартфон',
            image: "phone16.webp",
            price: 10016
        },
        {
            id: 17,
            name: 'Смартфон',
            image: "phone17.webp",
            price: 10017
        },
        {
            id: 18,
            name: 'Смартфон',
            image: "phone18.webp",
            price: 10018
        },
        {
            id: 19,
            name: 'Смартфон',
            image: "phone19.webp",
            price: 10019
        },
        {
            id: 20,
            name: 'Смартфон',
            image: "phone20.webp",
            price: 10020
        }
    ]

  return (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Main products={products}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalog" element={<Catalog products={products}/>}/>
            <Route path="/find" element={<Find/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/product/:id" element={<Product products={products}/>}/>

            <Route path="*" element={
                <h1 style={{textAlign: "center", margin: "400px 0"}}>/404/ - - - Страница не найдена - - - /404/</h1>
            }/>
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
