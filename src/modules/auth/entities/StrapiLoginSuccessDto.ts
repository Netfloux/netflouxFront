import type { StrapiUser } from './StrapiUser';

export interface StrapiLoginSuccessDto {
	jwt: string;
	user: StrapiUser;
}
