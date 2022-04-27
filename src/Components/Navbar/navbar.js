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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
          <Link to="/" className="nav-link">
            <img src="sidehustle.jpg" alt="logo" className="shlogo" />
          </Link>
          <ul className="nav-list2">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Recipe</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
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
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/contact">Reservation</a>
            </li>

            <li>
              <a href="/products">Products</a>
            </li>

            <li>
              <a href="/products">Menu</a>
            </li>

            <li>
              <a href="/">Recipe</a>
            </li>

            <li>
              <a href="/">Blogs</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
