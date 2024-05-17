<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	export const logout = async () => {
		goto('/auth/logout');
	};

	$: loggedUser = data.loggedUser;
</script>

<div class="flex justify-between items-center px-8 py-2 bg-primary">
	<div class="flex gap-4 items-center">
		<h1 class="text-2xl font-extrabold">NETFLOUX</h1>
		<p>Logged user: {loggedUser?.username ?? 'No user'}</p>
	</div>
	{#if loggedUser}
		<button class="border border-white rounded-md px-4 py-2" on:click={logout}>Logout</button>
	{/if}
</div>
<slot />
