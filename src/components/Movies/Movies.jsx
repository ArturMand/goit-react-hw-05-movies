import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../utils/fetchMovies.js';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  List,
  Item,
  Link,
  Container,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState('');

  const query = searchParams.get('query' ?? '');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    fetchSearchMovies(query).then(data => setSearch(data));
  }, [query]);

  const handleChange = e => {
    setInput(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input });
    if (input === '') return alert('Write the name of the movie');
    setInput('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Enter movie name..."
        />
        <Button type="submit">Search</Button>
      </Form>
      {search && (
        <List>
          {search.map(({ title, id }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};
export default Movies;
