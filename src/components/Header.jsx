import React from 'react';
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth} from '../utilities/firebase';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser,removeUser} from "../utilities/userSlice";
import { LOGO,SUPPORTED_LANGUAGES } from '../utilities/constant';
import { USER_ICON } from '../utilities/constant';
import { toggleGPTSearchView } from '../utilities/gptSlice';
import lang from '../utilities/languageConstants';
import { changeLanguage } from '../utilities/configSlice';


const Header = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const showGPTSearch =useSelector((store)=>store.gpt.showGPTSearch)

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
  dispatch(toggleGPTSearchView());
   }
   const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value));
      
   }

  return (
    <div className='absolute w-screen px-12  py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
  
     
<img  className="w-40 mx-auto md:mx-0 "
src={LOGO}
alt="logo"/>

{ user && (
<div className='flex p-2 justify-between'>
  {showGPTSearch && (
  <select className='p-2 m-2 bg-gray-600 text-white' onChange={handleLanguageChange}>
{SUPPORTED_LANGUAGES.map((lang)=>(
   <option key={lang.identifier} value={lang.identifier}>
      {lang.name}
    </option>
  ))}
  </select>
  )}

  
  <button className='mx-3 my-1 p-2 bg-purple-800 text-white rounded-lg'
   onClick ={handleGPTSearchClick}>
    {showGPTSearch? "Homepage" : "GPT Search"}</button>
  <img className=" hidden md:inline-block w-12 h-12 my-2" src={USER_ICON}/>

<button  onClick={handleSignOut} className= ' md: m-2 p-2 font-semibold  bg-blue-300  rounded-lg '>
  SignOut</button>
    </div>
  
  )}
    </div>
  )
    
}




export default Header