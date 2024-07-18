/* eslint-disable @typescript-eslint/no-unused-vars */
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import ThumbNail from "./ThumbNail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import LoadMoreButton from "./LoadMoreButton";
//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//Images
import NoImage from "../assets/images/no_image.jpg";


const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();
  console.log(state);

  if(error){
    return(
      <div>
        Something went Wrong, Try refreshing the page......
      </div>
    );
  }
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchItem={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => {
          return (
            <ThumbNail
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <LoadMoreButton text="Load More" callbackfn={()=>{setIsLoadingMore(true)}} />
      )}
    </>
  );
};

export default Home;
