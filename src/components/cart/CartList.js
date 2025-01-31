import React from 'react';
import CartItem from './CartItem';

function CartList({ value }) {

    const { cart } = value;
    console.log(value, cart);




    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item}
                    value={value} />;
            })}


        </div>
    );

}

export default CartList;
{/*now as we have access to all the things through
 cartalist we will do a little destructuring */ }