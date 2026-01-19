<template>
  <div class="flex flex-col min-h-screen">
    <main class="main flex-1 bg-transparent">
      <HeroSection/>
      <CardsSection/>
      <VideoSection/>      
      <GallerySection/>
      <AdressSection/>
    </main>
    <DefFooter/>
  </div>
</template>

<script>
  import DefHeader from './components/DefHeader.vue';
  import DefFooter from './components/DefFooter.vue';
  import HeroSection from './components/sections/HeroSection.vue';
  import CardsSection from './components/sections/CardsSection.vue';
  import VideoSection from './components/sections/VideoSection.vue';
  import AdressSection from './components/sections/AdressSection.vue';
  import GallerySection from './components/sections/GallerySection.vue';

  export default {
    components: {
      DefHeader,
      HeroSection,
      DefFooter,
      CardsSection,
      VideoSection,
      AdressSection,
      GallerySection
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/variables.scss';
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  #app {
    background: url('./assets/img/main/background.webp') no-repeat center center fixed;
    background-size: cover;
  }

  body {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    color: white;
  }
  
  .info-container{
		max-width: 1336px;
		padding: 0 20px;
		margin: 0 auto;
	}

  .primary{
    color: #000;
  }

  .logo{
    height: 40px;
    width: 35px;
  }

	.btn-link{
		padding: 8px 0;
		&:hover{
			color: rgba($color: #ffffff, $alpha: 0.5);
			transition: all 0.3s;
		}
	}

  .logo__link{
    font-size: 1.25rem;
  }

  .primary{
    color: $color-emerald-400;
  }

  .btn-a{
    background-color: $color-emerald-400;
    padding: 8px 24px;
    border-radius: 10px;
    &--transparent{
      background-color: rgba($color: #000000, $alpha: 0.5);
      border: 1px solid $color-neutral-400;
    }
  }
  .svg-default{
    width: 24px;
    height: 24px;
  }

  .icon-block{
    padding: 12px;
    border-radius: 10px;
    max-width: 48px;
    max-height: 48px;
  }

  .bg-green{
    background-color: color-mix(in oklab, $color-emerald-500 20%, transparent);
    .svg-default{
      stroke: $color-emerald-500;
    }
  }

  .bg-blue{
    background-color: color-mix(in oklab, $color-blue-500 20%, transparent);
    .svg-default{
      stroke: $color-blue-500;
    }
  }

  .bg-yellow{
    background-color: color-mix(in oklab, $color-amber-500 20%, transparent);
    .svg-default{
      stroke: $color-amber-500;
    }
  }
  .section{
    padding: 70px 0;
  }
  .section__primary-bg{
    background-color: $color-neutral-900;
  }
</style>


