<template>
	<section class="section section__primary-bg">
		<div class="info-container">		
			<TitleSection
				title="Галерея сервера"
				description="Откройте для себя удивительные постройки и приключения от нашего сообщества." 
				dClass="!my-0 !mx-auto"
			/>
			<GalleryList/>
			<div class="flex justify-center !mt-4">
				<a href="#" class="btn-a">Посмотреть всё</a>
			</div>
		</div>
	</section>
</template>

<script>
import GalleryList from '../GalleryList.vue';

	export default {
		name: 'GallerySection',
		components: {
			GalleryList
		}
	}
</script>

<style lang="scss" scoped>

</style>