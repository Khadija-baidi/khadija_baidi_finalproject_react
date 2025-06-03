import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Nav from './layouts/nav.jsx';
import Footer from './layouts/footer.jsx';


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;