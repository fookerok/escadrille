<template>
	<div class="counter-players inline-flex items-center gap-2">
		<div class="counter-players__indicator"></div>
		<div class="counter-players__value">Онлайн сервера - 69 игроков</div>
	</div>
</template>

<script>
	export default {
		name: 'CounterPlayers'
	}
</script>

<style lang="scss" scoped>
	.counter-players{
		background-color: rgba($color-emerald-400, 0.5);
		border: 1px solid $color-emerald-400;
		padding: 8px 16px;
		border-radius: 48px;
		&__indicator{
			width: 8px;
			height: 8px;
			border-radius: 50%;
			animation: blink 1.8s infinite ease-in-out;
			opacity: 0.4;
		}
		&__value{
			color: $color-emerald-400;
		}
	}
	@keyframes blink {
	0%, 100% {
		opacity: 0.4;
		background-color: $color-emerald-400;
	}
	50% {
		opacity: 1;
		background-color: #00cc66;
	}
}
</style>