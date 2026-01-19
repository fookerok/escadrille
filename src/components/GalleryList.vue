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
import background1 from '../assets/img/main/background.webp'

	export default {
		name: 'GalleryList',
		components: {
			GalleryItem
		},
		data (){
			return {
				cards: [
					{
						src: background1,
						name: 'Эпичные постройки',
						description: 'Массивные творческие структуры',
						date: 'Январь 15, 2026'
					},
					{
						src: background1,
						name: 'Современные здания',
						description: 'Уникальные архитектурные решения',
						date: 'Февраль 3, 2026'
					},
					{
						src: background1,
						name: 'Город будущего',
						description: 'Футуристические конструкции',
						date: 'Март 10, 2026'
					},
					{
						src: background1,
						name: 'Масштабные проекты',
						description: 'Невероятные инженерные идеи',
						date: 'Апрель 22, 2026'
					},
					{
						src: background1,
						name: 'Творческие сооружения',
						description: 'Креативные конструкции со всего мира',
						date: 'Май 5, 2026'
					},
					{
						src: background1,
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