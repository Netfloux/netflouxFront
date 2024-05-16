/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'], // this line
	theme: { 
    extend: {
      colors: {
        'bg-primary': "#141414",
        'primary': '#b91c1c',
      }
    }
   },
	plugins: []
};
