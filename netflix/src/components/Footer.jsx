import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-6">
        {/* Footer Links */}
        

       

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Netflix, Inc. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
