<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { handleSubmit } from "$lib/helpers/form.helper.js";

  let action : string;
  $: action = $page.url.pathname === "/auth/login" ? "login" : "register";

  let errorMessage: string | undefined;
  $: errorMessage = $page.form?.message;

  const firstLetterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

</script>

<div class="bg-bg-light h-screen w-screen flex justify-center items-center">
  <form action="{`?/${action}`}"
        use:enhance={() => handleSubmit()}
        method="post"
        class=" p-8 pt-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-full flex flex-col justify-center gap-4
               lg:min-w-[25%] lg:rounded-xl">
    <div class="flex pb-4 gap-4 items-center justify-center">
      <a href="/auth/login"
         class="text-center flex-1 {action === 'login' ? 'underline text-2xl': 'text-xl opacity-70'}">Login</a>
      <div class="bg-text-primary w-[.1rem] h-8"></div>
      <a href="/auth/register"
         class="text-center flex-1 {action === 'register' ? 'underline text-2xl': 'text-xl opacity-70'}">Register</a>
    </div>
    <slot />
    {#if errorMessage}
      <p class="text-error-light">{errorMessage}</p>
    {/if}
  </form>
</div>
