export type MovieType = {
  Title: string;
  Year: string;
  Awards: string;
  Poster: string;
  Plot: string;
  Type?: string;
  Released?: string;
  Rated?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  imdbID?: string;
};

export type MoviePropsType = Omit<MovieType, "imdbID">;
