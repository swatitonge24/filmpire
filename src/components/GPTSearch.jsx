import React from 'react'
import GPTSearchbarPage from './GPTSearchbarPage';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BANNER } from '../utilities/constant';

 const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
<img className='h-screen object-cover md:h-auto' src={BANNER}
      alt="logo"/>
      
</div>

      <GPTSearchbarPage/>
      <GPTMovieSuggestions/>
    </div>
    
  
  )
}
export default GPTSearch;
