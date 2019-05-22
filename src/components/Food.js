import React from 'react';
import MenuList from '../components/MenuList';
import Order from '../components/Order';

export class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    setOrders = (order) => {
        this.setState({
            //orders: this.state.orders.push(order),
            orders: [...this.state.orders, order],
        }, () => console.log(this.state));
    }
    render() {
        return (
            <div>
                <MenuList setOrders={this.setOrders} />
                <Order ordersArray={this.state.orders}/>
            </div>
        );
    }
};


// export class Menu extends React.Component {
//     render() {
//         return (
//             <div>Menu
//                 <Time />
//             </div>
//         );
//     }
// };

export class Time extends React.Component {
    render() {
        return (
            <div>
                <p>Desayuno - Comida</p>
            </div>
        );
    }
};

// export class ProductList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Productos: </h1>
//                 {Products.map((item) => {
//                     return (
//                         <Product foodItem={item} />
//                     )
//                 })}
//                 <Type />
//                 <Extra />
//             </div>
//         );
//     }
// };

//  export class Product extends React.Component {
//     render() {
//         const productItem = this.props;
//         return (
//             <div>
//                 <p>{product.name}</p>
//                 <p>${product.price}.00</p>
//             </div>
//         )
//     }
// }

export class Type extends React.Component {
    render() {
        return (
            <p>Res - Pollo - Vegetariana</p>
        );
    }
};

export class Extra extends React.Component {
    render() {
        return (
            <p>Queso - Huevo</p>
        );
    }
};

// export class Order extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Total />
//                 <SendButton />
//             </div>
//         );
//     }
// };

export class Total extends React.Component {
    render() {
        return (
            <div>
                <p>Total: </p>
            </div>
        );
    }
};

export class SendButton extends React.Component {
    render() {
        return (
            <button>Enviar a cocina</button>
        );
    }
};

export default Food;
