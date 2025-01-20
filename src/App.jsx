import NavBar from './assets/NavBar';
import Product from './assets/Product';
import Home from './assets/Home';
import Shop from './assets/Shop';
import About from './assets/About';
import Footer from './assets/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

const AppWithRouter = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isHome && <Footer />}
    </>
  );
}

export default App;
