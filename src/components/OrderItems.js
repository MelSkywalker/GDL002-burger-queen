import React from 'react';

export default class OrderItems extends React.Component {
    render() {
        return(
            <div>
                <h2>Table #</h2>
                <ul>
                    <li>
                        <h3>Producto: </h3>
                        <p>Hamburguesa</p>
                    </li>
                    <li>
                        <h3>Contenido: </h3>
                        <p>Res</p>
                    </li>
                    <li>
                        <h3>Extras: </h3>
                        <p>Queso</p>
                    </li>
                    <li>
                        <h3>Notas: </h3>
                        <p>Alguna notita</p>
                    </li>
                </ul>
                <form>
                    <button>Orden lista!</button>
                </form>
            </div>
        )
    }
}