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
                            <select>
                                {order.content.map((flavor, i) => {
                                    return <option key={flavor + '_' + i}>{flavor}</option>
                                })}
                            </select>
                        </td>
                        <td>
                            <Select
                                // value={selectedOption}
                                onChange={this.props.handleExtra}
                                options={
                                    order.extra.map((ingredient, i) => {
                                        return { label: ingredient, value: i }
                                    })
                                } isMulti />
                            {/* <select onChange={() => this.props.handleExtra(value.target.value)} /* ref='ingredientSelector' onChange={ (e) => { this.props.selectIngredient(); } } >
                                {order.extra.map((ingredient, i) => {
                                    if(ingredient === 'Queso' || ingredient === 'Huevo') {
                                        return <option key={ingredient + '_' + i} value='1'>{ingredient}</option>
                                    } else {
                                        return <option key={ingredient + '_' + i} value='0'>{ingredient}</option>
                                    }
                                })}
                            </select> */}
                        </td>
                        <td>${order.price}.00</td>
                        <td><button>Eliminar</button></td>
                    </tr>
                )
            })

        )
    }
}