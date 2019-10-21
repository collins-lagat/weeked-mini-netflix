export interface IMovie {
  id?: string;
  title: string;
  year: string;
  released: string;
  runtime: string;
  actors: Array<string>;
  director: object;
  genres: Array<string>;
  plot: string;
  wide_poster: string;
  poster: string;
  rottenTomato: string;
  imdb: string;
};
