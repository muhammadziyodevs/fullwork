<template>
    <div class="container">
      <!-- <h1>Projects</h1> -->
      <slider-anime />
    </div>
  </template>
  
  <script>
    import sliderAnime from '@/components/sliderAnime.vue';
    export default {
      components:
      {
        sliderAnime
      }
    }
  
  </script>
  
  <style scoped>
  .container {
    width: 56%;
    /* height: 90vh;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 10px #000; */
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  
  
  
  </style>
  