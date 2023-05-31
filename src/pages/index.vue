<template>
	<section class="flex flex-col gap-2 w-full">
		<div class="min-h-screen flex flex-col">
			<NavBar />
			<Cta class="grow" />
		</div>
		<div class="flex flex-col gradient w-full">
			<Partners />
			<div class="px-2 flex flex-col">
				<Details />
			</div>
			<DefaultFooter />
		</div>
	</section>
</template>
