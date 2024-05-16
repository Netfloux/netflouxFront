import type { Movie } from '../../domain/entities/Movie';

export const fakeMovies: Movie[] = [
	{
		id: '1',
		title: 'The Shawshank Redemption',
		description: 'Two imprisoned',
		posterUrl: 'http://localhost:1337/uploads/Pugs_Logo_2_ce5b275dcb.webp'
	},
	{
		id: '2',
		title: 'The Godfather',
		description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
		posterUrl: 'http://localhost:1337/uploads/Pugs_Logo_2_ce5b275dcb.webp'
	},
	{
		id: '3',
		title: 'The Dark Knight',
		description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
		posterUrl: 'http://localhost:1337/uploads/Pugs_Logo_2_ce5b275dcb.webp'
	},
	{
		id: '4',
		title: '12 Angry birds',
		description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
		posterUrl: 'http://localhost:1337/uploads/Pugs_Logo_2_ce5b275dcb.webp',
	}
]