import React from "react";
import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Reservation</li>
            <li>Products</li>
          </ul>
          <img src="sidehustle.jpg" alt="logo" className="shlogo" />
          <ul className="nav-list2">
            <li>Menu</li>
            <li>Recipe</li>
            <li>Blogs</li>
            <li>Contact Us</li>
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
            <a href="">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Reservation</li>
            </a>
            <a href="#">
              <li>Products</li>
            </a>
            <a href="#">
              <li>Menu</li>
            </a>
            <a href="#">
              <li>Recipe</li>
            </a>
            <a href="#">
              <li>Blogs</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
