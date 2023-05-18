<template>
	<section id="about" class="w-[1297px] mx-auto   max-w-full bg-[#1D092C] text-white rounded-2xl md:min-h-[700px]">
		<div class="flex w-full">
			<span
				v-for="(tab, idx) in tabs"
				:key="tab.name"
				class="item"
				:class="{ 'active': idx === activeTab }"
				@click="activeTab = idx"
			>
				{{ tab.name }}
			</span>
		</div>

		<div class="w-full flex justify-center items-center md:h-full md:py-20 py-12">
			<component :is="tabs[activeTab].component" v-if="tabs[activeTab].component" class="max-w-[982px] text-center md:text-[20px] md:leading-relaxed text-sm px-4" />
		</div>
	</section>
</template>

<script setup lang="ts">
import Tab1 from './features/Tab1.vue'
import Tab2 from './features/Tab2.vue'
import Tab3 from './features/Tab3.vue'

const activeTab = ref(0)
const tabs = [
	{
		name: 'About Fronk',
		component: Tab1
	},
	{
		name: 'USDT Reflection',
		component: Tab2
	},
	{
		name: 'Token',
		component: Tab3
	}
]
</script>

<style scoped>
.item {
	@apply flex items-center justify-center w-full md:h-[68px] h-12 px-4 text-xs md:text-base text-center
}

.active {
	@apply bg-secondary font-bold rounded-t-2xl
}
</style>
