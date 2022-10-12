import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SelectedItem.css';
import { MdInventory2 } from "react-icons/md";
import {GiDeliveryDrone} from "react-icons/gi";
import Bounce from 'react-reveal/Bounce';
import { ToastContainer, toast } from 'react-toastify'

const SelectedItem = () => {
    const {id}=useParams();
    const [item,setItem]=useState({})
    const[userQuantity,setUserQuantity]=useState(null)
    useEffect(()=>{
        const url=`https://enigmatic-forest-36010.herokuapp.com/items/${id}`
        fetch(url)
        .then( res => res.json())
        .then(data=>{
            setItem(data)})
    },[item])
    const {picture,description,quantity,supplierName,name,price}=item;




    const Quantity= parseInt(item.quantity);
const handleDeliver=()=>{
if(Quantity>0){
  const newQuantity =Quantity - 1;
  const deliverQuantity={newQuantity}
  const url =`https://enigmatic-forest-36010.herokuapp.com/items/${id}`;
  fetch(url,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(deliverQuantity)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
       toast.success('Item delivered,Thank You')
      }
      console.log(data)
    })
}
else{
  toast.error('Item Out Of Stock')
}
   
}

const getInputValue = (event)=>{
    const userValue = event.target.value;
   setUserQuantity(userValue);
};
const handleAdd=()=>{
  if(userQuantity && userQuantity>0){
    const newQuantity = parseInt(Quantity)+parseInt(userQuantity);
    const setQuantity={newQuantity}
    const url =`https://enigmatic-forest-36010.herokuapp.com/items/${id}`;
    fetch(url,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(setQuantity)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          toast.success('Item Quantity Added')
        }
      
      console.log(data)
    })
  }
  else{
    toast.error('Please Give Valid Data')
  }
    
 

}


    var animateButton = function(e) {
        e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }
    return (
        <>
        <div className='selectedItem-container container'>
            <Bounce left>
            <div className="item-specs">
     <h1><span className='text-primary'>Name: </span>{name}</h1>
     <p className='fw-bold'><span className='text-info'>Description:</span>{description}</p>
     <p  className='fw-bold'><span  className='text-danger'>Price:  </span> $ {price}</p>
     <p  className='fw-bold'><span  className='text-success'>Quantity: </span>{quantity>0?<>{quantity}</>:<p className='text-danger'>SOLD OUT</p>} pieces</p>
     <p  className='fw-bold'><span  className='text-primary'>Supplier Name: </span>{supplierName}</p>
     <button className="bubbly-button" onClick={handleDeliver} >Deliver<GiDeliveryDrone className='drone-deliver'></GiDeliveryDrone></button><br></br>
 <div className='mt-2 mx-2'>
    <label  className='me-2'>Set Quantity:</label>
    <input type="number"  onChange={getInputValue} style={{width:'120px'}} required /><br></br>
    </div>
    <button onClick={handleAdd} className='bubbly-button'>Re-Stock</button>
 </div>

</Bounce>
       
       
          <Bounce right>

          <div className="item-image">
               <img src={picture} className='w-70 img-fluid'  alt="" />
           </div>

          </Bounce>
        </div>
        <Link className="no-link inventory-btn animated-button1" to="/inventory">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Manage Inventory
        <MdInventory2 className="manage-icon ms-2 mb-1"></MdInventory2>
      </Link>

      <ToastContainer></ToastContainer>
        </>
        
    );
};

export default SelectedItem;