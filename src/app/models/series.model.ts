import { IActor, IGenre } from './movie.model';

interface IEpisode {
    number: number;
    title: string;
    plot: string;
}

export interface ISeason {
    number: number;
    episodes: IEpisode[]
}

export interface ISeries {
    id?: string;
    title: string;
    year: string;
    released: string;
    runtime: string;
    actors: Array<IActor>;
    genres: Array<IGenre>;
    plot: string;
    wide_poster: string;
    poster: string;
    imdb: string;
    number_of_seasons: number;
    seasons: ISeason[];
  };
