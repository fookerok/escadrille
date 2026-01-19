<template>
	<section class="section">
		<div class="info-container">
			<TitleSection
				title="Готов присоединиться?"
				description="Подключитесь к нашему серверу и начните свое приключение уже сегодня!"
			/>
			<div class="container-adress text-center">
				<h3 class="container-adress__title">
					IP Адрес сервера
				</h3>
				<div class="flex justify-center items-center gap-4 !pb-4">
					<div class="container-adress__ip-value" id="ip-value">{{ip}}</div>
					<button @click="copyIp" type="button" class="copy-btn flex justify-center items-center cursor-pointer">
						<SvgIcon class="svg-default" icon="#copy"/>
					</button>
				</div>
				<div class="server-info flex max-sm:flex-col gap-4 justify-between items-center !pt-4">
					<div class="server-info__item [@media(min-width:480px)]:w-1/3 text-center">
						<div class="server-info__title">Версия</div>
						<div class="server-info__value">1.20.x - 1.21.x</div>
					</div>
					<div class="server-info__item [@media(min-width:480px)]:w-1/3 text-center">
						<div class="server-info__title">Режим игры</div>
						<div class="server-info__value">Выживание</div>
					</div>
					<div class="server-info__item [@media(min-width:480px)]:w-1/3 text-center">
						<div class="server-info__title">Статус</div>
						<div class="server-info__value">Online</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
import TitleSection from '../UI/TitleSection.vue';

	export default {
		name: "AdressSection",
		data() {
			return {
				ip: "12.34.56.78:91011"
			};
		},
		methods: {
			copyIp(){
				navigator.clipboard.writeText(this.ip)
			}
		}
	}

</script>

<style lang="scss" scoped>
	.container-adress{
		border-radius: 20px;
		background-color: $color-neutral-950;
		max-width: 1024px;
		padding: 32px;
		margin: 0 auto;
		&__title{
			color: $color-neutral-500;
			font-size: 0.875rem;
		}
		&__ip-value{
			color: $color-emerald-400;
			font-size: 2.25rem;
			@media (max-width: 480px) {
				font-size: 1.25rem;
			}
		}
	}
	.copy-btn{
		width: 48px;
		height: 48px;
		background-color: $color-emerald-400;
		border-radius: 10px;
		@media (max-width: 480px) {
			width: 24px;
			height: 24px;
			border-radius: 5px;
			.svg-default{
				width: 16px;
				height: 16px;
			}
		}
	}
	.server-info{
		border-top: 1px solid #555454;
		&__title{
			color: $color-neutral-500;
		}
	}
</style>