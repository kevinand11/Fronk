<template>
	<section class="flex flex-col gap-40 w-full">
		<div class="h-screen flex flex-col">
			<NavBar />
			<Cta class="grow" />
		</div>
		<div class="flex flex-col gradient w-full">
			<div class="px-2 flex flex-col">
				<Details />
			</div>
			<DefaultFooter />
		</div>
	</section>
</template>

<script setup lang="ts">

definePageMeta({
	layout: 'default'
})
</script>

<style scoped>
.gradient {
	background: linear-gradient(180deg, #1F0438 15.22%, #060400 100%);
}
</style>
