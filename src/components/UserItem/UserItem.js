import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import useUserItems from '../../hooks/useUserItems';
import './UserItem.css'

const UserItem = ({myItem}) => {
    const {name,picture,description,supplierName,quantity,price,_id}=myItem;
    const [user, loading, error] = useAuthState(auth);
    const [myItems,setMyItems] = useUserItems()

    const handleDelete=(id)=>{
        const proceed = window.confirm(`Are You Sure You Want To Delete ${name}?`)
        if(proceed){
            console.log(id)
            const url =`https://enigmatic-forest-36010.herokuapp.com/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0)
                alert("Item Deleted");
                const remaining = myItems.filter(itemRemaining=>itemRemaining._id!== id);
                setMyItems(remaining)})
        }
    }
    return (
         <div className="card-container">
  <table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Event</th>
      <th scope="col">Product Name</th>
      <th scope="col">Cost</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{user?user.displayName:user.email}</th>
      <td><button onClick={()=>handleDelete(_id)} className='del-btn'>DELETE</button></td>
      <td>{name}</td>
      <td>{price}</td>
      <td className='float-right'><img src={picture} className='img-fluid myItem-image w-50' alt="" /></td>
    </tr>
    </tbody>
</table>
        </div>
    );
};

export default UserItem;