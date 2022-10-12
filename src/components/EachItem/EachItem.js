import React from 'react';
import './EachItem.css'
import useAllItems from '../../hooks/useAllItems';
import { ToastContainer, toast } from 'react-toastify';

const EachItem = ({eachItem}) => {
    const [items,setAllItems]=useAllItems()
    const{name,price,quantity,supplierName,description,_id,picture}=eachItem;
    const handleDelete=(id)=>{
        const proceed = window.confirm(`Are You Sure You Want To Delete ${name}?`)
        if(proceed){
            console.log(id)
            const url =`https://enigmatic-forest-36010.herokuapp.com/items/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0)
                toast("Item Deleted");
                const remaining = items.filter(itemRemaining=>itemRemaining._id!== id);
                setAllItems(remaining)})
        }
    }
    return (
        <div className='container'>
        <div className="card shadow mb-5 ">
<img className="card-img-top w-50 mt-4 mx-auto" alt='item_image' src={picture}/>
<div className="card-body">
<h5 className="card-title  text-center text-primary">{name}</h5>
<hr />
<p className="card-text text-success">{description}</p>
<p><span className='fw-bold text-danger'>Supplier Name:</span> {supplierName}</p>
<p><span className='fw-bold text-success'>Quantity:</span> {quantity} pieces</p>
<p><span className='fw-bold text-success'>Price:</span> $ {price}</p>
<div className="text-center">

<button onClick={()=>handleDelete(_id)} className="noselect delete-btn"><span className='text-white ms-4'>Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button>
</div>
</div>
</div>
<ToastContainer />
    </div>
    );
};

export default EachItem;