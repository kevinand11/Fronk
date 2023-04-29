<template>
	<section id="about" class="w-[1297px] mx-auto   max-w-full bg-[#1D092C] text-white rounded-2xl md:min-h-[828px]">
		<div class="flex w-full">
			<span class="item active">About Fronk</span>
			<span class="item">NFTs</span>
			<span class="item">Wallet</span>
			<span class="item">Whitepaper</span>
		</div>

		<div class="w-full flex justify-center items-center md:h-full md:pt-40 pt-12 pb-12">
			<p class="max-w-[982px] text-center md:text-[22px] md:leading-relaxed text-sm px-4">
				Fronk Ai is the first AI-powered GameFi and meme creator. Our platform allows you to feed low-quality memes
				to the ai and receive a higher quality meme in return. We are building a social network where people can
				create and share memes with a copyright option to ensure proper attribution. In addition, we are developing
				fast-paced multiplayer card games that operates on a win2earn and free2play model, aiming for real
				sustainability in the web3 gaming space. Apart from the card playing feature we have taken it two steps
				further with one being the use of memes which would be on cards and also people’s avatar which can be turned
				into NFTs and sold in the marketplace. The second step being the integration of artificial intelligence to
				help monitor and play games for users.
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.item {
	@apply flex items-center justify-center w-full md:h-[68px] h-12 px-4 text-xs md:text-base
}

.active {
	@apply bg-secondary font-bold rounded-t-2xl
}
</style>
