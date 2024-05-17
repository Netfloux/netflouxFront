import type { Tag } from '../../films/domain/entities/Tag';
import { mapStrapiToDomainMovie, type StrapiMovie } from './StrapiMovie';

export interface StrapiTag {
	id: string;
	attributes: {
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		name: string;
		movies: { data: StrapiMovie[] };
	};
}

export const mapStrapiToDomainTag = (strapiTag: StrapiTag): Tag => {
	return {
		name: strapiTag.attributes.name,
		movies: strapiTag.attributes.movies.data.map((movie) => mapStrapiToDomainMovie(movie))
	};
};
