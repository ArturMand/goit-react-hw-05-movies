import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGetMovieDetails } from '../../utils/fetchMovies.js';
import {
  Container,
  InformationContent,
  Link,
  Img,
  Title,
  Text,
  BackLink,
  SecondTitle,
  List,
  Items,
  AdditionalContent,
  AdditionalItem,
  AdditionalList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchGetMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (!movieDetails) return null;
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <BackLink type="button" to={location.state?.from ?? '/movies'}>
        &#10508; Go Back
      </BackLink>
      <Container>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'Not Img'
          }
          alt={title}
        />
        <InformationContent>
          <Title>{title}</Title>
          <Text>User Score: {vote_average * 10}%</Text>
          <SecondTitle>Overview</SecondTitle>
          <Text>{overview}</Text>
          <SecondTitle>Genres</SecondTitle>
          <List>
            {genres.map(({ name, id }) => (
              <Items key={id}>{name}</Items>
            ))}
          </List>
        </InformationContent>
      </Container>
      <AdditionalContent>
        <SecondTitle>Additional Information</SecondTitle>
        <AdditionalList>
          <AdditionalItem>
            <Link to="cast" state={{ from: location.state?.from ?? '/movies' }}>
              Cast
            </Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </Link>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalContent>
      <Outlet />
    </>
  );
};

export default MovieDetails;
