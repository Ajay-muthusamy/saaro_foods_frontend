import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-poppins">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()}  Company. All rights reserved.</p> {/* Copyright text */}
      </div>
    </footer>
  );
};

export default Footer;
