import React from 'react'
import CartItem from './CartItem'
export default function CartList(props) {
    const {cart} = props
    console.log("props value",props)
    return (
        <div>
            {cart.map(item=>{
                return <CartItem 
                key ={item.id}
                item={item}
                // value={value}
                />
            })}
          
            </div>
    )
}


