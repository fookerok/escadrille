<template>
	<section class="section">
	<div class="info-container">
		<TitleSection
			title="Присоединяйтесь к нашему сообществу"
			description="Общайтесь с тысячами игроков, делитесь своими постройками, получайте помощь и будьте в курсе последних новостей и событий сервера." 
			dClass="max-w-2xl !my-0 !mx-auto"
		/>
		<div class="flex justify-between">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/kO89vRsJfZA?si=pDzkcywGIcqJ2be0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
			</iframe>
			<div class="cards-contact flex flex-col justify-between">
				<div v-for="(contact, index) in contacts" :key="index" class="cards-contact__item flex gap-4 !p-4 items-center">
					<a :href="contact.href" class="cards-contact__link flex justify-center items-center rounded-lg" :class="contact.class">
						<SvgIcon class="svg-default" :icon="contact.icon" />
					</a>
					<div class="flex flex-col">
						<div class="cards-contact__title">{{ contact.title }}</div>
						<div class="cards-contact__discr">{{ contact.description }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</section>
</template>

<script>
export default {
	name: 'VideoSection',
	data() {
		return {
			contacts: [
				{
					icon: '#discord',
					title: 'Discord',
					description: 'Общайтесь с игроками, получайте поддержку и участвуйте в мероприятиях.',
					href: '#',
					class: 'discord-color',
				},
				{
					icon: '#youtube',
					title: 'YouTube',
					description: 'Смотрите обучающие видео, лучшие моменты событий и демонстрации игроков.',
					href: '#',
					class: 'youtube-color',
				},
				{
					icon: '#telegram',
					title: 'Telegram',
					description: 'Будьте в курсе новостей и участвуйте в обсуждениях.',
					href: '#',
					class: 'telegram-color',
				},
			],
		}
	},
}

</script>

<style lang="scss" scoped>
.cards-contact{
	&__item{
		border: 1px solid $color-neutral-950;
		background-color: rgba($color-neutral-900, 70%);
		border-radius: 10px;
	}
	&__link{
		width: 48px;
		height: 48px;
	}
	&__title{
		font-size: 1.25rem;
	}
	&__discr{
		color: $color-neutral-400;
	}
}

.discord-color{
	background-color: rgba($color-indigo-500, 20%);
	.svg-default{
		fill: $color-indigo-500;
	}
}
.youtube-color{
	background-color: rgba($color-red-500, 20%);
	.svg-default{
		stroke: $color-red-500;
	}
}
.telegram-color{
	background-color: rgba($color-blue-400, 20%);
	.svg-default{
		fill: $color-blue-400;
	}
}
</style>