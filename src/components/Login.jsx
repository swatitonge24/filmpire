import React, { useState ,useRef} from 'react';
import Header from './Header';
import {checkValidData} from "../utilities/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth} from "../utilities/firebase";
import { BANNER } from '../utilities/constant';

import { useSelector } from 'react-redux';

const Login = () => {

 
  const[isSignInForm,setIsSignInForm] = useState(true);
   const [errorMessage,setErrorMessage] =useState(null);
  
   const user = useSelector(store=>store.user)

  const email =useRef (null);
  const password = useRef (null);

  const handleButtonClick =()=>{
    //validate form data
    
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
  
  if(message) return;
  if(!isSignInForm){
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //update profile

    updateProfile(user ,{
      displayName: "name.current.value", 
      //photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/800px-Twemoji_1f600.svg.png",
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
    // ..
  });

  }else{
    //sign in
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });

  }
  }

  
 

  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
<Header/>
<div className='absolute'>
<img src={BANNER}
      alt="logo"/>
</div>
<form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80 '>
  <h1 className='font-bold text-3xl py-4'>
    {isSignInForm ? "Sign In" : "Sign Up" }</h1>

{!isSignInForm  && (
  <input type="name"placeholder='Enter Your Name' className='p-4 my-4 w-full bg-gray-700'/>
)}
    
  <input ref={email}
   type="text"placeholder='Enter Email Address' 
   className='p-4 my-4 w-full bg-gray-700'/>
  <input ref={password}
  type="password" placeholder='Enter Password' 
  className='p-4 my-4 w-full bg-gray-700'/>
  <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>


  <button className='p-4 my-6 bg-red-700 w-full rounded-lg'onClick={handleButtonClick}>
    {isSignInForm ? "Sign In ": "Sign Up" }</button>

  <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}>
   {isSignInForm ?"New to Filmpire? Sign Up Now" : "Alreday  a User?  Sign In Now"} </p>

</form>
    </div>
  )
}

export default Login;