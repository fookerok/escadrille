<template>
<header class="header">
	<div class="info-container flex justify-between items-center">
		<a href="/" class="logo__link flex items-center gap-3">
			<img src="../assets/icons/logo.svg" alt="" class="logo">
			Escadrille
		</a>
		<nav class="nav">
			<ul class="nav__list flex gap-5">
				<li class="nav__item">
					<a href="" class="nav__link btn-link">Лаунчер</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link btn-link">Правила</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link btn-link">Как играть?</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link btn-link">Новости</a>
				</li>
			</ul>
		</nav>
		<a href="#" class="btn-a">Играть</a>
	</div>

</header>
</template>

<script>
	export default {
		name: 'DefHeader',
	}
</script>

<style lang="scss" scoped>

	.header{
		padding: 20px 0;
		align-items: center;
		background-color: rgba(#000000, 0.5);
		backdrop-filter: blur(16px);
		.nav__list{
			font-size: 1.125rem;
		}
	}
</style>