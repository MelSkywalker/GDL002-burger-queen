import React from 'react';
import Products from '../data/products.json';
import Item from './Item';

export class Menu extends React.Component {
    render() {
        //const {menu} = this.props;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div>
                {Products.filter((item) => {
                        return item.time === this.props.name
                    })
                    .map((item) => {
                        return <Item item={item} key={item.key} />
                    })
                    }
                </div>
            </div>
        )
    }
};

export default Menu;
