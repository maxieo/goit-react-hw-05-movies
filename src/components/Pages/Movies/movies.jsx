import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/api';
import { FilmItem } from 'components/FilmItem/filmItem';
import {
  Section,
  Form,
  StyledInput,
  SearchButton,
  List,
} from './movies.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [status, setStatus] = useState('idle');

  const inputValue = e => {
    setQuery(e.target.value.toLowerCase());
  };
  
  useEffect(() => {
    if (!search) 
      return
    setStatus ('pending')
    searchMovies(search).then(response => {
      if (response.data.total_results === 0) 
        setStatus('error');
        setFilms(response.filmList);
        setStatus('resolved');
    });
  }, [search]);

  
  const formSubmit = e => {
    e.preventDefault();
    if (query.trim() === '')
      return  
      setSearchParams({ search: query });
      setQuery('');
      ;
  };

  return (
    <Section>
      <Form onSubmit={formSubmit}>
        <label>
          <StyledInput
            type="text"
            value={query}
            placeholder="Type your request"
            onInput={inputValue}
          />
        </label>
        <SearchButton type="submit">
          <AiOutlineSearch size="30px" />
        </SearchButton>
      </Form>
      {status === 'resolved' && films.length > 0 && (
        <List>
          {films.map(film => {
            const { id, poster_path, title, name } = film;
            return (
              <FilmItem
                key={id}
                posterPath={poster_path}
                title={title ?? name}
                movieId={id}
              />
            );
          })}
        </List>
      )}
    </Section>
  );
};
