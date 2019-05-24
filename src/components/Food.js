import React from 'react';
import MenuList from '../components/MenuList';
import Order from '../components/Order';

export class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    setOrders = (order) => {
        this.setState({
            //orders: this.state.orders.push(order),
            orders: [...this.state.orders, order],
        }, () => console.log(this.state));
    }
    render() {
        return (
            <div>
                <MenuList setOrders={this.setOrders} />
                <Order ordersArray={this.state.orders}/>
            </div>
        );
    }
};


// export class SendButton extends React.Component {
//     render() {
//         return (
//             <button>Enviar a cocina</button>
//         );
//     }
// };

export default Food;
