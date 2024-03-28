import React from 'react';
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth} from '../utilities/firebase';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser,removeUser} from "../utilities/userSlice";
import { LOGO } from '../utilities/constant';
import { USER_ICON } from '../utilities/constant';


const Header = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)

  const handleSignOut =()=>{
    
signOut(auth).then(() => {

}).catch((error) => {
  navigate("/error")
  
});
  };
  useEffect(()=>{
  const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName
          //photoURL : photoURL
        ,})); 
        navigate("/browse");
      } else {
        // User is signed out
  dispatch(removeUser());
  navigate("/");
      }
    });
   //unsubscribe when component unmount
    return ()=> unsubscribe();
   },[]);

   const handleGPTSearchClick =()=>{
  //Toggle search

   }
  return (
    <div className='absolute w-screen px-12 py-8 bg-gradient-to-b from-black z-10 flex justify-between'>
  
     
<img  className="w-52"
src={LOGO}
alt="logo"/>

{ user && (
<div className='flex p-2'>
  <button className='mx-4 my-2 p-4 bg-purple-800 text-white rounded-lg'
   onClick ={handleGPTSearchClick}>GPT Search</button>
  <img className="w-12 h-12 my-2" src={USER_ICON}/>

<button  onClick={handleSignOut} className= 'mx-4 my-2 p-4 font-bold  bg-blue-300  rounded-lg '>
  SignOut</button>
    </div>
  )}
    </div>
    );
    
}




export default Header