<template>
	<section class="flex flex-col w-full">
		<NavBar />
		<cta />
		<div class="flex flex-col gradient w-full">
			<div class="text-7xl text-light">
				hel
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default'
})
</script>

<style scoped>
.gradient{
	background: linear-gradient(180deg, #1F0438 15.22%, #060400 100%);
}
</style>
