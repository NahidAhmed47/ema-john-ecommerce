import React from 'react';
import OrderCart from '../orderCart/OrderCart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cartData = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 max-w-2xl mx-auto mt-20 gap-5'>
            <div className=''>
                {
                   cartData.length > 0 ? cartData.map(cart => <ReviewItem key={cart.id} cart={cart}></ReviewItem>): <div className='flex items-center h-full'>
                    <p className='text-sm font-semibold text-center'><i>No added cart found</i></p>
                   </div>
                }
            </div>
            <div className='h-full'>
                 <OrderCart cart={cartData}></OrderCart>
            </div>
        </div>
    );
};

export default Orders;