import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import AuctionPage from './pages/AuctionPage';
import SingleAuctionProductPage from './pages/SingleAuctionProductPage';
import BidPlacement from './pages/BidPlacment';
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
  return (
    <RecoilRoot>
      <AuthWrapper>
        <Router>
          {/* <Navbar /> */}
          <Sidebar />
          <Routes>

          
           
            <Route path='/' exact element={<Home />} />
            <Route path='AuctionPage' element={<AuctionPage />} />
            <Route path='SingleAuctionProductPage' element={<SingleAuctionProductPage />} />
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
    </RecoilRoot>
  );
}

export default App;
