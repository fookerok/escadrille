<template>
	<section>
		<div 
			class="grid grid-cols-2 lg:grid-cols-3 [@media(max-width:480px)]:grid-cols-1 gap-6"
		>
			<GalleryItem
				v-for="(card, index) in paginatedCards"
				:key="index"
				:src="card.src"
				:name="card.name"
				:description="card.description"
				:date="formatDate(card.date)"
			/>
		</div>

		<div class="pagination flex justify-center gap-2 !mt-6">
			<button 
				@click="prevPage"
				:disabled="currentPage === 1"
				class="page-btn"
			>
				←
			</button>

			<button 
				v-for="page in totalPages" 
				:key="page"
				@click="goToPage(page)"
				:class="['page-btn', { active: currentPage === page }]"
			>
				{{ page }}
			</button>

			<button 
				@click="nextPage"
				:disabled="currentPage === totalPages"
				class="page-btn"
			>
				→
			</button>
		</div>
	</section>
</template>

<script>
import GalleryItem from './GalleryItem.vue'
import background1 from '../assets/img/main/background.webp'

export default {
	name: 'GalleryList',
	components: {
		GalleryItem
	},
	data() {
		return {
			currentPage: 1,
			perPage: 6,

			cards: [
				{
					src: background1,
					name: 'Эпичные постройки',
					description: 'Массивные творческие структуры',
					date: '2026-01-15'
				},
				{
					src: background1,
					name: 'Современные здания',
					description: 'Уникальные архитектурные решения',
					date: '2026-02-03'
				},
				{
					src: background1,
					name: 'Город будущего',
					description: 'Футуристические конструкции',
					date: '2026-03-10'
				},
				{
					src: background1,
					name: 'Масштабные проекты',
					description: 'Невероятные инженерные идеи',
					date: '2026-04-22'
				},
				{
					src: background1,
					name: 'Творческие сооружения',
					description: 'Креативные конструкции со всего мира',
					date: '2026-05-05'
				},
				{
					src: background1,
					name: 'Архитектурные чудеса',
					description: 'Искусство в строительстве',
					date: '2026-06-18'
				},
				{
					src: background1,
					name: 'Тест',
					description: 'Искусство в строительстве',
					date: '2026-06-20'
				},
			]
		}
	},
	computed: {
		// 🔥 сортировка по дате (новые сверху)
		sortedCards() {
			return [...this.cards].sort((a, b) => {
				return new Date(b.date) - new Date(a.date)
			})
		},

		totalPages() {
			return Math.ceil(this.cards.length / this.perPage)
		},

		paginatedCards() {
			const start = (this.currentPage - 1) * this.perPage
			return this.sortedCards.slice(start, start + this.perPage)
		}
	},
	methods: {
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++
			}
		},
		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--
			}
		},
		goToPage(page) {
			this.currentPage = page
		},
		formatDate(date) {
			return new Date(date).toLocaleDateString('ru-RU', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.pagination {
	.page-btn {
		padding: 8px 14px;
		border-radius: 8px;
		background: #1f2937;
		color: #fff;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			background: #10b981;
		}

		&.active {
			background: #10b981;
			font-weight: bold;
		}

		&:disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}
	}
}
</style>