import React from 'react';
import Products from '../data/products.json';


export class Item extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div>
                <p>{product.name}</p>
                <p>${product.price}.00</p>
            </div>
        )
    }
}

export defaul Item;