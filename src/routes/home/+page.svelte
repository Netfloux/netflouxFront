<script lang="ts">
	import { onMount } from 'svelte';
	import type { Movie } from '../../modules/films/domain/entities/Movie';
	import { InMemoryMovieRepository } from '../../modules/films/application/repositories/InMemoryMovieRepository';

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

<ul class="flex gap-8">
	{#each films as film}
		<li class="flex gap-2">
			<p>{film.title}</p>
		</li>
	{/each}
</ul>

{#if noMore}
	<p>No more films to load</p>
{:else}
	<button on:click={loadMore}>Load More</button>
{/if}
