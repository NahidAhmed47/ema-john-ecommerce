import React, { useContext } from 'react';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';
const Header = () => {
    const {user, logOut} = useContext(UserContext);
    const handleLogOut = ()=>{
        logOut()
        .then(result => {})
        .catch(error => console.log(error.message))
    }
    return (
        <div className="bg-[#1C2B35] py-2 flex justify-between items-center sm:px-12">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="text-white flex gap-6 font-semibold">
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? '' : <Link to="/login">Login</Link>
                }
                {
                    user ? '' : <Link to="/singup">SingUp</Link>
                }
                
                {user && <button onClick={handleLogOut}>Singout</button>}
            </div>
        </div>
    );
};

export default Header;