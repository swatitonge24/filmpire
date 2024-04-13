import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies =useSelector((store)=>store.movies);
  return (
     <div className='bg-black '>
    <div className=' mt:0   md:-mt-44 relative z-20  pl-4 md:pl-12'>
      <MovieList title ={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title ={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title ={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title ={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title ={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    
      </div>
      </div>
    )
  
}

export default SecondaryContainer;