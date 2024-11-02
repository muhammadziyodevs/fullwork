import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const app = createApp(App)

app.use(router)

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app')
