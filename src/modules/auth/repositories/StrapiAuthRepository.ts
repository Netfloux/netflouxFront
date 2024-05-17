import { browser } from '$app/environment';
import { COOKEYS } from '$lib/helpers/cookies.helper';
import { CONFIG } from '$lib/helpers/environment.helper';
import { mapFormToCreateUserDto } from '../entities/CreateUserDto';
import type { DomainUser } from '../entities/DomainUser';
import type { StrapiLoginSuccessDto } from '../entities/StrapiLoginSuccessDto';
import type { IAuthRepository } from './IAuthRepository';

export const StrapiAuthRepository = (): IAuthRepository => {
	const login = async (username: string, password: string): Promise<string> => {
		const url = `${CONFIG.strapiApi}/auth/local`;
		const payload = {
			identifier: username,
			password: password
		};
		try {
			return await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			})
				.then(async (response) => {
					if (!response.ok) {
						console.error(await response.json());
						throw new Error('Error logging in');
					}
					return response.json();
				})
				.then((json: StrapiLoginSuccessDto) => {
					return json.jwt;
				});
		} catch (e) {
			console.error(e);
			return '';
		}
	};

	return {
		login: login,
		async register(username, password) {
			const url = `${CONFIG.strapiApi}/users`;
			const payload = mapFormToCreateUserDto(username, password);
			try {
				return await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(payload)
				})
					.then(async (response) => {
						if (!response.ok) {
							console.error(await response.json());
							throw new Error('Error creating user');
						}
						return response.json();
					})
					.then(() => {
						return login(username, password);
					});
			} catch (e) {
				console.error(e);
				return '';
			}
		},
		async logout() {
			if (!browser) throw new Error('Method should be called on browser only');
			localStorage.setItem(COOKEYS.USER_TOKEN, '')
		},
		async me(jwt: string) {
			const url = `${CONFIG.strapiApi}/users/me`;
			try {
				return await fetch(url, {
					headers: {
						Authorization: `Bearer ${jwt}`
					}
				}).then((response) => response.json() as Promise<DomainUser>);
			} catch (e) {
				throw new Error('Fobidden');
			}
		}
	};
};
