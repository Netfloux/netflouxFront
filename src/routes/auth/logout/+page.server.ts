import { COOKEYS } from '$lib/helpers/cookies.helper';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async (event) => {
	event.locals.userToken = '';
	event.cookies.delete(COOKEYS.USER_TOKEN, { path: '/' });
	console.log('logout');
	throw redirect(303, '/auth/login');
}) satisfies PageServerLoad;
