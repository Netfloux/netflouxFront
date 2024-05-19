import { COOKEYS, cookieDefaultOptions } from "$lib/helpers/cookies.helper";
import { INPUT } from "$lib/helpers/form.helper";
import type { Action, Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { StrapiAuthRepository } from '../../../modules/auth/repositories/StrapiAuthRepository';

const register: Action = async (event) => {
  const form = await event.request.formData();
  const username = form.get(INPUT.USERNAME) as string;
  const password = form.get(INPUT.PASSWORD) as string;
  const confirmPassword = form.get(INPUT.CONFIRM_PASSWORD) as string;
  const authRepository = StrapiAuthRepository();

  if (password !== confirmPassword) return fail(400, {
    code: 400,
    message: "Passwords do not match"
  });

  try {
    const token = await authRepository.register(username, password);
    if (!token) return fail(400, {
      code: 400,
      message: "Bad Request"
    });
    event.cookies.set(COOKEYS.USER_TOKEN, token, cookieDefaultOptions);
    console.debug('NOT CAUGHT ERROR')
  } catch (e) {
    console.debug('CAUGHT ERROR')
    let message = "Internal Server Error"
    if (e instanceof Error) message = e.message;
    return fail(500, { code: 500, message });
  }
  throw redirect(300, `/home`);
};

export const actions: Actions = {
  register
};
