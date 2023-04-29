<template>
	<nav class="container mx-auto py-4 flex justify-between items-center px-4">
		<img src="/images/logo.svg" alt="logo" class="w-10 md:w-auto">

		<div class="md:flex justify-between h-full items-center gap-32 hidden">
			<nuxt-link to="#">
				Home
			</nuxt-link>
			<nuxt-link to="#">
				About
			</nuxt-link>
			<nuxt-link to="#">
				Socials
			</nuxt-link>
		</div>

		<a href="#">
			<img src="/images/btn.svg" alt="btn" class="w-24 md:w-auto">
		</a>
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped>
a{
	color:var(--tertiary)
}
</style>
