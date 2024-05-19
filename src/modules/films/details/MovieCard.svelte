<script lang="ts">
	import Play from '$lib/icons/Play.svelte';
	import type { Movie } from '../domain/entities/Movie';
	import type { Tag } from '../domain/entities/Tag';

	export let movie: Movie;
	export let tags: Tag[] = [];
	const maxDescriptionLength = 40;

	$: displayedDescription = movie.description ?
		movie.description.slice(0, maxDescriptionLength) +
		(movie.description.length > maxDescriptionLength ? '...' : '') : '';
</script>

<div class="flex flex-col h-full hover:scale-110 duration-200 transition-transform cursor-pointer">
	<img
		src={movie.posterUrl}
		alt={movie.title + ' poster'}
		class="aspect-video object-cover bg-center rounded-t-md"
	/>
	<div class="bg-bg-primary-light p-2 flex-1 flex flex-col">
		<p class="font-bold whitespace-nowrap text-ellipsis overflow-hidden">{movie.title}</p>
		<p class="text-sm">{displayedDescription}</p>
		<div class="flex justify-end mt-auto">
			<div
				class="w-8 h-8 p-2 [&_svg]:h-full [&_svg]:w-full [&_path]:fill-white border border-white rounded-full cursor-pointer
        [&_path]:hover:fill-primary hover:border-primary duration-200 transition-colors [&_path]:duration-200 [&_path]:transition-colors"
			>
				<Play />
			</div>
		</div>
		{#if tags.length > 0}
			<div class="flex gap-1 mt-2 flex-nowrap overflow-scroll mr-8 no-scrollbar">
				{#each tags as tag}
					<span
						class="bg-primary-light text-primary-dark text-xs border border-white rounded-full px-2"
						>{tag.name}</span
					>
				{/each}
			</div>
		{/if}
	</div>
</div>
