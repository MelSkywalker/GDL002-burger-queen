import React from 'react';
import ReactDOM from 'react-dom';

class Waiter extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Order />
            </div>
        );
    }
};

class Menu extends React.Component {
    render() {
        return (
            <div>Menu
                <Time />
            </div>
        );
    }
};

class Time extends React.Component {
    render() {
        return (
            <div>
                <p>Desayuno - Comida</p>
                <Product />
            </div>
        );
    }
};

class Product extends React.Component {
    render() {
        return (
            <div>
                <p>Hamburguesas - Acompañamientos - Para tomar</p>
                <Type />
                <Extra />
            </div>
        );
    }
};

class Type extends React.Component {
    render() {
        return (
            <p>Res - Pollo - Vegetariana</p>
        );
    }
};

class Extra extends React.Component {
    render() {
        return (
            <p>Queso - Huevo</p>
        );
    }
};

class Order extends React.Component {
    render() {
        return (
            <div>
                <Product />
                <Total />
                <SendButton />
            </div>
        );
    }
};

class Total extends React.Component {
    render() {
        return (
            <div>
                <p>Total: </p>
            </div>
        );
    }
};

class SendButton extends React.Component {
    render() {
        return (
            <button>Enviar a cocina</button>
        );
    }
};