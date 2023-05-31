<template>
	<nav class="container mx-auto p-4 flex justify-between items-center">
		<img src="/images/logo.svg" alt="logo" class="w-10 md:w-auto">

		<div class="lg:flex justify-between h-full items-center gap-16 hidden nav">
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

		<div class="hidden lg:flex gap-2 md:gap-4 items-center">
			<a href="/whitepaper.pdf" target="_blank" class="bg-d p-4 flex items-center justify-center">
				<span>Get Whitepaper</span>
			</a>
		</div>

		<a class="text-3xl text-light lg:hidden" @click="openMenu = true">
			<i :class="PrimeIcons.ALIGN_LEFT" />
		</a>

		<transition>
			<div v-if="openMenu" class="menu flex flex-col gap-6 text-primary bg-light">
				<a class="text-2xl ml-auto text-primary" @click="openMenu = false">
					<i :class="PrimeIcons.TIMES" />
				</a>
				<LinkTag to="/" @clicked="openMenu = false">
					Home
				</LinkTag>
				<LinkTag to="/#about" @clicked="openMenu = false">
					About
				</LinkTag>
				<LinkTag to="/#socials" @clicked="openMenu = false">
					Socials
				</LinkTag>

				<a href="/whitepaper-summarized.pdf" target="_blank" class="pb-2 border-b-2 border-b-[#55555577]">
					Get summarized whitepaper
				</a>

				<a href="/whitepaper.pdf" target="_blank">
					Get detailed whitepaper
				</a>
			</div>
		</transition>
	</nav>
</template>

<script lang="ts" setup>
import { PrimeIcons } from 'primevue/api'

const openMenu = ref(false)
</script>

<style scoped>
.nav a {
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

.menu {
	position: fixed;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	top: 0;
	left: 0;
	padding: 60px;
}

.v-enter-active {
	transition: all 0.3s ease-out;
}

.v-enter-from {
	transform: translateX(200px);
}
</style>
