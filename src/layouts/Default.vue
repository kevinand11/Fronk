<template>
	<div class="bg-primary min-h-screen min-w-screen relative z-10">
		<img src="/images/blob1.svg" alt="blob" class="absolute top-0 left-0 -z-10 w-56 md:w-auto">
		<img src="/images/blob2.svg" alt="blob2" class="absolute right-0 top-[150px] -z-10 w-56 md:w-auto">
		<img src="/images/blob3.svg" alt="blob3" class="absolute right-0 top-[739px] -z-10  md:w-auto">
		<slot />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
