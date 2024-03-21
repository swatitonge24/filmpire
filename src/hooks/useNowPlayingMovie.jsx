
import { useEffect } from 'react';
import { API_OPTION } from '../utilities/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utilities/moviesSlice';



const useNowPlayingMovies =()=>{
  //Fetch data from TMDB API and update store.
 const dispatch = useDispatch();

const getNowPlayingMovies = async()=>{
    const data= await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTION)
    
    
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
    getNowPlayingMovies();

  },[]);
}
export default useNowPlayingMovies;