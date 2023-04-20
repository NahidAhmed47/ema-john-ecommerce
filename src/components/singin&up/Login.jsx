import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const Login = () => {
    const {signInUser} = useContext(UserContext);
    const getLogInInfo = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            toast.success('SignIn successful!')
        })
        .catch(error=>{
            console.log(error.message);
        })
        e.target.reset()
    }
    return (
        <div>
            <div className='border shadow-md w-1/4 mx-auto md:mt-20 p-5 rounded-md'>
            <h1 className='text-center font-serif font-semibold mb-4'>Sign in</h1>
            <form onSubmit={getLogInInfo} className=' flex flex-col gap-3'>
                <input type="email" name="" id="email" className='input-field' placeholder='email' required/>
                <input type="password" name="" id="password" className='input-field' placeholder='password' required/>
                <button className='px-3 py-1 text-base font-semibold font-mono bg-[#FFE0B3] rounded-md text-violet-600'>Submit</button>
            </form>
            <p className='text-sm font-mono font-medium my-2 text-center'>You have no account? <br></br>Please <Link to="/singup" className='underline text-blue-600'>Sing up</Link></p>
        </div>
        </div>
    );
};

export default Login;