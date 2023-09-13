interface FilmeProps {
  nameOfTheFilm: string;
  posterOfTheFilm: string;
}

export default function Filme(props: FilmeProps) {
  return (
    <>
      <img
        src={'https://image.tmdb.org/t/p/w300' + props.posterOfTheFilm}
        alt="poster do filme"
      />
      <div>{props.nameOfTheFilm}</div>
    </>
  );
}
