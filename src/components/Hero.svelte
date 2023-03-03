<script>
	import About from './About.svelte';
	import img from '$lib/images/Cool_X.png';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<section class="relative min-h-[100svh] overflow-hidden bg-black p-4 font-sans text-white">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		src={gradient}
		role="presentation"
		class="-z-2 absolute  min-h-full w-full -scale-100 opacity-70  blur-3xl filter
  "
	/>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		src={img}
		role="presentation"
		class="-z-1 absolute top-44 left-32 scale-[2] opacity-30  lg:top-0 lg:left-1/2 lg:scale-150 lg:opacity-50"
	/>
	{#if show}
		<div
			class="relative flex h-[100svh] flex-col justify-end pb-12 md:justify-center  lg:my-auto lg:pl-12"
			transition:fade={{ duration: 1000 }}
		>
			<h1 class="text-5xl font-bold lg:text-8xl">
				<span class="text-red-600">TEDx</span>BITSGoa
			</h1>
			<p class="mb-4 text-2xl uppercase lg:mt-2">Ideas worth spreading</p>
			<a
				class=" inline-block w-fit rounded-lg border border-white py-4 px-16 text-xl uppercase transition duration-150 ease-in-out hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
				href="/register"
				>Join the Waitlist!
			</a>
		</div>
	{/if}
	<About />
</section>
