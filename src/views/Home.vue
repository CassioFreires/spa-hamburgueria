
<template>
    <div>
      <div class="container">
        <h1>Bem-vindo à Spa Vue Hamburgueria!</h1>
        <p>Escolha o que deseja pedir e aproveite nossas delícias.</p>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    name:'Home',
    components: {
      NavBar,
    },
  };
  </script>
  