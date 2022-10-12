import React from 'react';
import useAllItems from '../../hooks/useAllItems';
import EachItem from '../EachItem/EachItem';
import './Inventory.css'
import {MdAddToPhotos} from 'react-icons/md'
import {  useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";
import Zoom from 'react-reveal/Zoom';



const Inventory = () => {

        const [items,setAllItems,done]=useAllItems()
        // console.log(items)

        const navigate=useNavigate()

        const handleAddbtn=()=>{
            navigate('/addItems')
        }

    return (
        <div className='inventory-container'>
            <h1 className='text-center my-4 mb-4'><span className='underline-2 px-3
            py-2'>Manage</span> Your <span className='underline px-3
            py-2'> Inventory</span></h1> 
           <div className='add-button'>
           <button onClick={handleAddbtn}  className='my-4 add-btn'>Add item<MdAddToPhotos className='mb-1 ms-2'></MdAddToPhotos></button>
           </div>
           {!done ? (
          <ReactLoading className='loading1' type={"balls"} color={"crimson"} height={200} width={200}/>
        ) : (
            <Zoom>
            <div className="allItems">
            {
                items.map(eachItem=><EachItem key={eachItem._id} eachItem={eachItem}></EachItem>)
            }
        </div>
        </Zoom>
         
        )}
     
        </div>
    );
};

export default Inventory;   


