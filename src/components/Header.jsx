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
   
    return ()=> unsubscribe();
   },[]);
  return (
    <div className='absolute w-screen px-12 py-8 bg-gradient-to-b from-black z-10 flex justify-between'>
  
     
<img  className="w-52"
src={LOGO}
alt="logo"/>

{ user && (
<div className='flex p-2'>
  <img className="w-12 h-12" src={USER_ICON}/>

<button  onClick={handleSignOut} className= 'font-bold text-xl bg-blue-300 rounded-lg p-3'>
  SignOut</button>
    </div>
  )}
    </div>
    );
    
}




export default Header