import type { DomainUser } from '../entities/DomainUser';

export interface IAuthRepository {
	login: (username: string, password: string) => Promise<string>;
	register: (username: string, password: string) => Promise<string>;
	logout: () => Promise<void>;
	me: (jwt: string) => Promise<DomainUser>;
}