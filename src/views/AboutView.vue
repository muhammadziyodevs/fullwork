<template>
  <div class="about"> 
      <h1>Muhammadziyo</h1>
      <p>Frontend developer</p>
      <p style="line-height: 16px; width: 300px; text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem vel nostrum veniam aperiam explicabo dicta dolores quos, aut obcaecati facilis culpa blanditiis optio error quia dignissimos iste necessitatibus molestias.</p>
    <div class="social-icons">
      <a href="#" class="social-icon">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-telegram"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<style >
  .about{
  width: 40%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h1{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';
font-size: 40px;
line-height: 5px;
}
.social-icons{
  display: flex;
  width: 300px;
  /* margin-top: 50px; */
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  padding: 15px;
  border-radius: 30px;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 0px;
  margin-bottom: 30px;
}
.social-icon {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
}

.social-icon:hover {
  background-color: #555;
}

.social-icon i {
  font-size: 18px;
}

</style>
