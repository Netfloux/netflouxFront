<script lang="ts">
	import { onMount } from 'svelte';
	import { StrapiMovieRepository } from '../../modules/films/adapters/repositories/StrapiMovieRepository';
	import { StrapiTagRepository } from '../../modules/films/adapters/repositories/StrapiTagRepository';
	import MovieCard from '../../modules/films/details/MovieCard.svelte';
	import type { Movie } from '../../modules/films/domain/entities/Movie';
	import type { Tag } from '../../modules/films/domain/entities/Tag';

	let films: Movie[] = [];
	// let filmRepository = InMemoryMovieRepository();
	let movieRepository = StrapiMovieRepository();
	let tagRepository = StrapiTagRepository();

	const pageSize = 1;
	let page = 0;
	let noMore = false;
	let tags: Tag[] = [];

	onMount(async () => {
		loadMore();
		tags = await tagRepository.getAll()
	});

	const loadMore = async () => {
		page++;
		const oldLength = films.length;
		await movieRepository.getPaginated(page, pageSize).then((newMovies) => {
			films = [...films, ...newMovies];
		});
		if (oldLength === films.length) noMore = true;
	};

	const findTagsFor = (movie: Movie) => {
		return tags.filter((tag) => tag.movies.some((m) => m.id === movie.id));
	};
</script>

<ul class="flex gap-4 p-8">
	{#each films as movie}
		<li class="max-w-48">
			<MovieCard {movie} tags={findTagsFor(movie)}/>
		</li>
	{/each}

	{#if noMore}
		<p>No more films to load</p>
	{:else}
		<button on:click={loadMore}>Load More</button>
	{/if}
</ul>
