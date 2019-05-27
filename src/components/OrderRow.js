import React from 'react';
import Select from 'react-select';
// import { tsConstructorType } from '@babel/types';

export default class OrderRow extends React.Component {
    render() {
        // const { selectedOption } = this.props.selectedOption;
        return (
            this.props.ordersArray.map((order, i) => {
                return (
                    <tr key={order.name + '_' + i}>
                        <td>{order.name}</td>
                        <td>
                            <select onChange={this.props.contentValue}>
                                {order.content.map((flavor, i) => {
                                    return <option key={flavor + '_' + i}>{flavor}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            <Select onChange={this.props.extrasValue}
                                // value={selectedOption}
                                //onChange={this.props.handleExtra}
                                options={
                                    order.extra.map((ingredient, i) => {
                                        return { label: ingredient, value: i }
                                    })
                                } isMulti />
                        </td>
                        <td>${order.price}.00</td>
                        <td><button>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}