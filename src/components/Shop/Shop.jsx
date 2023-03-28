import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id == id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const handleCart = (products)=>{
        const newCart = [...cart, products];
        setCart(newCart);
        addToDb(products.id);
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