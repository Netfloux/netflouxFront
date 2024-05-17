export interface CreateUserDto {
	username: string;
	email: string;
	password: string;
	confirmed: true;
	role: 0;
}

// Password is hashed by strapi
export const mapFormToCreateUserDto = (username: string, password: string) => {
	return {
		username,
		email: `${username}@example.com`,
		password: password,
		confirmed: true,
		role: 0,
	};
};
