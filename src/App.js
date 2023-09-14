import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import AuctionPage from './pages/AuctionPage';
import SingleAuctionProductPage from './pages/SingleAuctionProductPage';
import BidPlacement from './pages/BidPlacment';
import LoginPage from './pages/LoginPage';
import UserHomePage from './pages/UserPages/UserHomePage';
import AdminHomePage from './pages/AdminPages/AdminHomepage';
import { UserProvider } from './context/user_context';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  // localStorage.setItem('userName', null);
  return (
    <RecoilRoot>
      <UserProvider>
        <AuthWrapper>
          <Router>
            {/* <Navbar /> */}
            <Sidebar />
            <Routes>



              <Route path='/' exact element={<Home />} />
              <Route path='AuctionPage' element={<AuctionPage />} />
              <Route path='UserHomePage' element={<UserHomePage />} />
              <Route path='AdminHomePage' element={<AdminHomePage />} />
              <Route path='SingleAuctionProductPage' element={<SingleAuctionProductPage />} />
              <Route path='LoginPage' element={<LoginPage />} />
              <Route path='BidPlacement' element={<BidPlacement />} />
              <Route path='about' element={<About />} />
              <Route path='cart' element={<Cart />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<SingleProduct />} />
              <Route
                path='checkout'
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </AuthWrapper>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
