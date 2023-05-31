<template>
	<a
		class="pb-2 border-b-2 border-b-[#55555577] lg:border-b-0 font-bold"
		:class="{ 'active-link': route.fullPath === to }"
		@click="click"
	>
		<slot />
	</a>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const props = defineProps({
	to: {
		type: String,
		required: true
	}
})

const emits = defineEmits(['clicked'])

const click = async () => {
	emits('clicked')
	router.push(props.to)
}
</script>

<style scoped>
a {
	border-bottom: 2px solid #55555577;
}

@media (min-width: theme('screens.lg')) {
	a {
		border-bottom: unset;
	}

	.active-link {
		border-bottom: 3px solid theme('colors.primary') !important;
	}
}
</style>
