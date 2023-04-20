import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div>
            <div className='border shadow-md w-1/4 mx-auto md:mt-16 p-5 rounded-md'>
            <h1 className='text-center font-serif font-semibold mb-4'>Sign Up</h1>
            <form  className="flex flex-col gap-3">
        <input
          type="text"
          name=""
          id="name"
          className="input-field"
          placeholder="your name"
          required
        />
        <input
          type="email"
          name=""
          id="email"
          className="input-field"
          placeholder="email"
          required
        />
        <input
          type="password"
          name=""
          id="password"
          className="input-field"
          placeholder="password"
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