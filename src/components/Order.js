import React from 'react';
import OrderRow from './OrderRow';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            selectedOption: null
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { ordersArray } = this.props;
        const { sum } = this.state;
        if (prevProps.ordersArray.length !== ordersArray.length) {
            this.setState({
                // sum: paserInt(this.state.sum, 10) + parseInt(this.props.ordersArray[this.props.ordersArray.length - 1].price, 10),
                sum: +sum + +ordersArray[ordersArray.length - 1].price,
            }, () => console.log(this.props, this.state))
        }
    }

    handleExtra = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption,
        }, ()=>console.log('option selected:', selectedOption))
    }

    render() {
        return (
            <div>
                <h1>Pedido:</h1>
                <form>
                    <label>Mesa: </label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Sabor</th>
                            <th>Extras</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrderRow ordersArray={this.props.ordersArray} handleExtra={this.handleExtra} selectedOption={this.state.selectedOption}/* selectIngredient={this.selectIngredient} */ />
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Notas: </th>
                            <td colSpan='5'>
                                <input type='text'></input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan='3' >Total:</th>
                            <td>${this.state.sum}.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
