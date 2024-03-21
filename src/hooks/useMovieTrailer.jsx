import { useDispatch } from "react-redux";
import { API_OPTION } from "../utilities/constant";
import { addTrailerVedio } from "../utilities/moviesSlice";
import { useEffect } from "react";

 const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();

  //fetch Trailer vedio && updating store with trailer vedio data.
const getMovieVedio = async()=>{


  const data = await fetch
  ("https://api.themoviedb.org/3/movie/" + movieId +
  "/videos?language=en-US", 
  API_OPTION);

  const json= await data.json();
  console.log(json);

  const filterData = json.results.filter(vedio=>vedio.type == "Trailer");
  const trailer = filterData.length ? filterData[0] :json.results[0];

  console.log(trailer);
  dispatch(addTrailerVedio(trailer));
};

  useEffect(()=>{
          getMovieVedio();
  },[]);

 }
 export default useMovieTrailer;