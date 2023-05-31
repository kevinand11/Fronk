<template>
	<nav class="container mx-auto py-1 md:py-4 flex justify-between items-center px-4">
		<img src="/images/logo.svg" alt="logo" class="w-10 md:w-auto">

		<div class="md:flex justify-between h-full items-center gap-32 hidden">
			<nuxt-link to="/">
				Home
			</nuxt-link>
			<nuxt-link to="#about">
				About
			</nuxt-link>
			<nuxt-link to="#socials">
				Socials
			</nuxt-link>
		</div>

		<div class="flex gap-2 md:gap-4 items-center">
			<a href="/whitepaper-summarized.pdf" target="_blank" class="bg-d p-4 flex items-center justify-center">
				<span>Get Summary</span>
			</a>

			<a href="/whitepaper.pdf" target="_blank" class="bg-d p-4 flex items-center justify-center">
				<span>Get Whitepaper</span>
			</a>
		</div>
	</nav>
</template>

<style scoped>
a {
	color: var(--tertiary)
}
.bg-d {
	background-image: url('/images/btn-connect.svg');
	background-size: cover;
	color: #3B0E63;
	font-size: 0.7rem;
	height: 88px;
	width: 144px;
}
</style>
