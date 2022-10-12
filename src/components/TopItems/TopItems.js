import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hooks/useItems";
import TopItem from "../TopItem/TopItem";
import "./TopItems.css";
import Slide from "react-reveal/Slide";
import { MdInventory2 } from "react-icons/md"

import ReactLoading from "react-loading";

const TopItems = () => {
  const [items, setItems, done, setDone] = useItems(6);

 


  return (
    <div className='top-items-container'>
      <span className="text-center items-text  "><h1 >Our Top Items</h1>
      </span>

      {!done ? (
        <ReactLoading
          className="loading"
          type={"balls"}
          color={"crimson"}
          height={100}
          width={100}
        />
      ) : (
    
        <Slide right>
          <div className="top-items">
            {items.map((item) => (
              <TopItem key={item._id} item={item}></TopItem>
            ))}
          </div>
        </Slide>
  
      )}

      <Link className="no-link animated-button1" to="/inventory">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Manage Inventory
        <MdInventory2 className="manage-icon ms-2 mb-1"></MdInventory2>
      </Link>
      <hr></hr>
    </div>
  );
};

export default TopItems;
