import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const SingUp = () => {
    const [error, setError] = useState('');
    const {createUserWithEmail} = useContext(UserContext);
    const getFormInfo = (e)=>{
        e.preventDefault()
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        if(password !== confirmPassword){
            setError('Confirm password are not same!');
            console.log(name, email, password, confirmPassword);
            return;
        }
        else if(password.length < 6){
            setError('Password should have minimum 6 characters or longer!')
            return
        }
        createUserWithEmail(email, password)
        .then(result =>{
            const user = result.user;
            toast.success('SignUp successful!')
        })
        .catch(error =>{
            setError(error.message);
        })
        setError('')
        e.target.reset()
    }

    return (
        <div>
            <p className='text-center text-sm font-mono font-medium mt-10 text-red-500'><i>{error}</i></p>
            <div className='border shadow-md w-1/4 mx-auto md:mt-3 p-5 rounded-md'>
            <h1 className='text-center font-serif font-semibold mb-4'>Sign Up</h1>
            <form onSubmit={getFormInfo}  className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          id="name"
          className="input-field"
          placeholder="Your name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          className="input-field"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="input-field"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm"
          id="confirm"
          className="input-field"
          placeholder="Confirm password"
          required
        />
        <button className="px-3 py-1 text-base font-semibold font-mono bg-[#FFE0B3] rounded-md text-violet-600">
          Submit
        </button>
      </form>
      <p className="text-center font-mono">or</p>
      <button  className="w-full py-1 text-base font-mono text-violet-500 rounded-md border hover:shadow-md">SingIn with Google</button>
      <p className="text-sm font-mono font-medium my-2 text-center">
        Already have an account? <br></br>Please{" "}
        <Link to="/login" className="underline text-blue-600">
          Login
        </Link>
      </p>
        </div>
        </div>
    );
};

export default SingUp;