export interface IDirector {
  profile_path: string;
  job: string;
  name: string;
}
export interface IGenre {
  id: number;
  name: string;
}

export interface IActor {
  name: string;
  character: string;
  profile_path: string;
}
export interface IMovie {
  id?: string;
  title: string;
  year: string;
  released: string;
  runtime: string;
  actors: Array<IActor>;
  director: IDirector;
  genres: Array<IGenre>;
  plot: string;
  wide_poster: string;
  poster: string;
  rottenTomato: string;
  imdb: string;
};
