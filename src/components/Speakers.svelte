<script>
	import SpeakerCard from './SpeakerCard.svelte';
	import speaker1 from '$lib/images/Speaker1.jpg';
	import speaker2 from '$lib/images/Speaker2.jpg';
</script>

<div class="flex min-h-screen w-screen flex-col p-4 font-body text-white md:flex-row lg:px-12">
	<div
		class="top-0 flex flex-col justify-center py-10  pr-8 md:sticky md:h-screen md:w-1/3 md:pb-40"
	>
		<h2 class="relative z-10 inline-block font-heading text-5xl font-bold uppercase">
			Meet Our <span class="text-red-600">Speakers</span>
		</h2>
		<p class="mt-12 text-xl text-white">
			TEDxBITSGoa's speakers are a diverse and inspiring group of individuals from various fields
			and backgrounds, all with the common goal of inspiring our audience to make a positive impact
			on the world around them. We're proud to have hosted some of the most thought-provoking and
			inspiring speakers in India.
		</p>
	</div>
	<div class="flex-1 md:ml-4">
		<div class="grid grid-cols-2 gap-4  lg:grid-cols-3">
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
			<SpeakerCard image={speaker1} />
			<SpeakerCard image={speaker2} />
		</div>
	</div>
</div>
