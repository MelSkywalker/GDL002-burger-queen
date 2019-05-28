import React from 'react';
import OrderRow from './OrderRow';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: [],
            sum: 0,
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { ordersArray } = this.props;
        const { sum } = this.state;
        if (prevProps.ordersArray.length !== ordersArray.length) {
                this.setState({
                    sum: +sum + +ordersArray[ordersArray.length -1].price,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Pedido:</h1>
                <form>
                    <label>Mesa: </label>
                    <select onChange={this.props.numTable}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </form>
                <form  onSubmit={this.props.sendOrder}>
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
                        <OrderRow
                            ordersArray={this.props.ordersArray}/>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Notas: </th>
                            <td colSpan='5'>
                                <input type='text' onChange={this.props.orderNotes}></input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan='3' >Total:</th>
                            <td>${this.state.sum}.00</td>
                            <td>
                                <button>Ordenar</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                </form>
            </div>
        )
    }
};