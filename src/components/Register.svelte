<div class="flex h-[100svh] w-full bg-black font-body text-white md:flex-row">
	<div class="flex h-full w-full flex-col justify-center lg:w-1/2">
		<div class="px-12">
			<h1
				class="relative z-10 font-heading text-6xl font-semibold
				before:absolute before:left-0 before:top-8 before:-z-10 before:h-6 before:w-80 before:bg-red-800 before:opacity-100 before:content-['']"
			>
				Get your pass!
			</h1>
			<p class="mt-4 font-body text-2xl ">Fill out your details below to get your pass!</p>
			<form>
				<label for="email" hidden>Email</label>
				<input
					name="email"
					type="text"
					class="mt-4 inline-block h-12 w-full rounded-lg border-2 border-white bg-black p-4 font-body placeholder:font-body focus:border-red-600 focus:outline-none "
					placeholder="Enter Your Email"
					required
				/>
				<label for="name" hidden>Name</label>
				<input
					name="name"
					type="text"
					class="mt-4 inline-block h-12 w-full rounded-lg border-2 border-white bg-black p-4 font-body placeholder:font-body focus:border-red-600 focus:outline-none "
					placeholder="Enter Your Name"
					required
				/>
				<label for="id" hidden>BITS ID Number</label>
				<input
					name="id"
					type="text"
					class="mt-4 inline-block h-12 w-full rounded-lg border-2 border-white bg-black p-4 font-body placeholder:font-body focus:border-red-600 focus:outline-none "
					placeholder="Enter Your BITS ID Number"
				/>
				<button
					type="submit"
					class="mt-4 inline-block rounded-lg border border-white py-2 px-16 text-xl uppercase transition duration-300 ease-in-out
            hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
	<div
		class="absolute top-0 h-1/3 w-full bg-gradient-to-br from-red-900 via-black to-red-600 sm:static sm:h-full sm:w-1/2"
	/>
</div>
