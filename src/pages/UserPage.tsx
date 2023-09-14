import { useState, useEffect } from 'react';
import Filme from '../components/Filme';

import { getDiscoverMovies } from '../services/moviedb';

export default function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleMovies() {
    const data = await getDiscoverMovies();
    console.log(data);
    setMovies(data.results);
  }

  useEffect(() => {
    handleMovies();
  }, []);

  return (
    <>
      <h1>Bem-vindo</h1>
      <hr />
      <h2>Seus favoritos</h2>
      <hr />
      <h2>Veja outros lançamentos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {movies?.map((movie) => {
          return (
            <Filme
              nameOfTheFilm={movie.original_title}
              posterOfTheFilm={movie.poster_path}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </>
  );
}
