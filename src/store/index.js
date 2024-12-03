import { createStore } from "vuex";

const store = createStore({
    state: {
        cart: [],
    },

    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        },

        clearCart(state) {
            state.cart = [];
        },

    },

    actions: {
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        clearCart({ commit }) {
            commit('clearCart');
        },
    }
})

export default store;