<template>
	<figure class="image-card rounded-xl relative aspect-square overflow-hidden">
		<img class="w-full h-full object-cover" :src="src" alt="">
		<figcaption class="grid grid-rows-[auto_1fr_auto] !p-6 absolute transform bottom-0">
			<div class="image-card__title !mb-1 line-clamp-1">{{name}}</div>
			<div class="image-card__discr line-clamp-1">{{description}}</div>
			<div class="image-card__date">{{date}}</div>
		</figcaption>
	</figure>
</template>

<script>
	export default {
		name: 'GalerryItem',
		props: {
			src: { 
				type: String, 
				required: true 
			},
			name: { 
				type: String, 
				required: true 
			},
			description: { 
				type: String, 
				required: true 
			},
			date: { 
				type: String, 
				required: true 
			}
		},
	}
</script>

<style lang="scss" scoped>
	.image-card{
		background-color: $color-neutral-950;
		border: 1px solid $color-neutral-800;
		cursor: pointer;
		&__title{
			font-size: 1.25rem;
		}
		&__discr{
			font-size: 0.875rem;
			color: $color-emerald-400;
		}
		&__date{
			font-size: 0.875rem;
		}
		&:hover{
			border: 1px solid $color-emerald-600;
			transition: border 0.4s ease;
		}
	}
</style>