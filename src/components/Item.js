import React from 'react';

export default class Item extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div onClick={() => this.props.setOrders(item)}>
                <p>{item.name}</p>
                <p>${item.price}.00</p>
            </div>
        )
    }
}