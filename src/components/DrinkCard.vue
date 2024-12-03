<template>
    <div class="col-md-4">
      <div class="card">
        <img :src="image" class="card-img-top" alt="Imagem da bebida">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">{{ description }}</p>
          <p class="card-text"><strong>R$ {{ price }}</strong></p>
          <button class="btn btn-primary">Adicionar ao pedido</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DrinkCard',
    props: {
      name: String,
      description: String,
      price: Number,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>