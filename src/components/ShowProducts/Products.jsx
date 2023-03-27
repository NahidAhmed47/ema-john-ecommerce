import React from 'react';

const Products = (props) => {
    console.log(props.product);
    const {img, name, price, rating, ratingCount, seller, shipping, stock} = props.product;
    return (
        <div className="p-1 border-2 rounded-md  flex flex-col justify-between">
            <img className="w-full rounded" src={img} alt="" />
            <div className="p-2">
                <h4 className="text-base font-semibold">{name}</h4>
                <p className="text-sm font-semibold mb-2">Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {rating}</p>
                <p>Stock Status: {stock}</p>
            </div>
            <div className="h-10 flex items-center justify-center bg-[#FFE0B3]">
                <p>Add to Cart</p>
            </div>
        </div>
    );
};

export default Products;