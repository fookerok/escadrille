<template>
	<div class="flex flex-col gap-4 text-center !mb-8">
		<h2 class="section__title" :class="tClass">{{title}}</h2>
		<div class="section__discr" :class="dClass">{{description}}</div>
	</div>
</template>

<script>
	export default {
		name: 'TitleSection',
		props: {
			title: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: false
			},
			tClass: {
				type: String,
				required: false
			},
			dClass: {
				type: String,
				required: false
			}
		}
	}
</script>

<style lang="scss" scoped>
.section__title{
	font-size: 3rem;
	@media (max-width:1024px) {
		font-size: 2.5rem;
		line-height: 1.2;
	}

	@media (max-width:768px) {
		font-size: 2rem;
	}
}
.section__discr{
	font-size: 1.25rem;
	@media (max-width:1024px) {
		font-size: 1rem;
	}
	color: $color-neutral-400;
}
</style>