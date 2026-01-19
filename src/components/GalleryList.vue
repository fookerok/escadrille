<template>
	<div 
	class="grid grid-cols-3 gap-6">
	<GalleryItem
		v-for="(card, index) in cards"
		:key="index"
		:src="card.src"
		:name="card.name"
		:description="card.description"
		:date="card.date"
    />
	</div>
</template>

<script>
import GalleryItem from './GalleryItem.vue';

	export default {
		name: 'GalleryList',
		components: {
			GalleryItem
		},
		data (){
			return {
				cards: [
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Эпичные постройки',
						description: 'Массивные творческие структуры',
						date: 'Январь 15, 2026'
					},
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Современные здания',
						description: 'Уникальные архитектурные решения',
						date: 'Февраль 3, 2026'
					},
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Город будущего',
						description: 'Футуристические конструкции',
						date: 'Март 10, 2026'
					},
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Масштабные проекты',
						description: 'Невероятные инженерные идеи',
						date: 'Апрель 22, 2026'
					},
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Творческие сооружения',
						description: 'Креативные конструкции со всего мира',
						date: 'Май 5, 2026'
					},
					{
						src: new URL('@/assets/img/main/background.webp', import.meta.url).href,
						name: 'Архитектурные чудеса',
						description: 'Искусство в строительстве',
						date: 'Июнь 18, 2026'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>