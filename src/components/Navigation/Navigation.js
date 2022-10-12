import React from "react";
import "./Navigation.css";
import { BsBoxSeam } from "react-icons/bs";
import {FaUser} from 'react-icons/fa'
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.init";
import { signOut } from "firebase/auth";
import Slide from 'react-reveal/Slide';


const Navigation = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <Slide Left>
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div  className="logo"><BsBoxSeam className='me-2'></BsBoxSeam>
        DEPO<strong className="text-danger">SITO</strong>
      </div>
      <ul className="links">
        <li>
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/inventory">Inventory</CustomLink>
        </li>
        <li>
          <CustomLink to="/blogs">Blogs</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
                    {
                    user?<CustomLink to='/addItems'>Add Items</CustomLink> :'' 
                    
                    }</li>
        <li>
                    {
                    user?<CustomLink to='/myItems'>My Items</CustomLink> :'' 
                    
                    }</li>
                    

                <li>{
                    user?<span>
                    <button onClick={()=>logout()} className='ms-1 signOut'><img className='user-icon ' src={user.photoURL} alt=''/><span className='text-danger'><FaUser className='me-2 mb-1'></FaUser>SignOut</span></button>
                    </span>: <CustomLink to='/login'><FaUser className='me-2 mb-1'></FaUser>Sign In</CustomLink>
                    
                    }</li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
    </Slide>
  );
};

export default Navigation;
