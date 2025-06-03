import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import Sale from './pages/sale.jsx';
import Nav from './layouts/nav.jsx';
import Footer from './layouts/footer.jsx';


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;