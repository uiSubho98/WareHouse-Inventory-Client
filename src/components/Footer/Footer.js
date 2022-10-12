import React from 'react';
import './Footer.css'
import {FcGoogle} from 'react-icons/fc'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='footer-container footer'>
             <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About Deposito</span> Deposito provides all the facility like a warehouse gives to you.You can see your orders,manage items,and you can add your products with your desired quantity.
    </p>
    <div className="icons">
      <a href="/"><FcGoogle className='footer-icons '></FcGoogle></a>
      <a href="/"><BsTwitter className='footer-icons'></BsTwitter></a>
      <a href="/"><BsLinkedin className='footer-icons'></BsLinkedin></a>
      <a href="/"><BsInstagram className='footer-icons'></BsInstagram></a>
      <a href="/"><BsGithub className='footer-icons'></BsGithub></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>16, Jamunalal Bajaj Street, Dalhousie, Bortola, Barabazar Market, Kolkata, West Bengal 700007</span> Kolkata, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+91)16755 856 956</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="/">dsubhojit063@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2><span className='ms-5'>Deposito</span></h2>
    <p className="menu ms-5 ">
      <Link to="/"> Home</Link> |
      <Link className='mx-2' to="/blogs">Blogs</Link> |
      <Link className='mx-2' to="/inventory">Inventory</Link> |
      <Link className='mx-2' to="/signUp">Sign Up</Link>
    </p>
    <p className="name ms-5 last-section"> Deposito &copy; 2022</p>
  </div>
    </footer>
    );
};

export default Footer;