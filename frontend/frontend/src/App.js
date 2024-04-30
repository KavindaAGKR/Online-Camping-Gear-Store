import React from 'react';
import './App.css';
0
import { Cart } from './pages/cart/cart';
import Footer from './components/footer';
import Header from './components/header';
import GroupOne from './components/group01';
import { ShopContextProvider } from './context/shop-context.jsx';
import About from './pages/about/about';
import Account from './components/Account/Account';
import { Shop } from './pages/shop/shop';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './pages/home/home';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

function HomeLayout() {
  return (
    <>
      <GroupOne />
      <Home />
    </>
  );
}

export default App;
