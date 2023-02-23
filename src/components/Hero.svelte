<script>
	import img from '$lib/images/Cool_X.png';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<section
	class="relative flex h-[100svh] flex-col justify-end overflow-hidden bg-black p-4 font-mono text-white"
>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		src={gradient}
		role="presentation"
		class="-z-2 absolute h-full w-full -scale-100 opacity-60 blur-3xl filter
  "
	/>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={img} role="presentation" class="-z-1 absolute top-44 left-32 scale-[2] opacity-30" />
	{#if show}
		<div class="relative mb-6" transition:fade={{ duration: 1000 }}>
			<h1 class="text-5xl font-bold uppercase">
				<span class="text-red-600">TEDx</span>BITSGoa
			</h1>
			<p class="mb-4 text-2xl font-medium uppercase">Ideas worth spreading</p>
			<button
				class="w-fit rounded-full border border-white py-1 px-16 text-xl uppercase transition duration-300 ease-in-out hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
				>Register now
			</button>
		</div>
	{/if}
</section>
