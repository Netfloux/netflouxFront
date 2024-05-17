// See https://kit.svelte.dev/docs/types#app

import type { DomainUser } from './modules/auth/entities/DomainUser';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userToken?: string;
		}
		interface PageData {
			loggedUser?: DomainUser;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
