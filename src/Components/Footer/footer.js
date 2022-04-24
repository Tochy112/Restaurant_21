import React from "react";

const footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-flex">
          <div className="ff1">
            <h2>Address:</h2>
            <p>Kilimanjaro Retaurant</p>
            <p>153 Ikot Ekpene road, Uyo</p>
          </div>
          <div className="ff2">
            <h2>Reservation:</h2>
            <p>08012345678</p>
            <p>kilimanjaro@gmail.com</p>
          </div>
          <div>
            <h2>Open Hours:</h2>
            <p>Monday - Friday: 10AM - 11PM</p>
            <p>Saturday - Sunday: 9AM - 1PM</p>
          </div>
        </div>
        <div className="footer-icons">
          <span class="iconify" data-icon="brandico:instagram"></span>
          <a href="#">
            <span class="iconify" data-icon="brandico:facebook"></span>
          </a>
          <a href="#">
            <span class="iconify" data-icon="brandico:twitter-bird"></span>
          </a>
          <a href="mailto:kilifoods@gmail.com">
            <span class="iconify" data-icon="ci:mail"></span>
          </a>
          <p>copyright @2022 Kilimanjaro Restaurant</p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
