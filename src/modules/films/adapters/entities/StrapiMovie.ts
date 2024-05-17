import type { Movie } from '../../films/domain/entities/Movie';

export interface StrapiMovie {
	id: string;
	attributes: {
		title: string;
		description: string;
		releaseDate: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		poster?: {
			data: {
				id: string;
				attributes: {
					url: string;
				}
			}
		}
	}
}

export const mapStrapiToDomainMovie = (strapiMovie: StrapiMovie): Movie => {
	const BASE_URL = 'http://localhost:1337';
	return {
		id: strapiMovie.id,
		title: strapiMovie.attributes.title,
		description: strapiMovie.attributes.description,
		posterUrl: BASE_URL + strapiMovie.attributes.poster?.data.attributes.url || ''
	}
}