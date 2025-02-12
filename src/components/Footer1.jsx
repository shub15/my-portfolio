import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Shubham Maity. All Rights Reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="#" className="mx-2 hover:text-blue-400">LinkedIn</a>
          <a href="#" className="mx-2 hover:text-blue-400">GitHub</a>
          <a href="#" className="mx-2 hover:text-blue-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;