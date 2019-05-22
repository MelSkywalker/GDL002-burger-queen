import React from 'react';

export default class OrderRow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state({
    //         item: null
    //     })
    // }
    // deleteItem = (item) => {
    //     // event.preventDefault();
    //     console.log('Eliminar este item');
    //     console.log(this.props);
    //     this.props.ordersArray.filter((orderItem) => (orderItem !== item));
    // }
    render() {
        const item = this.props;
        return (
            this.props.ordersArray.map((order,i) => {
                return (
                    <tr key={order.name + '_' + i}>
                        <td>{item.quantity}</td>
                        <td>{order.name}</td>
                        <td>${order.price}.00</td>
                        <td>${item.quantity * order.price}.00</td>
                        <td><button onClick={this.deleteItem}>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}