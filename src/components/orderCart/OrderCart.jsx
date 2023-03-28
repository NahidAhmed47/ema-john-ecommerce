import React from 'react';

const OrderCart = ({cart}) => {
    let totalPrice = 0;
    for(const product of cart){
        totalPrice += product.price;
    }
    return (
        <div  className="bg-[#FFE0B3] w-full">
            <h1 className="text-xl font-semibold text-center mt-5">Order summary</h1>
            <div className="mt-4 text-base font-semibold sm:ml-12">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: $</p>
                <p>Tax: $</p>
                <p className="font-bold">Payable Amount: $</p>
            </div>
        </div>
    );
};

export default OrderCart;