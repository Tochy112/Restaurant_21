import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openMenu = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div>
      <nav id="nav">
        <div className="nav-flex">
          <ul className="nav-list1">
            <li> <Link  to="/" className="nav-link">Home</Link> </li>
            <li> <Link  to="/about" className="nav-link"> About</Link></li>
            <li> <Link to="/" className="nav-link">Reservation</Link> </li>
            <li> <Link  to="/products" className="nav-link"> Products</Link></li>
          </ul>
          <Link to="/" className="nav-link"><img src="sidehustle.jpg" alt="logo" className="shlogo" /></Link> 
          <ul className="nav-list2">
            <li> <Link to="/" className="nav-link">Menu</Link></li>
            <li><Link to="/" className="nav-link">Recipe</Link></li>
            <li><Link to="/" className="nav-link">Blogs</Link></li>
            <li><Link  to="/contact" className="nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      <nav className="nav2">
        <div className="nav-flex2">
          <img src="sidehustle.jpg" alt="logo" className="shlogo" />
          <span class="ham" onClick={() => openMenu()}>
            &#9776;
          </span>
        </div>
        {navbarOpen ? (
          <ul className="nav-list3">
            
            <li> <Link  to="/" className="nav-link">Home</Link></li>
          
            <li> <Link  to="/about" className="nav-link">About</Link></li>
          
            <li><Link to="/" className="nav-link">Resrvation</Link></li>
          
            <li> <Link  to="/products" className="nav-link">Products</Link></li>
          
            <li><Link to="/" className="nav-link">Menu</Link></li>
          
            <li><Link to="/" className="nav-link">Recipe</Link></li>
          
            <li><Link to="/" className="nav-link">Blogs</Link></li>
            
            <li> <Link  to="/contact" className="nav-link">Contact Us</Link></li>
            
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
