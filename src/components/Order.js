import React from 'react';
import OrderRow from './OrderRow';

export default class Order extends React.Component {
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
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>Precio unitario</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrderRow ordersArray={this.props.ordersArray} />
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan='3' >Total:</th>
                            <td>$12.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
