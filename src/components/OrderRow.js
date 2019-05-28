import React from 'react';
import Select from 'react-select';
// import { tsConstructorType } from '@babel/types';

export default class OrderRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extrasPrice: 0,
        }
    }
    
    addExtras = (e) => {
        this.setState({
            extrasPrice: e.length,
        });
    }

    render() {
        return (
            this.props.ordersArray.map((order, i) => {
                return (
                    <tr key={order.name + '_' + i}>
                        <td>{order.name}</td>
                        <td>
                            <select >
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
                        <td>${+order.price + +this.state.extrasPrice}.00</td>
                        <td><button>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}