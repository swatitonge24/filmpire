import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VedioBackground = ({movieId}) => {
  const trailerVedio = useSelector(store=> store.movies?.trailerVedio);
  
useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/" + trailerVedio?.key +"?&autoplay=1&mute=1"}
       title="YouTube video player" frameBorder="0" 
       allow="autoplay; "
        allowFullScreen></iframe>
      
      </div>
    
  )
}

export default VedioBackground;