import React from 'react'
import { IMG_CDN_URL } from '../utilities/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className='w-32 md:w-36 pr-3 '>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;