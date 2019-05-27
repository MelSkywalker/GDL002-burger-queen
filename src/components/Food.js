import React from 'react';
import firebase from './firebase';
import MenuList from '../components/MenuList';
import Order from '../components/Order';
// import { isTerminatorless } from '@babel/types';

export class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            contentValue: null,
            extrasValue: null,
            orderNotes: '',
            table: '1',
        }
    }
    setOrders = (order) => {
        this.setState({
            //orders: this.state.orders.push(order),
            orders: [...this.state.orders, order],
        }, () => console.log("orders", this.state));
    }

    sendOrder = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection('orders').add({
            product: this.state.orders[0].name,
            content: this.state.contentValue, //si no es hamburguesa = null
            extras: this.state.extrasValue > 0 ? this.state.extrasValue.map((extra) => extra.label) : this.state.extrasValue,
            notes: this.state.orderNotes,
            table: this.state.table,
        })
        console.log('sendOrder');
    }
    handleContentChange = (e) => {
        this.setState({
            contentValue: e.target.value
        });
        console.log(this.state.contentValue);
    }

    handleExtras = (e) => {
        this.setState({
            extrasValue: e
        });
        console.log(this.state.extrasValue);
    }

    handleNotes = (e) => {
        this.setState({
            orderNotes: e.target.value
        })
    }

    handleNumTable = (e) => {
        this.setState({
            table: e.target.value
        });
    }

    render() {
        return (
            <div>
                <MenuList setOrders={this.setOrders} />
                <Order
                    handleExtras={this.handleExtras}
                    ordersArray={this.state.orders}
                    sendOrder={this.sendOrder}
                    contentValue={this.handleContentChange}
                    extrasValue={this.handleExtras}
                    orderNotes={this.handleNotes}
                    numTable={this.handleNumTable}
                />
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
