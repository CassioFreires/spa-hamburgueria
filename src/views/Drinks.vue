<template>
    <div>
      <div class="container">
        <h1>Bebidas</h1>
        <div class="row">
          <DrinkCard
            v-for="drink in drinks"
            :key="drink.id"
            :name="drink.name"
            :description="drink.description"
            :price="drink.price"
            :image="drink.image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DrinkCard from '../components/DrinkCard.vue';
  
  export default {
    name:'Drinks',
    components: {
      DrinkCard,
    },
    data() {
      return {
        drinks: [
          { id: 1, name: 'Coca-Cola', description: 'Refrigerante de cola.', price: 5.90, image: '/images/drink1.jpg' },
          { id: 2, name: 'Guaraná Antarctica', description: 'Refrigerante de guaraná.', price: 5.90, image: '/images/drink2.jpg' },
          { id: 3, name: 'Suco de Laranja', description: 'Suco natural de laranja.', price: 6.50, image: '/images/drink3.jpg' },
        ],
      };
    },
  };
  </script>
  