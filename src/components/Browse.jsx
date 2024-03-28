
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovie';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovie';
import GPTSearch from './GPTSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
 <Header/>
 
 <Maincontainer/>
 <SecondaryContainer/>
    </div>
   
  )
}
// Maincontainer
   //vedio trailer
   // Vedio title
//Secondary container
// -vedio cards

export default Browse;