import React, { useEffect, useState } from 'react';

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
        <div className="grid grid-cols-5 min-h-[100vh]">
            <div className="col-span-4 w-full">

            </div>
            <div className="bg-[#FF9900] w-full">

            </div>
        </div>
    );
};

export default Shop;