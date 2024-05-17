import { applyAction } from '$app/forms';
import { loadingState } from '$lib/stores/loadingState.store';
import type { ActionResult } from '@sveltejs/kit';

export const INPUT = {
	CONTENT: 'content',
	EMAIL: 'email',
	PASSWORD: 'password',
	USERNAME: 'username',
	CONFIRM_PASSWORD: 'confirmPassword',
	CODE: 'code',
	POST_ID: 'postId',
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	FILES: 'files',
	NAME: 'name',
	TERMS: 'terms',
	REFERENCE: 'reference',
	DUPLICATE: 'duplicate',
};

export const handleSubmit = async (actions?: { onStart?: () => void; onDone?: () => void }) => {
	loadingState.set(true);
	actions?.onStart?.();
	return async ({ result }: { result: ActionResult }) => {
		await applyAction(result);
		actions?.onDone?.();
		loadingState.set(false);
	};
};
