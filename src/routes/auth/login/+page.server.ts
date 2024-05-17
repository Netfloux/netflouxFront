import { COOKEYS, cookieDefaultOptions } from '$lib/helpers/cookies.helper';
import { INPUT } from '$lib/helpers/form.helper';
import type { Action, Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { StrapiAuthRepository } from '../../../modules/auth/repositories/StrapiAuthRepository';

const login: Action = async (event) => {
	const form = await event.request.formData();
	const username = form.get(INPUT.USERNAME) as string;
	const password = form.get(INPUT.PASSWORD) as string;
	const authRepository = StrapiAuthRepository();

	try {
		const token = await authRepository.login(username, password);
		if (!token) return fail(400, {
			code: 400,
			message: 'Bad Request',
		});
		event.cookies.set(COOKEYS.USER_TOKEN, token, cookieDefaultOptions);
	} catch (e) {
		let message = 'Internal Server Error';
		if (e instanceof Error) message = e.message;
		return fail(500, { message });
	}

	const redirectUrl = '/home';
	throw redirect(300, redirectUrl);
};

export const actions: Actions = {
	login,
};
