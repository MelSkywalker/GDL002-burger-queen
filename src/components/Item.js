import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props)
        this.addToOrder = this.addToOrder.bind(this);
    }
    addToOrder(event){
        event.preventDefault();
        console.log('Adding to order');
        console.log(this.props);
    }
    render() {
        const {item} = this.props;
        return (
            <div onClick={this.addToOrder}>
                <p>{item.name}</p>
                <p>${item.price}.00</p>
            </div>
        )
    }
}

export default Item;