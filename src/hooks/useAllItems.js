import React, { useEffect, useState } from 'react';

const useAllItems = () => {
    const [items,setAllItems]=useState([]);
    const[done,setDone]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://enigmatic-forest-36010.herokuapp.com/items')
                .then(res => res.json())
                .then(data => {
                    setAllItems(data);
                    setDone(true)
                })
        },2000)
            })
    return [items,setAllItems,done,setDone]
};

export default useAllItems;