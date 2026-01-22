<template>
	<div class="counter-players inline-flex items-center gap-2">
		<div class="counter-players__indicator"></div>
		<div class="counter-players__value">Онлайн сервера - <span id="count-players">{{ online }}</span> игроков</div>
	</div>
</template>

<script>
	import { ref, onMounted } from 'vue';

	export default {
		name: 'CounterPlayers',
		data(){
			return{
				online: 0
			};
		},
		async mounted() {
			const fetchOnline = async () => {
				const res = await fetch ('https://api.mcstatus.io/v2/status/java/194.34.239.250:25565');
				const data = await res.json();
				this.online = data.players.online;
			};
			fetchOnline();
			setInterval(fetchOnline, 1000);
		}
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