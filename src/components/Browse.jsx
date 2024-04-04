
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovie';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovie';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
 <Header/>
 {showGPTSearch? (
  <GPTSearch/>
   ) :(
   <>
   <Maincontainer/>
   <SecondaryContainer/>
   </>
   )}
    </div>
   
  )
}
// Maincontainer
   //vedio trailer
   // Vedio title
//Secondary container
// -vedio cards

export default Browse;