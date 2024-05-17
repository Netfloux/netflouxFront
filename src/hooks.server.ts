import { COOKEYS } from '$lib/helpers/cookies.helper';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleCookies: Handle = (async ({ resolve, event }) => {
	event.locals.userToken = event.cookies.get(COOKEYS.USER_TOKEN) ?? '';
	return resolve(event);
}) satisfies Handle;

const corsHandle: Handle = async ({ event, resolve }) => {
	if (event.request.method !== 'OPTIONS') return await resolve(event);
	return new Response(new Blob(), { status: 200 });
};

export const handles = sequence(handleCookies, corsHandle);
