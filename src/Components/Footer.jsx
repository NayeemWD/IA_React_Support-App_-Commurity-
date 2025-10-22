import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#252438] text-neutral-content items-center p-4 px-64">
        <aside className="grid-flow-col items-center pl-2">
          <img src="../../public/Images/Footer/S 1.png" alt="" />

          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="">Home</a>
          <a href="">Supports</a>
          <a href="">Supports</a>
          <a href="">Marketing</a>
          <a href="">FAQ</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
