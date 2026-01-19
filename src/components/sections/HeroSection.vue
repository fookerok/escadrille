<template>
	<section class="hero-section text-center">
		<div class="info-container">
			<CounterPlayers/>
			<h1 class="title max-lg:!mt-4"> <span class="primary">EscaDrille</span> Server</h1>
			<div class="feed__hashtag-wrapper w-full">
				<div class="feed__hashtag inline-flex gap-2">
					<Hashtag :hashtags="[
						'#Майнкрафт',
						'#Выживание',
						'#ДружелюбныйСервер',
						'#СпокойнаяИгра',
						'#БезГрифа',
						'#ЧестнаяИгра',
						'#АктивныйОнлайн',
						'#Развитие',
						'#Строительство',
						'#Исследование',
						'#СовместнаяИгра',
						'#СтабильныйСервер',
						'#КомфортнаяИгра',
						'#Сообщество',
						'#Геймплей'
					]" />
				</div>
			</div>
			<div class="subtitle max-lg:!text-base">
				Присоединяйтесь в&nbsp;захватывающее приключение на&nbsp;выживание. Стройте, исследуйте и&nbsp;покоряйте мир, созданный вами.
			</div>
			<div class="flex gap-4 justify-center min-md:!mb-16 !mb-4">
				<a href="#" class="btn-a">Играть</a>
				<a href="#" class="btn-a btn-a--transparent">Правила</a>
			</div>
			<div class="hero-list__card flex justify-around [@media(max-width:620px)]:gap-4 [@media(max-width:620px)]:flex-col">
				<div class="hero-item__card flex flex-col items-center">
					<div class="bg-green icon-block">
						<SvgIcon class="svg-default" icon="#users"/>
					</div>
					<div class="flex flex-col">
						<div class="name__card">Приветливые</div>
						<div class="discr__card">Игроки</div>
					</div>
				</div>
				<div class="hero-item__card flex flex-col items-center">
					<div class="bg-blue icon-block">
						<SvgIcon class="svg-default" icon="#servers"/>
					</div>
					<div class="flex flex-col">
						<div class="name__card">Качественные</div>
						<div class="discr__card">Сервера</div>
					</div>
				</div>
				<div class="hero-item__card flex flex-col items-center">
					<div class="bg-yellow icon-block">
						<SvgIcon class="svg-default" icon="#crown"/>
					</div>
					<div class="flex flex-col">
						<div class="name__card">Эксклюзивная</div>
						<div class="discr__card">Среда</div>
					</div>
				</div>
			</div>
			<div class="svg-mouse-block animate-bounce">
				<SvgIcon class="svg-mouse" icon="#mouse"/>
			</div>
		</div>
	</section>
</template>

<script>
	import CounterPlayers from '../CounterPlayers.vue'

	export default {
		name: 'HeroSection',
		components: {
			CounterPlayers
		}
	}
</script>

<style lang="scss" scoped>
	.hero-section{
		margin: 0 auto;
		padding: 100px 0 70px;
		@media (max-width:1024px){
			padding: 40px 0;
		}
	}
	.info-container{
		max-width: 768px;
	}
	.title{
		font-size: 6rem;
		@media (max-width: 1024px){
			font-size: 4rem;
			line-height: 1;
		}
		@media (max-width: 512px){
			font-size: 3.5rem;
		}
	}

	.subtitle{
		font-size: 1.5rem;
		margin-bottom: 20px;
	}

	.feed__hashtag{
		max-width: 1200px;
		animation: scroll 15s linear infinite;
	}

	.feed__hashtag-wrapper {
		overflow: hidden;       
		margin: 30px 0;
		border-radius: 20px;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.name__card{
		font-size: 1.4375rem;
		line-height: 1.25;
	}
.svg-mouse-block{
	margin: 50px auto 0 auto;
	display: flex;
	justify-content: center;
	.svg-mouse{
		width: 24px;
		height: 40px;
	}
}

</style>