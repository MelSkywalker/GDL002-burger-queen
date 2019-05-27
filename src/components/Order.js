import React from 'react';
import OrderRow from './OrderRow';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            selectedOption: [],
        }
    }

    //Al seleccionar los extras de una segunda o tercera hamburguesa, se resta, necesito separar el "lenght" del array (del estado?) de cada producto
    componentDidUpdate = (prevProps, prevState) => {
        const { ordersArray } = this.props;
        const { sum } = this.state;
        const { selectedOption } = this.state;
        if (prevProps.ordersArray.length !== ordersArray.length) {
            if(prevProps.ordersArray.length < ordersArray.length) {
                this.setState({
                    sum: +sum + +ordersArray[ordersArray.length -1].price,
                }, () => console.log(this.props, this.state, 'prevProps: ', prevProps))
            } else if(prevProps.ordersArray.length > ordersArray.length) {
                this.setState({
                    sum: +sum - +ordersArray[ordersArray.length -1].price,
                }, () => console.log(this.props, this.state, 'prevProps: ', prevProps))
            }
        }
        if(prevState.selectedOption.length !== this.state.selectedOption.length) {
            if(prevState.selectedOption.length < this.state.selectedOption.length) {
                this.setState({
                    sum: +sum + 1,
                }, () => console.log(this.props, this.state, 'prevState: ', prevState))
            } else if (prevState.selectedOption.length > this.state.selectedOption.length) {
                this.setState({
                    sum: +sum - 1,
                }, () => console.log(this.props, this.state, 'prevState: ', prevState))
            }
        }
    }

    // handleExtra = (selectedOption) => {
    //     this.setState({
    //         selectedOption: selectedOption,
    //     }, ()=>console.log('option selected:', selectedOption))
    // }

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
                            handleExtra={this.props.handleExtra}
                            ordersArray={this.props.ordersArray}
                            extrasValue={this.props.extrasValue}
                            selectedOption={this.state.selectedOption}
                            contentValue={this.props.contentValue}/>
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