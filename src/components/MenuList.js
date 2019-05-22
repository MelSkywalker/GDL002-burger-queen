import React from 'react';
import Menu from '../components/Menu';

export default class MenuList extends React.Component {
    render() {
        return (
            <div>
                <Menu name='Desayuno' {...this.props}/>
                <Menu name='Comida' {...this.props}/>
            </div>
        )
    }
}