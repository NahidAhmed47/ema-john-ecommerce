import React from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';

const OrderCart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }
    let tax = totalPrice*7/100;
    return (
        <div  className="bg-[#FFE0B3] p-5 h-full">
            <h1 className="text-xl font-semibold text-center mt-2">Order summary</h1>
            <div className="mt-4 text-base font-semibold sm:ml-6 flex flex-col gap-3">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="font-bold">Payable Amount: ${(totalPrice + totalShipping + tax).toFixed(2)}</p>
            </div>
            <div className='flex flex-col w-full gap-2 mt-4'>
                 <button onClick={deleteShoppingCart} className='w-full py-1 bg-red-500 text-white font-semibold font-mono text-base rounded'>Clear all</button>
                 <Link to='/checkout'><button className='w-full py-1 bg-[#FF9900] text-white font-semibold font-mono text-base rounded'>Checkout order</button></Link>
            </div>
        </div>
    );
};

export default OrderCart;