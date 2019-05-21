import React from 'react';
import Menu from '../components/Menu';

export class MenuList extends React.Component {
    render() {
        return (
            <div>
                <Menu name='Desayuno'/>
                <Menu name='Comida'/>
            </div>
        )
    }
}

export default MenuList;