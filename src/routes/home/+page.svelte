<script lang="ts">
	import { onMount } from 'svelte';
	import { InMemoryMovieRepository } from '../../modules/films/application/repositories/InMemoryMovieRepository';
	import MovieCard from '../../modules/films/details/MovieCard.svelte';
	import type { Movie } from '../../modules/films/domain/entities/Movie';

	let films: Movie[] = [];
	let filmRepository = InMemoryMovieRepository();

	const pageSize = 2;
	let page = 0;
	let noMore = false;

	onMount(() => {
		loadMore();
	});

	const loadMore = async () => {
		page++;
		const oldLength = films.length;
		await filmRepository.getPaginated(page, pageSize).then((newMovies) => {
			films = [...films, ...newMovies];
		});
		console.debug(films);
		if (oldLength === films.length) noMore = true;
	};
</script>

<ul class="flex gap-4 p-8">
	{#each films as movie}
		<li class="max-w-48">
			<MovieCard {movie} />
		</li>
	{/each}

	{#if noMore}
		<p>No more films to load</p>
	{:else}
		<button on:click={loadMore}>Load More</button>
	{/if}
</ul>
