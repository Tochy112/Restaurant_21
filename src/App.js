import './App.css';
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/Home'
import About from './Components/About/about'
// import Products from './Components/Products/Product'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/about" element={<About />}/>
            {/* <Route  path="/products" element={<Products />}/> */}
            <Route  path="/contact" element={<Contact />}/>
          </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
