import React from 'react'
import GPTSearchbarPage from './GPTSearchbarPage';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BANNER } from '../utilities/constant';

 const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-20'>
<img src={BANNER}
      alt="logo"/>
</div>
      <GPTSearchbarPage/>
      <GPTMovieSuggestions/>
    </div>
  )
}
export default GPTSearch;
