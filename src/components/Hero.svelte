<script>
	import About from './About.svelte';
	import img from '$lib/images/Cool_X.png';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';
</script>

<section class="relative min-h-[100svh] overflow-hidden bg-black p-4 text-white">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		src={gradient}
		role="presentation"
		class="-z-2 absolute h-auto min-h-full w-auto scale-[2.2]  opacity-50 blur-3xl filter md:-scale-100
  "
	/>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		src={img}
		role="presentation"
		class="-z-1 absolute top-44 left-32 scale-[2] opacity-30  lg:top-0 lg:left-1/2 lg:scale-150 lg:opacity-50"
	/>

	<div
		class="relative flex h-[100svh] flex-col justify-end pb-12 md:justify-center  lg:my-auto lg:pl-12"
	>
		<h1 class="font-heading text-7xl font-bold  leading-none lg:text-9xl">
			<span class="text-red-600">TEDx</span>BITSGoa
		</h1>
		<p class="mb-4 font-body text-2xl font-medium uppercase leading-none ">Ideas worth spreading</p>
		<a
			class=" inline-block w-fit rounded-lg border border-white py-4 px-16 font-body text-xl font-medium uppercase tracking-wide transition duration-200 ease-in-out
			 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
			href="/waitlist"
			>Join the Waitlist!
		</a>
	</div>

	<About />
</section>
