<template>
    <div>
      <div class="container">
        <h1>Combos</h1>
        <div class="row">
          <ComboCard
            v-for="combo in combos"
            :key="combo.id"
            :name="combo.name"
            :description="combo.description"
            :price="combo.price"
            :image="combo.image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ComboCard from '../components/ComboCard.vue';
  
  export default {
    name:'Combos',
    components: {
      ComboCard,
    },
    data() {
      return {
        combos: [
          { id: 1, name: 'Combo X', description: 'Hambúrguer + Bebida + Batata Frita', price: 29.90, image: '/images/combo1.jpg' },
          { id: 2, name: 'Combo Y', description: 'Hambúrguer Vegano + Suco Natural', price: 34.90, image: '/images/combo2.jpg' },
          { id: 3, name: 'Combo Z', description: 'Combo para 2 pessoas com hambúrgueres e batata', price: 59.90, image: '/images/combo3.jpg' },
        ],
      };
    },
  };
  </script>
  