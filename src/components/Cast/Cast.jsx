import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGetMovieCredits } from '../../utils/fetchMovies.js';
import {
  Container,
  CastList,
  CastItem,
  CastText,
  CastContent,
} from './Cast.styled';
import noimage from '../../image/noimage.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchGetMovieCredits(movieId).then(data => setCast(data));
  }, [movieId]);

  if (!cast) return null;

  return (
    <>
      <Container>
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noimage
                }
                alt={name}
              />
              <CastContent>
                {' '}
                <CastText>{name}</CastText>
                <CastText>Character: {character}</CastText>
              </CastContent>
            </CastItem>
          ))}
        </CastList>
      </Container>
    </>
  );
};

export default Cast;
