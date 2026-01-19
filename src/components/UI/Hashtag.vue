<template>
	<div v-for="(tag, index) in hashtags" :key="index" class="item__hashtag">
		{{ tag }}
	</div>
</template>

<script>
	export default {
		name: 'Hashtag',
		props: {
			hashtags:{
				type: Array,
				required: true,
				default: () =>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item__hashtag{
		padding: 8px 16px;
		border: 1px solid $color-neutral-400;
		background-color: rgba($color: #000000, $alpha: 0.5);
		border-radius: 20px;
	}
</style>