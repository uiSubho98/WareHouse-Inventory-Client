import { useEffect, useState } from "react"

const useItems =(number)=>{
    const [items,setItems]=useState([]);
    const[done,setDone]=useState(false)
    useEffect(()=>{
setTimeout(()=>{
    fetch('https://enigmatic-forest-36010.herokuapp.com/items')
        .then(res => res.json())
        .then(data => {
            const topItem = data.slice(0,number)
            setItems(topItem);
            setDone(true)
        })
},2000)
    })
    return  [items,setItems,done,setDone]  
        
}
export default useItems;