import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter,faFacebook,faInstagram,faPinterest,faVimeo } from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faFacebook,faInstagram,faPinterest,faVimeo} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (



  <footer class="bg-dark">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
          <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul class="list-inline mt-4 h4">
            <li class="list-inline-item"><a href="#" class="air-brand" target="_blank"  title="twitter"><FontAwesomeIcon icon={faTwitter}/></a></li>
            <li class="list-inline-item"><a href="#" class="air-brand" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li class="list-inline-item"><a href="#" class="air-brand" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li class="list-inline-item"><a href="#" class="air-brand" target="_blank" title="pinterest"><FontAwesomeIcon icon={faPinterest}/></a></li>
          </ul>
        </div>
        {/* <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
            <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Stores</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
          </ul>
        </div> */}
        <div class="col-lg-4 col-md-4 mb-4 mb-lg-0">
          <h6 class="text-uppercase air-brand font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Hotels</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 mb-lg-0">
          <h6 class="text-uppercase air-brand font-weight-bold mb-4">Newsletter</h6>
          <p class="text-muted mb-3">For any kind needed news about us you can Email us.We are always beside you</p>
          <a href="#" title="Personal Email address" class="text-muted">azizulhakimtumzid0793@gmail.com</a>
          {/* <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    {/* <!-- Copyrights --> */}
    <div class=" py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">Developed and Managed by <a target="_blank" rel="noreferrer" title="Personal Website" href="https://personal-portfolio-74d3d.firebaseapp.com/">Tamzid</a>. Copyright © {new Date().getFullYear()} all rights reserved.</p>
      </div>
    </div>
  </footer>
    );
};

export default Footer;