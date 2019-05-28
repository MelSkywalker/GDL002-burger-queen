import React from 'react';
import Select from 'react-select';
// import { tsConstructorType } from '@babel/types';

export default class OrderRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extrasSum: 0,
        }
    }

    render() {
        return (
            this.props.ordersArray.map((order, i) => {
                return (
                    <tr key={order.name + '_' + i}>
                        <td>{order.name}</td>
                        <td>
                            <select onFocus={this.props.contentValue}>
                                {order.content.map((flavor, i) => {
                                    return <option key={flavor + '_' + i}>{flavor}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            <Select
                                onChange={this.addExtras}
                                options={
                                    order.extra.map((ingredient, i) => {
                                        return { label: ingredient, value: i }
                                    })
                                }
                                isMulti />
                        </td>
                        <td>${order.price}.00</td> {/*Asignarle un id o valor para sumarlo*/}
                        <td><button>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}