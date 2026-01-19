<template>
	<section class="section section__primary-bg">
		<div class="info-container">
			<TitleSection
				title="Почему стоит выбрать наш сервер?"
				description="Окунитесь в мир Minecraft, как никогда раньше, благодаря тщательно разработанным функциям и преданному сообществу." 
				dClass=" max-w-2xl !my-0 !mx-auto"
			/>
			<div class="cards__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<CardReception 
					cardColor="var(--color-emerald-500)" 
					icon="#sword"
					title="Пользовательский геймплей"
					description="Уникальные игровые режимы, включая режим выживания, творческий режим, PvP-арены и пользовательские мини-игры."
				/>
				<CardReception 
					cardColor="var(--color-blue-500)" 
					icon="#shield"
					title="Защищенные сборки"
					description="Расширенная защита от нежелательных изменений гарантирует сохранность ваших творений."
				/>
				<CardReception 
					cardColor="var(--color-amber-500)"  
					icon="#zip"
					title="Пользовательские плагины"
					description="Сотни пользовательских плагинов для улучшения игрового процесса и предоставления уникальных возможностей."
				/>
				<CardReception 
					cardColor="var(--color-purple-500)" 
					icon="#cup"
					title="События и награды"
					description="Еженедельные мероприятия, конкурсы и щедрые награды для активных членов сообщества."
				/>
				<CardReception 
					cardColor="var(--color-red-500)" 
					icon="#map"
					title="Эпический мир"
					description="Исследуйте наш обширный, созданный нами мир с уникальными биомами и структурами."
				/>
				<CardReception 
					cardColor="var(--color-cyan-500)" 
					icon="#users"
					title="Активное сообщество"
					description="Присоединяйтесь к дружелюбному и гостеприимному сообществу увлеченных игроков в Minecraft."
				/>
			</div>
		</div>

	</section>
</template>

<script>
	import CardReception from '../CardReception.vue';
	export default {
		name: 'CardsSection',
		components: {
			CardReception
		}
	}
</script>

<style lang="scss" scoped>

</style>