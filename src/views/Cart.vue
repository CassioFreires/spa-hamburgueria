<template>
    <div class="container">
      <h2 class="my-4">Carrinho de Compras</h2>
  
      <div v-if="cart.length === 0" class="alert alert-info">
        Seu carrinho está vazio. Adicione itens para fazer o pedido!
      </div>
  
      <div v-else>
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <div class="row">
            <div class="col-3">
              <img :src="item.image" alt="Produto" class="img-fluid" />
            </div>
            <div class="col-6">
              <h5>{{ item.name }}</h5>
              <p>{{ item.description }}</p>
            </div>
            <div class="col-3">
              <p>R$ {{ item.price.toFixed(2) }}</p>
            </div>
          </div>
          <hr />
        </div>
  
        <div class="total">
          <h4>Total: R$ {{ totalPrice.toFixed(2) }}</h4>
          <button class="btn btn-danger me-2" @click="clearCart">Limpar Carrinho</button>
          <button class="btn btn-primary" @click="finalizeOrder">Finalizar Pedido</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    computed: {
      // Calculando o preço total dos itens no carrinho
      totalPrice() {
        return this.$store.state.cart.reduce((total, item) => total + item.price, 0);
      },
      cart() {
        return this.$store.state.cart;
      }
    },
    methods: {
      finalizeOrder() {
        alert('Pedido realizado com sucesso!');
        // Aqui você pode integrar com uma API de backend para registrar o pedido
        // Limpar o carrinho após a finalização do pedido
        this.$store.commit('clearCart');
      },
      clearCart() {
      if (confirm("Tem certeza que deseja limpar o carrinho?")) {
        this.$store.commit('clearCart');
      }
    }
    }
  };
  </script>
  
  <style scoped>
  .cart-item {
    margin-bottom: 15px;
  }
  .total {
    margin-top: 20px;
  }
  </style>
  