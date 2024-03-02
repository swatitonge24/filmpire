import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
<Header/>
<div className='absolute'>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/d328036f-d951-4fce-999a-60723ef6bd49/IE-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt="logo"/>
</div>
<form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80 '>
  <h1 className='font-bold text-3xl py-4'>
    {isSignInForm ? "Sign In" : "Sign Up" }</h1>
{!isSignInForm  && (
  <input type="name"placeholder='Enter Your Name' className='p-4 my-4 w-full bg-gray-700'/>
)}
    
  <input type="text"placeholder='Enter Email Address' className='p-4 my-4 w-full bg-gray-700'/>
  <input type="password" placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-700'/>

  <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
    {isSignInForm ? "Sign In ": "Sign Up" }</button>
  <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}>
   {isSignInForm ?"New to Filmpire? Sign Up Now" : "Alreday  a User?  Sign In Now"} </p>

</form>
    </div>
  )
}

export default Login;