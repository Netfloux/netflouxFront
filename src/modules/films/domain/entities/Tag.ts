import type { Movie } from './Movie';

export interface Tag {
	name: string;
	movies: Movie[]
}