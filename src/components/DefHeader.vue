<template>
<header class="header">
	<div class="info-container flex justify-between items-center">
		<a href="/" class="logo__link flex items-center gap-3">
			<img src="../assets/icons/logo.svg" alt="" class="logo">
			Escadrille
		</a>
		<button class="burger md:hidden" @click="toggleMenu">
			<SvgIcon class="open-close" v-if="!menuOpen" width="32px" height="32px" icon="#open"/>
		</button>
		<nav class="nav hidden md:flex">
			<ul class="nav__list flex gap-5">
				<li v-for="item in menu" :key="item" class="nav__item">
					<a href="#" class="nav__link btn-link">{{ item }}</a>
				</li>
			</ul>
		</nav>
		<a href="#" class="btn-a hidden md:inline-block">Играть</a>
	</div>
</header>

<transition name="slide-right">
	<div v-if="menuOpen" class="mobile-menu fixed top-0 right-0 h-full w-72 z-50 md:hidden shadow-lg flex flex-col p-5">
		<button class="burger-close open-close self-end mb-4" @click="closeMenu">
			<SvgIcon width="32px" height="32px" icon="#close"/>
		</button>
		<ul class="mobile-nav flex flex-col !mb-4">
			<li class="border-b !py-2 border-gray-300/50" v-for="item in menu" :key="item">
				<a href="#" @click="closeMenu">{{ item }}</a>
			</li>
		</ul>
		<div class="mt-auto flex flex-col gap-3">
			<a href="/play" class="btn-a">Играть</a>
		</div>
	</div>
</transition>


<div v-if="menuOpen" class="overlay fixed inset-0 z-40" @click="closeMenu"></div>

</template>

<script>
export default {
	name: 'DefHeader',
	data() {
		return {
			menuOpen: false,
			menu: [
				'Лаунчер',
				'Правила',
				'Как играть',
				'Новости',
			]
		}
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen
			document.body.style.overflow = this.menuOpen ? 'hidden' : ''
		},
		closeMenu() {
			this.menuOpen = false
			document.body.style.overflow = ''
		}
	}
}
</script>

<style lang="scss" scoped>
	.open-close{
		stroke: white;
	}
	.header{
		padding: 20px 0;
		align-items: center;
		background-color: rgba(#000000, 0.5);
		backdrop-filter: blur(16px);
		.nav__list{
			font-size: 1.125rem;
		}
	}

	.burger {
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1002;
	}

	.mobile-menu{
		background-color: rgba(#000000, 0.5);
		padding: 20px;
	}
	.burger-close {
		cursor: pointer;
	}
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: transform 0.3s ease-in-out;
	}
	.slide-right-enter-from,
	.slide-right-leave-to {
		transform: translateX(100%);
	}
	.slide-right-enter-to,
	.slide-right-leave-from {
		transform: translateX(0);
	}
</style>