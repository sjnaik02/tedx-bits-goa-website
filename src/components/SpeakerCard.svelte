<script>
	export let image;
	export let styles = '';
</script>

<div class="group relative aspect-square h-auto w-auto bg-black">
	<img
		src={image}
		alt="speaker"
		class={`absolute top-0 left-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-60 ${styles}`}
	/>
	<p
		class="absolute bottom-0 left-2 bg-red-600 px-4 font-heading text-2xl font-semibold text-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	>
		Speaker Name
	</p>
</div>
