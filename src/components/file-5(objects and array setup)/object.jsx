import { useState } from "react"

function Object(){
    const [store, setStore] = useState({
        iteam: 'Bag',
        market:{
            price: 3000,
            sales: 200
        }
    });

    function iteamHandler(value){
        setStore(perv=>({
            ...perv,
            iteam: value
        }))
    }

    function priceHandler(value){
        setStore(perv=>({
            ...perv,
            market:{
                ...perv.market,
                price:value
            }
        }))
    }

    function salesHandler(value){
        
    }

    return(
        <>
            <h1>Iteam: {store.iteam}</h1>
            <h1>Price: ${store.market.price}</h1>
            <h1>Sales: {store.market.sales}</h1>
            <hr />
        <input type="text" placeholder="Iteam Name" onChange={(event)=>iteamHandler(event.target.value)}/>
        <input type="text" placeholder="Price" onChange={(event)=>priceHandler(event.target.value)}/>
        <input type="text" placeholder="Sales" onChange={(event)=>salesHandler(event.target.value)}/>
        </>
    )
}

export default Object;