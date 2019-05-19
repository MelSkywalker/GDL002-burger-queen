import React from 'react';
import Products from '../data/products.json';
import Item from './Item';

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>Productos: </h1>
                {Products.map((item) => {
                    return <Item foodItem={item} />
                })}
                <Type />
                <Extra />
            </div>
        );
    }
};