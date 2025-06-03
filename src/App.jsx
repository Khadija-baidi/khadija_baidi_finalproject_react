import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import Sale from './pages/sale.jsx';
import Blog from './pages/blog.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;