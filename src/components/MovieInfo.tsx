//styles
import styled from "styled-components";
//component
import ThumbNail from "./ThumbNail";
//config
import { BACKDROP_SIZE } from "../config";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//fallBack Image
import NoImage from "../assets/images/no_image.jpg";
import React from "react";
import { MovieState } from "../hooks/useMovieFetch";

type styleProps = {
  backdrop: string
}

//styles start
const Wrapper = styled.div<styleProps>`
  background: ${({ backdrop }) => backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo{
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
  }
`;
const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
      display: block;
      max-height: none;
    }
`;
const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }
    .director{
        margin: 0 0 0 40px;
        p {
            margin: 0;
        }
    }
    .movie-detail {
      font-size: 20px;
    }
    h1{
      font-size: var(--fontSuperBig);
        @media screen and (max-width: 768px){
            font-size: var(--fontBig) ;
        }
    }
`;
//styles end

//Types
type Props = {
  movie: MovieState
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <ThumbNail
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p className="movie-detail" >{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average.toPrecision(2)}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
