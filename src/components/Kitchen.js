import React from 'react';
import firebase from './firebase';
// import { tsConstructorType } from '@babel/types';
import OrderItems from './OrderItems';


export default class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {},
        }
    }

    getOrders = (e) => {
        const ref = firebase.firestore().ref('orders');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.state(state);
        });
        console.log('DATA RETRIEVED');
    }

    componentDidMount = () => {
        this.getOrders();
    }

    render(){
        const { orders } = this.state;
        return (
            <div>
                <h1>Kitchen</h1>
                <OrderItems />
            </div>
        );
    }
};

