import { COOKEYS } from '$lib/helpers/cookies.helper';
import { StrapiAuthRepository } from '../modules/auth/repositories/StrapiAuthRepository';
import type { LayoutServerLoad } from './$types';

const authRepository = StrapiAuthRepository();

export const load: LayoutServerLoad = async (event) => {
	const token = event.cookies.get(COOKEYS.USER_TOKEN);
	if (!token) return {}

	const loggedUser = await authRepository.me(token);
	return {
		loggedUser
	}
};
