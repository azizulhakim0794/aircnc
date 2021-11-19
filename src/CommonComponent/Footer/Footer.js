import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (



    <footer className="bg-dark">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3" />
            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <ul className="list-inline mt-4 h4">
              <li className="list-inline-item"><a href="https://twitter.com/?lang=en" rel="noreferrer" className="air-brand" target="_blank" title="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className="list-inline-item"><a href="https://www.facebook.com" rel="noreferrer" className="air-brand" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com" rel="noreferrer" className="air-brand" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li className="list-inline-item"><a href="https://www.pinterest.com/" rel="noreferrer" className="air-brand" target="_blank" title="pinterest"><FontAwesomeIcon icon={faPinterest} /></a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
            <h6 className="text-uppercase air-brand font-weight-bold mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><p className="text-muted">Login</p></li>
              <li className="mb-2"><p className="text-muted">Register</p></li>
              <li className="mb-2"><p className="text-muted">Wishlist</p></li>
              <li className="mb-2"><p className="text-muted">Our Hotels</p></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-lg-0">
            <h6 className="text-uppercase air-brand font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-3">For any kind needed news about us you can Email us.We are always beside you</p>
            <a href="https://mail.google.com/mail/u/0/#inbox" title="Personal Email address" className="text-muted">azizulhakimtumzid0793@gmail.com</a>
          </div>
        </div>
      </div>

      {/* <!-- Copyrights --> */}
      <div className=" py-4 text-white">
        <div className="container text-center">
          <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by <a href="https://azizul-hakim01.firebaseapp.com" className="text-white" rel="noreferrer" target="_blank">Tamzid</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;