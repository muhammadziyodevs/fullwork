<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="mySwiper"
    >
      <swiper-slide v-for="project in projects" :key="project.name">
        <div class="slide-content">
          <img :src="project.image" alt="Project Image" class="project-image"/>
          <a :href="project.link" target="_blank" class="project-link">
            <i class="fab fa-github"></i> 
            <h3>{{ project.name }}</h3>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        
        const projects = [
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/flexbox.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
          {
            name: 'Portfolio Website',
            link: 'https://github.com/username/portfolio',
            image: '../src/assets/images/grid.jpg', // Rasm URL
          },
        ];

      return {
          modules: [EffectCoverflow, Pagination, Autoplay],
          projects,
      
    }
  }
}
  </script>
<style scoped>
    

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


</style>  