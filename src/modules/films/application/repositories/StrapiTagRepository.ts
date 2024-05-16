import type { StrapiResponse } from '../../../adapters/entities/StrapiResponse';
import { mapStrapiToDomainTag, type StrapiTag } from '../../../adapters/entities/StrapiTag';
import type { ITagRepository } from '../../domain/repositories/ITagRepository';

export const StrapiTagRepository = (): ITagRepository => {
	const BASE_URL = 'http://localhost:1337';
	const API_URL = `${BASE_URL}/api/tags`;
	return {
		getAll() {
			const url = `${API_URL}?populate=*`;
			return fetch(url)
			.then((response) => response.json())
			.then((json: StrapiResponse<StrapiTag>) => {
				return json.data.map((tag) => mapStrapiToDomainTag(tag));
			})
		},
	}
}