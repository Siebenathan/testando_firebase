import styles from './Filme.module.css';

interface FilmeProps {
  nameOfTheFilm: string;
  posterOfTheFilm: string;
  vote_average: number;
  release_data?: string;
}

export default function Filme(props: FilmeProps) {
  return (
    <div className={styles.filme}>
      <img
        src={'https://image.tmdb.org/t/p/w154' + props.posterOfTheFilm}
        alt="poster do filme"
      />
      <small>{props.vote_average}</small>
      <button>+ Adicionar</button>
      <div>
        {props.nameOfTheFilm}
        <b>{props.release_data}</b>
      </div>
    </div>
  );
}
