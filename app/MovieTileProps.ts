export type MovieTileProps = {
  Title: string;
  Year: string;
  Awards: string;
  Poster: string;
  Plot: string;
  Released?: string;
  Rated?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
};

export type MovieTileContainerProps = {
  movies: MovieTileProps[];
};
