import { useEffect } from 'react';
import { API_OPTION } from '../utilities/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utilities/moviesSlice';



const useTrendingMovies =()=>{
  //Fetch data from TMDB API and update store.
 const dispatch = useDispatch();
   const trendingMovies =useSelector((store)=>store.movies.trendingrMovies)

const getTrendingMovies = async()=>{
    const data= await fetch(
      ' https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTION)
    
    
    const json = await data.json();
    
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(()=>{
    !trendingMovies && getTrendingMovies();

  },[]);
}
export default useTrendingMovies;