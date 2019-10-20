export interface IMovie {
  id?: string;
  title: string;
  year: string;
  released: string;
  runtime: string;
  actors: Array<string>;
  director: string;
  genre: Array<string>;
  plot: string;
  poster: string;
  rottenTomato: string;
  imdb: string;
};
