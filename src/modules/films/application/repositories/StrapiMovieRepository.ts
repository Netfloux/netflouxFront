import { mapStrapiToDomainMovie, type StrapiMovie } from '../../../adapters/entities/StrapiMovie';
import type { StrapiResponse } from '../../../adapters/entities/StrapiResponse';
import type { IMovieRepository } from '../../domain/repositories/IMovieRepository';

export const StrapiMovieRepository = (): IMovieRepository => {
	const BASE_URL = 'http://localhost:1337';
	const API_URL = `${BASE_URL}/api/movies`;
	const loadImagesParams = 'populate=*';
	return {
		getPaginated(page, size) {
			const url = `${API_URL}?pagination[page]=${page}&pagination[pageSize]=${size}&${loadImagesParams}`;
			return fetch(url)
				.then((response) => response.json())
				.then((json: StrapiResponse<StrapiMovie>) => {
					return json.data.map((movie) => mapStrapiToDomainMovie(movie));
				});
		}
	};
};
