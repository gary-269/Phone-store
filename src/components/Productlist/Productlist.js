import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../../context/ProductProvider"

export class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="Products" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

export default Productlist;