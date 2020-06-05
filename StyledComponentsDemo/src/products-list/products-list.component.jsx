import React, { Component } from 'react';
import SHOP_DATA from './../ShopData';

import { ProductsListDiv } from './products.styles';
import ProductItem from './../product-item/product-item.component';

class ProductsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : [...SHOP_DATA.items]
        }
    }

    render() {
        return(
            <ProductsListDiv>
                {this.state.items.map(item => (
                    <ProductItem key = {item.id} item = {item} />
                ))}
            </ProductsListDiv>
        )
    }
}

export default ProductsList;