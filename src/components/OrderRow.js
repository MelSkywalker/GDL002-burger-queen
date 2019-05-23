import React from 'react';
// import { tsConstructorType } from '@babel/types';

export default class OrderRow extends React.Component {
    render() {
        return (
            this.props.ordersArray.map((order,i) => {
                return (
                    <tr key={order.name + '_' + i}>
                        <td>{order.name}</td>
                        <td>
                            <select>
                                {order.content.map((flavor, i) => {
                                        return <option key={flavor + '_' + i}>{flavor}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            <select>
                                {order.extra.map((ingredient, i) => {
                                    return <option key={ingredient + '_' + i}>{ingredient}</option>
                                })}
                            </select>
                        </td>
                        <td>${order.price}.00</td>
                        <td><button onClick={this.deleteItem}>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}