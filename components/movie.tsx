import Link from "next/link";
import styles from "../styles/movie.module.css";

interface MovieProps {
  title: string;
  id: number;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: MovieProps) => {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default Movie;
