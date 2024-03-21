
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovie';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
 
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