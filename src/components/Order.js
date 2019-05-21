import React from 'react';

export class Order extends React.Component {
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
                        <tr>
                            <td>2</td>
                            <td>Hamburguesa</td>
                            <td>$5.00</td>
                            <td>$10.00</td>
                            <td><button>Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Agua 500</td>
                            <td>$2.00</td>
                            <td>$2.00</td>
                            <td><button>Eliminar</button></td>
                        </tr>
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

export default Order;