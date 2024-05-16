<script lang="ts">
	import Play from "$lib/icons/Play.svelte";
	import type { Movie } from "../domain/entities/Movie";

  export let movie: Movie;
  const maxDescriptionLength = 40;

  $: displayedDescription = movie.description.slice(0, maxDescriptionLength) + (movie.description.length > maxDescriptionLength ? '...' : '');
</script>

<div class="flex flex-col h-full hover:scale-110 duration-200 transition-transform">
  <img src={movie.posterUrl} alt={movie.title + " poster"} class="aspect-video object-cover bg-center rounded-t-md cursor-pointer" />
  <div class="bg-bg-primary-light p-2 flex-1 flex flex-col">
    <p class="font-bold whitespace-nowrap text-ellipsis overflow-hidden">{movie.title}</p>
    <p class="text-sm">{displayedDescription}</p>
    <div class="flex justify-end mt-auto">
      <div class="w-8 h-8 p-2 [&_svg]:h-full [&_svg]:w-full [&_path]:fill-white border border-white rounded-full cursor-pointer">
        <Play />
      </div>
    </div>
  </div>
</div>