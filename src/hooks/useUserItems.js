import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/Firebase.init';

const useUserItems = () => {
    const [user] = useAuthState(auth);
    const [myItems,setMyItems]=useState([])
    
        useEffect(()=>{
            const url = 'https://enigmatic-forest-36010.herokuapp.com/user';
            fetch(url,{
                headers: {
                    'authorization': `${user?.email} ${localStorage.getItem('token')}`
                }
            })
            .then(res=>res.json())
            .then(data=>  {
                if(data.success==="unauthorized access"){
                    alert('add your items')
                }
                else{
                    setMyItems(data)
                }
                   
            })
        },[user?.email,myItems])
        return [myItems,setMyItems,user]
};

export default useUserItems;