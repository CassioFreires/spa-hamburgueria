<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Tradição dos irmãos</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/hamburgers">Hambúrgueres</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/combos">Combos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/promotions">Promoções</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/drinks">Bebidas</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  .navbar {
    margin-bottom: 20px;
  }
  </style>