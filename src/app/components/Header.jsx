"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    // Toggle the 'offcanvason' class on the body element
    document.body.classList.toggle("offcanvason");

    // Toggle the 'active' class on the 'menu-zone' div
    const menuZone = document.getElementById("menu-zone");
    if (menuZone) {
      menuZone.classList.toggle("active");
    }

    // Update the state to keep track of the menu's active state
    setIsMenuActive(!isMenuActive);
  };

  const removeMenuClasses = () => {
    // Remove the 'offcanvason' class from the body element
    document.body.classList.remove("offcanvason");

    // Remove the 'active' class from the 'menu-zone' div
    const menuZone = document.getElementById("menu-zone");
    if (menuZone) {
      menuZone.classList.remove("active");
    }

    // Update the state to indicate that the menu is not active
    setIsMenuActive(false);
  };
  return (
    <>
      <span
        id="menu-zone"
        href=""
        class="js-oliven-nav-toggle oliven-nav-toggle"
        onClick={toggleMenu}
      >
        <i></i>
      </span>
      <aside id="oliven-aside">
        <div class="oliven-logo">
          <a href="/">
            <img src="images/logo.png" alt="" />
            <span>Jess &amp; &nbsp; Russ</span>
            <h6>22.04.2024</h6>
          </a>
        </div>

        <nav class="oliven-main-menu">
          <ul>
            <li>
              <a href="#venue">Venue</a>
            </li>
            <li>
              <a href="#timings">Timings for the day</a>
            </li>
            <li>
              <a href="#transport">Transport</a>
            </li>
            <li>
              <a href="#stay">Stay</a>
            </li>
            <li>
              <a href="#gifts">Gifts</a>
            </li>
            <li>
              <a href="#todo">Things to see and do</a>
            </li>
            <li>
              <a href="#rsvp">RSVP</a>
            </li>

            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </nav>

        <div class="footer1">
          <img src="/cat.png" id="caticon" /> <span class="separator"></span>
          <p>
            Jess &amp; Russ wedding
            <br />
            22 April 2024, Tetbury
          </p>
        </div>
      </aside>
    </>
  );
}
