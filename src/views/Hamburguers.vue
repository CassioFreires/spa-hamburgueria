<template>
  <Notification
      v-for="(notification, index) in notifications"
      :key="index"
      :message="notification.message"
      :type="notification.type"
    />
  <div class="container">
    <h2 class="my-4">Nossos Hambúrgueres</h2>
    <p v-if="cart.length > 0">
      {{ cart.length }} item(s) no carrinho
      <router-link class="nav-link" to="/cart">Ver carrinho</router-link>
    </p>
    <div class="row">
      <HamburguerCard
        v-for="(hamburguer, index) in hamburguers"
        :key="index"
        :name="hamburguer.name"
        :description="hamburguer.description"
        :price="hamburguer.price"
        :image="hamburguer.image"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import HamburguerCard from '@/components/HamburguerCard.vue';
import Notification from '@/components/Notification.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HamburgersView',
  components: {
    HamburguerCard,
    Notification
  },
  computed: {
    ...mapState(['cart'])
  },
  data() {
    return {
      hamburguers: [
        {
          name: 'Cheeseburger Clássico',
          description: 'Hambúrguer com carne suculenta, queijo cheddar, alface e molho especial.',
          price: 19.99,
          image: 'https://via.placeholder.com/300x200?text=Cheeseburger',
        },
        {
          name: 'Burguer BBQ',
          description: 'Hambúrguer de carne, cebola caramelizada, queijo cheddar e molho barbecue.',
          price: 22.50,
          image: 'https://via.placeholder.com/300x200?text=Burguer+BBQ',
        },
        {
          name: 'Veggie Burger',
          description: 'Hambúrguer vegetariano com hambúrguer de grão de bico, alface, tomate e maionese vegana.',
          price: 18.00,
          image: 'https://via.placeholder.com/300x200?text=Veggie+Burger',
        },
        {
          name: 'Bacon Burger',
          description: 'Hambúrguer com carne, bacon crocante, queijo cheddar e molho especial.',
          price: 23.50,
          image: 'https://via.placeholder.com/300x200?text=Bacon+Burger',
        },
      ],
      notifications: []
    };
  },
  methods: {

    ...mapActions(['addToCart']),

    handleAddToCart(hamburguer){
    this.cart.push(hamburguer)
    this.showNotification(`${hamburguer.name} foi adicionado ao carrinho!`);
    console.log(this.cart)
    },

    showNotification(message) {
      this.notifications.push({
        message,
        type: 'success', // or 'error' depending on the case
      });
    },
  }

};
</script>

<style scoped>
.container {
  padding: 20px;
}

.my-4 {
  margin-bottom: 2rem;
}
</style>
