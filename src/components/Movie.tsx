//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Grid from "./Grid";
import Spinner from "./Spinner";
import Actor from "./Actor";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";
//Image
import NoImage from "../assets/images/no_image.jpg";
import MovieInfoBar from "./MovieInfoBar";


const Movie:React.FC = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(Number(movieId));

  console.log(movie);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>Something Went Wrong, Try refreshing the page or going back</div>
    );
  }

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
