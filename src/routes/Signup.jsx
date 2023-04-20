import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext";


const Signup = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');
  const navigate = useNavigate();
  const{signUp} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await signUp(email, password);
      navigate('/account');
    }
    catch(e){
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {
          error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null
        }
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border border-input rounded-2xl"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border border-input rounded-2xl"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div>
            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </div>
        </form>
        <p className="my-4 ">
          Already have an account?
          <Link className="text-accent" to="/signin">
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
