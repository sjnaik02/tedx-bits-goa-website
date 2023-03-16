<script>
	import SpeakerCard from './SpeakerCard.svelte';
	import speaker1 from '$lib/images/Speaker1.jpg';
	import speaker2 from '$lib/images/Speaker2.jpg';
	import gradient from '$lib/images/blurry-gradient-haikei.svg';
</script>

<div class=" min-h-[100svh] w-screen overflow-hidden p-4 font-body text-white  ">
	<h2
		class="relative z-10 inline-block font-heading text-5xl font-bold uppercase
         after:absolute after:left-0 after:top-6 after:-z-10 after:h-6 after:w-full  after:bg-red-600 after:opacity-60 after:content-['']"
	>
		Speakers
	</h2>
	<p class="relative mt-12 text-2xl text-white">
		TEDxBITSGoa's speakers are a diverse and inspiring group of individuals from various fields and
		backgrounds, all with the common goal of inspiring our audience to make a positive impact on the
		world around them. We're proud to have hosted some of the most thought-provoking and inspiring
		speakers in India.
	</p>

	<SpeakerCard image={speaker1} />
	<SpeakerCard image={speaker2} />
	<SpeakerCard image={speaker1} />
</div>
