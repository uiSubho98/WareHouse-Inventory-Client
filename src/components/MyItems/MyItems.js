import React from 'react';
import useUserItems from '../../hooks/useUserItems';
import UserItem from '../UserItem/UserItem';
import './MyItems.css'
const MyItems = () => {
const[myItems,setMyItems,user]=useUserItems()



    return (
        <div className='myItems-container container'>
        {
            myItems?.length?<h2 className='text-center'>Total Items:{myItems.length}</h2>:<h2 className='text-center'>Please Add Your Item</h2>
        }

        {
            myItems.map(myItem=><UserItem key={myItem?._id} myItem={myItem}></UserItem>)
        }

        </div>
    );
};

export default MyItems;