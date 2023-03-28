import React, { useEffect, useState } from 'react';
import OrderCart from '../orderCart/OrderCart';
import Products from '../ShowProducts/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        const loadData = async()=>{
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data)
        }
        loadData()
    },[])
    const handleCart = (products)=>{
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <>
            <div className="grid grid-cols-5 min-h-[100vh]">
                <div className="col-span-4 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:px-5 py-3">
                    {
                        products.map(product => <Products key={product.id} product={product} handleCart={handleCart}></Products>)
                    }
                </div>
                <div className="w-full bg-[#FFE0B3] ">
                    <OrderCart cart={cart}></OrderCart>
                </div>
            </div>
        </>
    );
};

export default Shop;