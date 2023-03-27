import React from 'react';
import logo from '../../assets/images/Logo.svg';
const Header = () => {
    return (
        <div className="bg-[#1C2B35] py-2 flex justify-between items-center sm:px-12">
            <img src={logo} alt="" />
            <div className="text-white flex gap-6 font-semibold">
                <a href="/shop">Shop</a>
                <a href="/order_review">Order Review</a>
                <a href="/manage_inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;