import type { Movie } from '../../domain/entities/Movie';
import type { IMovieRepository } from '../../domain/repositories/IMovieRepository';
import { fakeMovies } from '../data/FakeMovies';

export interface InMemoryMovieRepository extends IMovieRepository {}

export const InMemoryMovieRepository = (films: Movie[] = fakeMovies): InMemoryMovieRepository => {
	return {
		getPaginated: async (page: number, size: number) => {
			const start = (page - 1) * size;
			const end = start + size;
			return films.slice(start, end);
		}
	};
};
