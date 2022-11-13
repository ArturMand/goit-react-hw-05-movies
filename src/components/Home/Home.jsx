import { useState, useEffect } from 'react';
import { fetchGetTrending } from '../../utils/fetchMovies.js';
import { Outlet, useLocation } from 'react-router-dom';
import { Title, List, Item, Link, Container } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchGetTrending().then(data => setTrending(data));
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {trending.map(({ title, id }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
      <Outlet />
    </Container>
  );
};

export default Home;
