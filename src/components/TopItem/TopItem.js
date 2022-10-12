import React from 'react';
import './TopItem.css'
import {MdOutlineManageSearch}from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


const TopItem = ({item}) => {
  const navigate=useNavigate();
    const {picture,description,quantity,supplierName,name,price,_id}=item;

  const handleManage=(id)=>{
    console.log(id)
    navigate(`/inventory/${id}`)
  }

    return (
        <div>
            <div className="card-top shadow">
  <img className="card-img-top w-70 p-2 mx-auto image_item" src={picture} alt='item_image'/>
  <div className="card-body">
    <h5 className="card-title text-center text-primary">{name}</h5>
    <hr />
    <p className="card-text text-success">{description}</p>
    <p><span className='fw-bold text-danger'>Supplier Name:</span> {supplierName}</p>
    <p><span className='fw-bold text-success'>Quantity:</span> {quantity} pieces</p>
    <p><span className='fw-bold text-success'>Price:</span> $ {price}</p>
    <div className="text-center">
    <button onClick={()=>handleManage(_id)} className="custom-btn btn-12 mx-auto"><span>Click!</span><span>Manage<MdOutlineManageSearch className='topicons'></MdOutlineManageSearch></span></button>
    </div>
  </div>
</div>
           
        </div>
    );
};
export default TopItem;
