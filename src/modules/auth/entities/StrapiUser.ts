export interface StrapiUser {
		"id": number,
		"username": string,
		"email": string,
		"provider": string,
		"confirmed": boolean,
		"blocked": boolean,
		"createdAt": string,
		"updatedAt": string
}

export const mapStrapiToDomainUser = (strapiUser: StrapiUser): AppUser => {
	return {
		username: strapiUser.username,
	};
}