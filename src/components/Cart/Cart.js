import React, {Component } from 'react'
import Title from "../Title/Title"
import CartColoumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from "../../context/ProductProvider"
import CartList from "./CartList"

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                     const{cart} =value;
                    //  if(cart.lenght>0){
                         return(
                         <>
                         <Title name="your" title="cart"/>
                         <CartColoumns />
                         <CartList value= {value}/>
                         </>
                         )
                    //  }
                    //  else{
                    //   return <EmptyCart />;
                    //  }
                    }}
               
                </ProductConsumer>
                </section>
        )
    }
}

export default Cart