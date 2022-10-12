import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase/Firebase.init';
import useAllItems from '../../hooks/useAllItems';
import './AddItems.css'
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
    const [items,setAllItems,done,setDone]=useAllItems()
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    const handleAddItem=(event)=>{
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const supplierName = event.target.supplierName.value;
        const description = event.target.description.value;
        const item ={name,picture,quantity,price,supplierName,description,email}

        //send data to backend
        fetch('https://enigmatic-forest-36010.herokuapp.com/items',{
            method:'POST',
            headers: {
                'authorization': `${user?.email} ${localStorage.getItem("token")}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data => {
            setAllItems(data);
            toast.success('Item Added Successfully')
        })

        fetch('https://enigmatic-forest-36010.herokuapp.com/user',{
            method:'POST',
            headers: {
                'authorization': `${user?.email} ${localStorage.getItem("token")}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
        })


        event.target.reset()
    }
    return (
       <div className='add-items-container d-flex'>
      <Fade left>
      <div className="left-add">
       <section>
	<div className="content-add">
		<h2>Add Your Item</h2>
		<h2>Add Your Item</h2>
	</div>
</section>
       </div>
      </Fade>
      <Fade right>

      <div className="right-add">
            <div id="feedback-form">
  <h2 className="header">Add Your Item</h2>
  <div className='form-coAdd Your Itemner'>
    <form onSubmit={handleAddItem} >
    <input type="text" name="email" value={user?.email} disabled readOnly required></input>
      <input type="text" name="name" placeholder="Name Of Your Product" required></input>
      <input type="url" placeholder='Image Link: https://example.com' name="picture" pattern="https://.*" required></input>
      <input type="number" placeholder='Quantity' name="quantity" required></input>
      <input type="number" placeholder='Price' name="price" required></input>
      <input type="text" name="supplierName" placeholder="Supplier Name" required></input>
      <textarea id="w3review" name="description" rows="1" cols="50" placeholder='Short Description' required></textarea>
      <button type="submit">ADD</button>
    </form>
  </div>
</div>
       </div>

      </Fade>
<ToastContainer />
        </div>
       
     
    );
};

export default AddItems;