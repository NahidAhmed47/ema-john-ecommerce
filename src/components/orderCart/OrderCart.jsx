import React from 'react';

const OrderCart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    let tax = totalPrice*7/100;
    return (
        <div  className="bg-[#FFE0B3] w-full sticky top-5">
            <h1 className="text-xl font-semibold text-center mt-5">Order summary</h1>
            <div className="mt-4 text-base font-semibold sm:ml-12 flex flex-col gap-3">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="font-bold">Payable Amount: ${(totalPrice + totalShipping + tax).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default OrderCart;