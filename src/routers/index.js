import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Hamburgers from '../views/Hamburguers.vue';
import Drinks from '../views/Drinks.vue';
import Combos from '../views/Combos.vue';
import Promotions from '../views/Promotions.vue';
import Cart from '../views/Cart.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/hamburgers', component: Hamburgers },
    { path: '/combos', component: Combos },
    { path: '/promotions', component: Promotions },
    { path: '/drinks', component: Drinks },
    { path: '/cart', component: Cart },
];
  
  const router = createRouter({
    history: createWebHistory(''),
    routes,
  });
  
  export default router;