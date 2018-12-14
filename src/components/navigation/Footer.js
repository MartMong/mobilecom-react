import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="p-3 mb-2 bg-dark text-white">
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <Link to="/"> MOShop.com</Link>
      </div>
    </footer>

  )
}

export default Footer;