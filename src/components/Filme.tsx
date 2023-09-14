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
      <div>{props.nameOfTheFilm}</div>
    </div>
  );
}
