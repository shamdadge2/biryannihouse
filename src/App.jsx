import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import Conatctus from './components/Conatctus'
import AboutUs from './components/AboutUs'
import Variety from './components/Variety'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailInfoDish from './components/DetailInfoDish'

function App() {
  const biryanis = [
    {
      id: 1,
      title: "Chicken Dum Biryani",
      ingredients: "Basmati Rice, Chicken, Yogurt, Onions, Spices, Saffron",
      ratings: 4.8,
      price: 299,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },
    {
      id: 2,
      title: "Hyderabadi Chicken Biryani",
      ingredients: "Basmati Rice, Chicken, Mint, Coriander, Fried Onions, Spices",
      ratings: 4.9,
      price: 349,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969"
    },
    {
      id: 3,
      title: "Chicken Tikka Biryani",
      ingredients: "Basmati Rice, Chicken Tikka, Yogurt, Spices, Mint",
      ratings: 4.7,
      price: 329,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
      id: 4,
      title: "Mutton Dum Biryani",
      ingredients: "Basmati Rice, Mutton, Yogurt, Saffron, Fried Onions",
      ratings: 4.9,
      price: 449,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1596797038530-2c107aa2d96c"
    },
    {
      id: 5,
      title: "Mutton Keema Biryani",
      ingredients: "Basmati Rice, Minced Mutton, Spices, Mint, Onions",
      ratings: 4.6,
      price: 399,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    },
    {
      id: 6,
      title: "Prawns Biryani",
      ingredients: "Basmati Rice, Prawns, Garlic, Ginger, Spices",
      ratings: 4.7,
      price: 429,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec"
    },
    {
      id: 7,
      title: "Fish Biryani",
      ingredients: "Basmati Rice, Fish Fillets, Spices, Mint, Lemon",
      ratings: 4.5,
      price: 379,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d"
    },
    {
      id: 8,
      title: "Egg Biryani",
      ingredients: "Basmati Rice, Boiled Eggs, Onions, Tomatoes, Spices",
      ratings: 4.4,
      price: 249,
      type: "Non-Veg",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
    },
    {
      id: 9,
      title: "Paneer Biryani",
      ingredients: "Basmati Rice, Paneer, Yogurt, Mint, Spices",
      ratings: 4.5,
      price: 279,
      type: "Veg",
      icon: "🟢",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
    },
    {
      id: 10,
      title: "Veg Dum Biryani",
      ingredients: "Basmati Rice, Mixed Vegetables, Mint, Saffron, Spices",
      ratings: 4.3,
      price: 259,
      type: "Veg",
      icon: "🟢",
      image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969"
    }
  ];

  return (
    <BrowserRouter>
      <Header></Header>
      <Navbar />
      {/* <Dishes dishes={biryanis}/> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/order-now' element={<Dishes dishes={biryanis}/>}></Route>

        <Route path='/variety' element={<Variety />} />
        <Route path='/contact-us'  element={<Conatctus />} />
        <Route path='/about-us' element={<AboutUs />}></Route>

        <Route path='/detail-info/:ID' element={<DetailInfoDish  biryanis={biryanis} />}></Route>


      </Routes>


      <Footer />
    </BrowserRouter>
  )
}

export default App