import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-red mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Scribble
    </footer>
  );
};

export default Footer;
