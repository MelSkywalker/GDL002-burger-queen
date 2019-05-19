import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/waiter'>Mesero</NavLink>
            <NavLink to='/kitchen'>Cocina</NavLink>
            <NavLink to='/food'>Food</NavLink>
        </div>
    );
};

export default Navigation;