<template>
	<section class="section section__primary-bg">
		<div class="info-container">		
			<TitleSection
				title="Галерея сервера"
				description="Откройте для себя удивительные постройки и приключения от нашего сообщества." 
				dClass="!my-0 !mx-auto"
			/>
			<GalleryList/>
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