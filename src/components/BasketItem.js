import React from 'react';

function BasketItem(props) {

    const { id, name, price, quantity, onDelete } = props

    return (
        <li className="colleection-item">
            {name} x{quantity} = {price} <b>$</b>
            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => onDelete(id)}>delete_forever</i>
            </span>
        </li>
    );
}

export default BasketItem;