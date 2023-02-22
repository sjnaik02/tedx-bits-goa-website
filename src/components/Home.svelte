<script>
	import img from '$lib/images/Cool_X.png';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';
</script>

<section
	class="relative flex h-screen flex-col justify-end overflow-hidden bg-black p-4 font-mono text-white"
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
	<div class="relative mb-8">
		<h1 class="text-6xl font-bold uppercase">
			<span class="text-red-600">TEDx</span>BITSGoa
		</h1>
		<p class="mb-4 text-2xl font-medium uppercase">Ideas worth spreading</p>
		<button class="w-fit rounded-full border border-white py-2 px-16 text-xl uppercase "
			>Register now
		</button>
	</div>
</section>
