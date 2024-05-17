<script>
	import { invalidateAll } from "$app/navigation";
  import { INPUT } from "$lib/helpers/form.helper";
	import { onMount } from "svelte";

  onMount(async () => {
    await invalidateAll();
  });
</script>

<div class="flex flex-col">
  <label for="{INPUT.USERNAME}">Username</label>
  <input type="text" name="{INPUT.USERNAME}" id="{INPUT.USERNAME}" autocomplete="on"
         class="text-black rounded-full h-8 px-4 text-sm" />
</div>

<div class="flex flex-col">
  <label for="{INPUT.PASSWORD}">Password</label>
  <input type="password" name="{INPUT.PASSWORD}" id="{INPUT.PASSWORD}" autocomplete="on"
         class="text-black rounded-full h-8 px-4 text-sm"/>
</div>

<button class="w-1/2 ml-auto mt-4" >
  Login
</button>