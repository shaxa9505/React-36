import React from 'react';
import BasketItem from './BasketItem';

function BasketList(props) {

    const {order, handleBasket} = props

    const totalPrice = order.reduce((sum, orderItem) => {
        return sum + orderItem.price * orderItem.quantity
    }, 0)

    function onDelete (id) {
        order.filter(item => item.id !== id)
    }

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Basket
            </li>

            {order.length ? order.map(item => {
                return (
                    <BasketItem key={item.id} {...item} onDelete={onDelete} />
                )
            }): <li>Basket is empty</li>}

            <li className="collection-item active">
                Total price {totalPrice} <b>$</b>
            </li>
            <i className="material-icons basket-close" onClick={handleBasket}>close</i>
        </ul>
    );
}

export default BasketList;