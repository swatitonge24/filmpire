import React from 'react'
import { useSelector } from 'react-redux';
import VedioBackground from './VedioBackground';
import VedioTittle from './VedioTittle';

const Maincontainer = () => {
 const movies =useSelector(store=>store.movies?.nowPlayingMovies)
 if(movies == null) return;
 const mainMovie = movies[0];

 const{original_title,overview,id} = mainMovie;

   return(
    <div className='pt-[30%] bg-black md:pt-0'>
        
        <VedioTittle title ={original_title} overview={overview}/>
        <VedioBackground movieId={id}/>
    </div>
   )
}

export default Maincontainer;