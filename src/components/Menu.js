import React from 'react';
import Products from '../data/products.json';
import Item from './Item';

export class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {menu} = this.props;
        return (
            <div>
                <h1>Desayuno</h1>
                {Products.filter((item) => {
                    return item.time === 'Desayuno'
                })
                .map((item) => {
                    return <Item item={item} key={item.key} />
                })
                }
            </div>
        )
    }
};

export default Menu;

// export class Menu extends React.Component {
//     render() {
//         const {menu} = this.props;
//         return (
//             <div>
//                 <h1></h1>
//                 <div>
//                 {Products.map((item) => {
//                     return <Item item={item} key={item.key} />
//                 })}
//                 </div>
//             </div>
//         );
//     }
// };