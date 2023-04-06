import React from 'react';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="bg-[#1C2B35] py-2 flex justify-between items-center sm:px-12">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="text-white flex gap-6 font-semibold">
                <Link to="/shop">Shop</Link>
                <Link to="orders">Orders</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="login">Login</Link>
            </div>
        </div>
    );
};

export default Header;