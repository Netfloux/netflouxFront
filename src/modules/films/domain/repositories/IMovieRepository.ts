import type { Movie } from '../entities/Movie';

export interface IMovieRepository {
	getPaginated(page: number, size: number): Promise<Movie[]>
}