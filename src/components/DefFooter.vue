<template>
	<footer class="footer flex gap-2 flex-col">
		<div class="top__footer">
			<div class="info-container flex justify-between items-center">
				<a href="/" class="logo__link flex items-center gap-3">
					<img src="../assets/icons/logo.svg" alt="" class="logo">
					Escadrille
				</a>
				<div class="link__container flex gap-4">
					<a href="#" class="btn-link">Регистрация</a>
					<a href="#" class="btn-link">Как начать играть?</a>
					<a href="#" class="btn-link">Правила проекта</a>
				</div>

			</div>
		</div>
		<div class="bottom__footer text-center">
			<div class="info-container">
				© 2026 escadrille.com<br>
				Разработка by DimaRojer
			</div>
		</div>
	</footer>
</template>

<script>
	
	export default {
		name: 'DefFooter'
	}
</script>

<style lang="scss" scoped>
	.footer{
		background-color: rgba($color: #000000, $alpha: 0.5);
		.top__footer{
			border-bottom: 1px solid rgb(0, 0, 0);
			padding: 12px 0;
		}
		.bottom__footer{
			font-size: 0.875rem;
			padding-bottom: 12px;
		}
	}
</style>