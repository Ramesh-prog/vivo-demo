import './App.css';
import Navbar from './partials/Navbar/navbar';
import Footer from './partials/Footer/footer';
import Home from './components/HomePage/homepage';
import Products from './components/HomePage/Productpage';
import Store from './components/HomePage/Storepage';
import Vivostore from './components/HomePage/Vivostore';
import Community from './components/HomePage/Community';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/src/components/HomePage/productpage.js' exact element={<Products />} />
          <Route path='/src/components/HomePage/Storepage.js' exact element={<Store />} />
          <Route path='/src/components/HomePage/Vivostore.js' exact element={<Vivostore />} />
          <Route path='/src/components/HomePage/Community.js' exact element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
