import React from 'react';

import { ProductItemDiv, ImageContainerDiv, Img } from './product-item.styles';

const ProductItem = props => {
    return(
        <ProductItemDiv>

            <ImageContainerDiv>
                <Img src = {props.item.imageUrl} alt = "Product"></Img>
            </ImageContainerDiv>

            <h1>{props.item.name}</h1>

            <p>PRICE : Rs. {props.item.price}</p>


        </ProductItemDiv>
    )
}

export default ProductItem;