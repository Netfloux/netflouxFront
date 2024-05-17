<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import {clickOutside} from '$lib/directives/click-outside'

	export let onClick: () => void = () => void 0;
	export let className = '';
	export let disabled = false;

	export let popupMessage: string;
	export let popupClassName: string = '';
	export let popupPosition: 'top' | 'bottom' = 'top';
	export let popupTitle = '⚠️ Warning';
	let popupPositionClasses = {
		top: {
			container: '-translate-y-1/2 bottom-full right-1/2 translate-x-1/2',
			trailing: 'bottom-0 right-1/2 translate-x-1/2 translate-y-1/2',
		},
		bottom: {
			container: 'translate-y-1/2 top-full right-1/2 translate-x-1/2',
			trailing: 'top-0 right-1/2 translate-x-1/2 -translate-y-1/2',
		},
	};

	let timer: NodeJS.Timeout;
	let _onClick = (e: Event) => {
		if (!disabled) return onClick();
		e.preventDefault();
		showPopup = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			showPopup = false;
		}, 5000);
		onClick();
	};

	let showPopup = false;
</script>

<!-- vscode showing a wrong error - everything works fine, as expected -->
<!-- https://svelte.dev/tutorial/actions -->
<div class={'relative ' + className} use:clickOutside on:outclick={() => (showPopup = false)}>
	<div on:click={_onClick} on:keypress={_onClick}>
		<slot />
	</div>
	{#if showPopup}
		<div
			transition:fly={{ duration: 400, y: popupPosition === 'top' ? 30 : -30, easing: expoOut }}
			class="absolute w-full text-center bg-white opacity-100 text-black py-2 shadow-lg rounded-sm z-10
      {popupPositionClasses[popupPosition].container} {popupClassName}"
		>
			<p class="font-poppins-black">{popupTitle}</p>
			<p class="text-sm">{popupMessage}</p>
			<div
				class="w-4 h-4 rotate-45 absolute -z-10 bg-white 
        {popupPositionClasses[popupPosition].trailing}"
			/>
		</div>
	{/if}
</div>
