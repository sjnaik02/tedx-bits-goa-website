<script>
	import SpeakerCard from './SpeakerCard.svelte';
	import speaker1 from '$lib/images/Speaker1.jpg';
	import speaker2 from '$lib/images/Speaker2.jpg';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';
</script>

<div class="flex min-h-screen w-screen p-4 font-body text-white lg:px-12">
	<div class="sticky top-0 flex h-screen w-1/3 flex-col justify-center pb-40 pr-8">
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
	<div class="ml-4 flex-1">
		<div class="grid grid-cols-3 gap-4">
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
