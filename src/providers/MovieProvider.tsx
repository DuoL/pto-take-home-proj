import {
  createContext,
  FC,
  useEffect,
  useState,
  PropsWithChildren,
  useContext,
} from "react";
import { Movie } from "types";
import movieJson from "./movie_collections.json";

interface MovieContextData {
  data: Movie[];
  loading: boolean;
}

export const fetchMovies = (): Movie[] => {
  const movies = movieJson.map<Movie>((movie) => ({
    key: movie.id,
    id: movie.id,
    name: movie.name,
    genre: movie.genre,
    thumnail: movie.thumbnail,
    owner: movie.owner,
    image: movie.image,
    marketPrice: movie["market price"],
  }));

  return movies;
};

export const MovieContext = createContext<MovieContextData>({
  data: [],
  loading: false,
});

export const MovieContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      setMovies(fetchMovies());
      setLoading(false);
    };

    setTimeout(fetchData, 500);

    return () => {
      setLoading(false);
    };
  }, []);

  const contextValue = {
    data: movies,
    loading,
  }
  return (
    <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext)