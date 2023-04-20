import React from 'react';

const ReviewItem = ({cart}) => {
    const {name, price, quantity, img} = cart;
    return (
        <div className='border-2 px-3 py-1 mb-4 flex justify-between gap-5'>
            <img className='w-32' src={img} alt="" />
            <div className='flex flex-col text-sm font-medium'>
                 <h1 className='text-base font-semibold font-serif'>{name}</h1>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
};

export default ReviewItem;