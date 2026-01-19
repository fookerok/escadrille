<template>
	<div class="grid gap-2 reception-card grid-rows-[auto_auto_1fr] !p-6" :style="{ '--card-color': cardColor }">
		<div class="svg-block flex items-center justify-center">
			<SvgIcon class="svg-default" :icon="icon"/>
		</div>
		<h3 class="reception-card__title">{{ title }}</h3>
		<div class="reception-card__discr">{{ description }}</div>
	</div>
</template>

<script>
	export default {
		name: 'CardReception',
		props: {
			cardColor: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style lang="scss" scoped>
.reception-card{
	border-radius: 20px;
	background-color: $color-neutral-950;
	border: 1px solid color-mix(in srgb, var(--card-color) 30%, transparent);
	.svg-block{
		width: 56px;
		height: 56px;
		border-radius: 8px;
		background-color: color-mix(in srgb, var(--card-color) 30%, transparent);
		.svg-default{
			width: 28px;
			height: 28px;
			stroke: var(--card-color) !important;
		}
    
	}
	&__title{
		font-size: 1.25rem;
	}
	&__discr{
		color: $color-neutral-400;
	}
}

</style>