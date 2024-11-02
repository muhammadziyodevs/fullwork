<template>
  <div class="animated-bg">
        <about-view />
        <work-view />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AboutView from '@/views/AboutView.vue';
import WorkView from '@/views/WorkView.vue';
export default {
    components:{
        AboutView, WorkView
    },
  setup() {
    const gradientPosition = ref(0);

    const animateBackground = () => {
      const animatedBg = document.querySelector('.animated-bg');
      setInterval(() => {
        gradientPosition.value += 1;
        animatedBg.style.backgroundPosition = `${gradientPosition.value}%`; 
        if (gradientPosition.value >= 100) {
          gradientPosition.value = 0;
        }
      }, 50);
    };

    onMounted(() => {
      animateBackground();
    });
  }
}
</script>

<style scoped>
.animated-bg {
  height: 95vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(45deg, #5267d0, #5ea9be, #001c58);
  background-size: 300% 300%;
  animation: gradient 15s ease infinite;
  border-radius: 20px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1 {
  color: white;
  font-size: 3rem;
}

</style>
