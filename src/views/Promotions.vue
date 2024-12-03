<template>
    <div>
      <div class="container">
        <h1>Promoções do Dia</h1>
        <div class="row">
          <PromotionCard
            v-for="promotion in promotions"
            :key="promotion.id"
            :title="promotion.title"
            :description="promotion.description"
            :discount="promotion.discount"
            :image="promotion.image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PromotionCard from '../components/PromotionCard.vue';
  
  export default {
    name:'Promotions',
    components: {
      PromotionCard,
    },
    data() {
      return {
        promotions: [
          { id: 1, title: 'Promoção X', description: 'Compre um hambúrguer e ganhe uma bebida grátis!', discount: 'Desconto: 15%', image: '/images/promotion1.jpg' },
          { id: 2, title: 'Promoção Y', description: 'Combo Família com 20% de desconto', discount: 'Desconto: 20%', image: '/images/promotion2.jpg' },
          { id: 3, title: 'Promoção Z', description: 'Suco grátis para compras acima de R$ 50', discount: 'Desconto: 10%', image: '/images/promotion3.jpg' },
        ],
      };
    },
  };
  </script>
  