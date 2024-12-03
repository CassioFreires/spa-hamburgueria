<template>
  <div class="col-md-4">
    <div class="card">
      <img :src="image" class="card-img-top" alt="Imagem da promoção">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text"><strong>{{ discount }}</strong></p>
        <button class="btn btn-primary">Aproveitar Promoção</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'PromotionCard',
  props: {
    title: String,
    description: String,
    discount: String,
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
