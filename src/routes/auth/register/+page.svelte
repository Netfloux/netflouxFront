<script lang="ts">
	import PopoverWarning from '$lib/components/PopoverWarning.svelte';
	import { INPUT } from '$lib/helpers/form.helper';

	let username = '';
	let password = '';
	let confirmPassword = '';

	let disabled: boolean;
	$: disabled = !username || !password || !confirmPassword;

	const onClick = (e: Event) => {
		if (disabled) e.preventDefault();
	};
</script>

<div class="flex flex-col">
	<label for={INPUT.USERNAME}>Username</label>
	<input
		type="text"
		name={INPUT.USERNAME}
		id={INPUT.USERNAME}
		bind:value={username}
		autocomplete="username"
		class="text-black rounded-full h-8 px-4 text-sm"
	/>
</div>

<div class="flex flex-col">
	<label for={INPUT.PASSWORD}>Password</label>
	<input
		type="password"
		name={INPUT.PASSWORD}
		id={INPUT.PASSWORD}
		bind:value={password}
		autocomplete="new-password"
		class="text-black rounded-full h-8 px-4 text-sm"
	/>
</div>

<div class="flex flex-col">
	<label for={INPUT.CONFIRM_PASSWORD}>Confirm password</label>
	<input
		type="password"
		name={INPUT.CONFIRM_PASSWORD}
		id={INPUT.CONFIRM_PASSWORD}
		bind:value={confirmPassword}
		autocomplete="new-password"
		class="text-black rounded-full h-8 px-4 text-sm"
	/>
</div>

<PopoverWarning
	popupPosition="bottom"
	popupMessage="All fields are required"
	popupClassName="-mt-2"
	className="w-1/2 ml-auto mt-4"
	bind:disabled
>

	<button {disabled} on:click={onClick} class="w-full">
		Register
	</button>
</PopoverWarning>
