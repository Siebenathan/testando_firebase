import styles from './Filme.module.css';

import { db, addItem } from '../services/firebase';

interface FilmeInterface {
  nameOfTheFilm: string;
  posterOfTheFilm: string;
  vote_average: number;
  release_data?: string;
  movie_id: number;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export default function Filme({ filme }: FilmeProps) {
  function handleSaveMovie() {
    addItem('movies', filme.movie_id.toString(), {})
      .then((result) => {
        alert('Filme salvo ' + filme.nameOfTheFilm);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.filme}>
      <img
        src={'https://image.tmdb.org/t/p/w154' + filme.posterOfTheFilm}
        alt="poster do filme"
      />
      <small>{filme.vote_average}</small>
      <button onClick={handleSaveMovie}>+ Adicionar</button>
      <div>
        {filme.nameOfTheFilm}
        <b>{filme.release_data}</b>
      </div>
    </div>
  );
}
