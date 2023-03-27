import React, { useEffect, useState } from 'react';
import Products from '../ShowProducts/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const loadData = async()=>{
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data)
        }
        loadData()
    },[])
    return (
        <>
            <h3 className="text-base font-semibold pl-5 pt-5">Products({products.length})</h3>
            <div className="grid grid-cols-5 min-h-[100vh]">
                <div className="col-span-4 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:px-5 py-3">
                    {
                        products.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
                <div className="bg-[#FF9900] w-full">

                </div>
            </div>
        </>
    );
};

export default Shop;